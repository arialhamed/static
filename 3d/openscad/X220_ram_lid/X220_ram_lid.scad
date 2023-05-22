// X220_ram_lid.scad 
// Designed by: Arial Hamed 🏳️‍🌈
// Created: 2023-May-20
// Description: Replacement lid/cover for random-access memory modules for X220, X220i, X220 Tablet, X220i Tablet, X230, X230i, X230 Tablet & X230i Tablet.
// Released as FOSS. If this file is not distributed under GNU-GPL, please contact me via arifhamed.arial@outlook.com
echo(version=version());


// 1 = 1mm, 16.9 = 16.9mm, 1 unit is 1 milimetre. The following values here are real metrics, except for real_z, which is based off an estimation. The real lid is made out of metal, and I do not have vernier calipers.
real_x = 95;
real_y = 82;
real_z = 0.6666666;
main_res = 64; // Resolution for arcs in spheres, cylinders & circles. Higher res means more smoother models & more accurate models dimensions
ansi=0.18; // This value is for deburring the model (remove sharp edges), using minkowski function here in OpenSCAD, following ANSI Z359.14 standard, to a minimum of 0.127mm (0.005 inches). I think that's what it means anyway ¯\_(ツ)_/¯ i just don't want my models to hurt anyone. 
allowance=0.001; // This value is for when I really want to make sure that shapes connect

// The minkCube, short for Minkowski Cube, is basically a cuboid shape with rounded edges, with a radius that is ANSI
module minkCube(pos_x, pos_y, pos_z, dim_x, dim_y, dim_z, val_rad){
    // pos = position, dim = dimensions, val_rad = rounded radius
    translate([val_rad, val_rad, val_rad])
    minkowski(){
        translate([pos_x, pos_y, pos_z])
        cube(size=[dim_x-val_rad*2,dim_y-val_rad*2,dim_z-val_rad*2], center=false);
        sphere(r=val_rad, $fn=main_res);
    }
}


// Base model.
module ramLidStageI(main_x, main_y, main_z){
    zero_error = [2,-2]; // Zero error handling for vent slit, due to tilt of cube. adjust accordingly if shape dim, rot, trans need to be modified.
    
    // Objects for reuse (some are needed in both add & subtract)
    module ventSlit(mod_x=0, mod_y=0){ 
        translate([20 + zero_error[0] + mod_x, 9.5 + zero_error[1] + mod_y, -main_z]) 
        rotate([20, 0, 45]) 
        cube([6, main_z*8, .3]);
    } // These are those vent holes, almost the same as the ones below the exhaust fans. Keeping it here for the sake of originality (and also for cooling, if it is effective).
    module standoffs(mod_x, mod_y, mod_z){
        translate([mod_x, mod_y, mod_z]) cylinder(h=main_z*2, d1=4.5, d2=6.5, $fn=main_res);
    } // There are the cone shapes that will help in creating the actual screwholes that this lid will be held with onto the laptop body. There are only 2 of these.
    module kbScrewhole(mod_x, mod_y){
        translate([mod_x, mod_y, -main_z]) cylinder(h=main_z*3, d=5.5, $fn=main_res);
    } // There are also only 2 of these, and not much attention needed as there are quite simple.
    
    // Addition.
    module additionStage(){
        // minkCube(0, 0, 0, main_x, main_y, main_z, ansi); // Main body
        xy_curve = 2;
        module toBeHollowed(){
            // TODO the side rails feature
        }
        translate([ansi, ansi, ansi])
        minkowski(){
            minkowski(){
                translate([xy_curve,xy_curve,0])
                cube(size=[main_x-ansi*2-xy_curve*2,main_y-ansi*2-xy_curve*2,main_z-ansi*2], center=false);
                cylinder(h=ansi, r=xy_curve, center=true, $fn=main_res);
            }
            sphere(r=ansi, $fn=main_res);
        }
        
        // Tabs that ensure that the lid does not fully depend on the screws (essential).
        mod_tab = 4; // Tab modifier(?), original lid was made from metal and bended, so it's very hard to do it 1x1 in 3D modelling.
        tabz = 1/mod_tab; // Tab height.
        module hingeTab(){
            translate([0, main_y, -tabz/2*3]) 
            // minkowski(){
            //     translate([ansi,ansi,0]) cube([6-ansi*2, 1.5-ansi*2, tabz]);
            //     cylinder(h=tabz, r=-ansi, center=true, $fn=main_res);
            // }; 
            cube([6, 1.5, tabz]);// Protruding tab, TODO: ansify the tabs here
            translate([0, main_y, -tabz/2*3]) rotate([78+mod_tab/2,0,0]) { cube([6, tabz * 1.1, 1.5]); }; // "Triangle" that ensures tab is connected.
        };
        translate([6, 0, 0]) hingeTab();
        translate([45, 0, 0]) hingeTab();
        translate([84.5, 0, 0]) hingeTab();
        standoffs(5, 5, -main_z); // This will add the thickness to allow itself to actually touch the laptop's magnesium cage.
        standoffs(89.5, 5, -main_z); // ^

        // The next following added shapes are the little flat bumps that exist on the edge of the main body, caused by folding of the metal (for the actual manufactures to follow ANSI standard as well).
        speed_bump_z_pos = -main_z/3*2;
        speed_bump_z_dim = main_z/2*3;
        minkCube(10.5, 0, speed_bump_z_pos, 63.5, 3, speed_bump_z_dim, ansi); // between the standoffs
        minkCube(0, 10.5, speed_bump_z_pos, 3, 68.5, speed_bump_z_dim, ansi); // to the left
        minkCube(main_x-3, 10.5, speed_bump_z_pos, 3, 68.5, speed_bump_z_dim, ansi); // to the right
        module trapezoidBump(the_x){
            translate([ansi, ansi, ansi]) minkowski(){
                translate([the_x, main_y-3, speed_bump_z_pos]) linear_extrude(height=speed_bump_z_dim -ansi*2){ polygon(points = [[0+ansi*2, 3-ansi*2], [3+ansi*2, 0+ansi*2], [30-ansi*2, 0+ansi*2], [33-ansi*2, 3-ansi*2]]); }
                sphere(r=ansi, $fn=main_res);
            }
        }
        trapezoidBump(12);
        trapezoidBump(51);
        
    }
    
    // Subtraction
    difference(){ 
        additionStage();
        kbScrewhole(47.5, 63.5); // Keyboard screwhole to keyboard (centre)
        kbScrewhole(78.5, -.25); // Keyboard screwhole to keyboard (bottom right)
        for ( i = [0 : 14]) { // For each left & right vent slits, should be 30 slits in total
            ventSlit(mod_y=i*4.26);
            ventSlit(mod_y=i*4.26, mod_x=38.5);
        }
        standoffs(5, 5, -main_z / 3 * 2); // This subtracts and hollows the shape added earlier to allow space for the screw head
        standoffs(89.5, 5, -main_z / 3 * 2); // ^
        translate([5, 5, -main_z*2]) cylinder(h=main_z*5, r=1.1, $fn=main_res); // Of course, ^ does not give the hole, so just add a fine cylinder to give it the hole
        translate([89.5, 5, -main_z*2]) cylinder(h=main_z*5, r=1.1, $fn=main_res); // ^
        
    };
    
}

// Yassification
module ramLidStageII(main_x, main_y, main_z){
    // Here where things get absolutely slayyy. There will be little comments here as the following beautifying will all be hardcoded to the teeth
    indent = main_z / 2;    // indent (decides how deep these etches should be
    t = .3;                 // thickness
    iconX1 = t * 11;        // touchpadIcon X
    iconX2 = t * 13;        // keyboardIcon X
    iconY = t * 9;
    
    module touchpadIcon(mx,my){
        translate([mx, my, main_z-indent]) cube([t, iconY, indent*2]);
        translate([mx, my, main_z-indent]) cube([iconX1, t, indent*2]);
        translate([mx+iconX1-t, my, main_z-indent]) cube([t, iconY, indent*2]);
        translate([mx, my+iconY-t, main_z-indent]) cube([iconX1, t, indent*2]);
        for ( i = [1 : 5] ) {
            translate([mx+t*(2*i), my+iconY-t*2, main_z-indent]) cube([t, t * 2, indent*2]);
        }
    }
    
    module keyboardIcon(mx,my){
        translate([mx, my, main_z-indent]) cube([t, iconY, indent*2]);
        translate([mx, my, main_z-indent]) cube([iconX2, t, indent*2]);
        translate([mx+iconX2-t, my, main_z-indent]) cube([t, iconY, indent*2]);
        translate([mx, my+iconY-t, main_z-indent]) cube([iconX2, t, indent*2]);
        for ( i = [1 : 5] ) {
            translate([mx+t*(2*i), my+t*2, main_z-indent]) cube([t, t, indent*2]);
            translate([mx+t*(2*i), my+t*4, main_z-indent]) cube([t, t, indent*2]);
        }
        translate([mx+t*2, my+t*6, main_z-indent]) cube([t, t, indent*2]);
        translate([mx+t*4, my+t*6, main_z-indent]) cube([t*5, t, indent*2]);
        translate([mx+t*10, my+t*6, main_z-indent]) cube([t, t, indent*2]);
    }
    
    difference(){
        ramLidStageI(main_x, main_y, main_z);   // place the ram lid
        touchpadIcon(43.8, 54.5);               // etch the touchpad(?) icon
        keyboardIcon(48, 54.5);                 // etch the keyboard icon
        translate([46.7,58.1,main_z-indent]) linear_extrude(height=indent*2) polygon([[0,0],[1.6,0],[0.8,1.5]]); // Arrow
    }
}

// translate([real_x,0,real_z]) 
// rotate([180,0,180]) 
// color("#aa4466") 
ramLidStageII(real_x, real_y, real_z);
