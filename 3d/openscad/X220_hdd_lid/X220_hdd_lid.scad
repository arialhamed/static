// X220_hdd_lid.scad 
// Designed by: Arial Hamed 🏳️‍🌈
// Created: 2023-May-25
// Description: Replacement lid/cover for 2.5" HDD/SSD slot for X220, X220i, X220 Tablet, X220i Tablet, X230, X230i, X230 Tablet & X230i Tablet.
// Released as FOSS. If this file is not distributed under GNU-GPL, please contact me via arifhamed.arial@outlook.com
echo(version=version());


// 1 = 1mm, 16.9 = 16.9mm, 1 unit is 1 milimetre. The following values here are real metrics, except for real_z, which is based off an estimation. The real lid is made out of metal, and I do not have vernier calipers.
real_x = 83;
real_y = 10;
real_z = 7.5;
arc_resolution = 64; // Resolution for arcs in spheres, cylinders & circles. Higher res means more smoother models & more accurate models dimensions, at the cost of machine performance (duh)
ansi=0.23; // This value is for deburring the model (remove sharp edges), using minkowski function here in OpenSCAD, following ANSI Z359.14 standard, to a minimum of 0.127mm (0.005 inches). I think that's what it means anyway ¯\_(ツ)_/¯ i just don't want my models to hurt anyone. 
allowance=0.001; // This value is for when I really want to make sure that shapes connect

// Signature
module signature(sign_x, sign_y, sign_z, sign_depth, sign_size=1){ translate([sign_x, sign_y, sign_z]) linear_extrude(height=sign_depth) offset(r=0.01, $fn=40){  scale([(1/20)*sign_size,.05*sign_size,.05*sign_size]){ polygon([[0,0],[8,16],[16,0],[15,0],[8,14],[1,0]]); polygon([[15,0],[4,7],[4,8],[15,1]]); polygon([[4,7],[17,7],[17,7.8],[17,7],[17,7.8],[4,7.8]]); polygon([[16.9,7],[8.9,14],[8,16],[20,16],[19,15.2],[9,15.2],[17,8],[18,7]]); polygon([[5.8,17.8],[5,20],[4.2,17.8],[6.1,19.23],[3.9,19.23]]); translate([0,(-sign_size/3.5)/5*7.5,0]) text("arial hamed", size=sign_size/3.5, font="Liberation Mono");  } } }

module hddLidFunctional(main_x, main_y, main_z, main_res){

    donut_outerRad = 4.15;
    donut_y = 2.75;
    donut_z = 4.5;
    holder_x = .6;

    module addition(){

        // Main body
        cube([main_x, 1, 4.5]); // Vertical piece bottom
        translate([4,0,main_z-4]) cube([main_x-4, 1, 4]); // Vertical piece upper
        minkowski(){ 
            translate([ansi, ansi, ansi]) 
            cube([main_x -(ansi*2), main_y -(ansi*2), 1 -(ansi*2)]); // Horizontal piece
            sphere(r=ansi, $fn=main_res); 
        }

        // Inner curve
        translate([0, 1, 1]) difference(){ // Curve to main laptop edge
            translate([0,-allowance,0]) cube(size=[main_x+allowance*2,1,1], center=false);
            translate([allowance,-allowance+1,1]) rotate([0,90,0]) cylinder(h=main_x+allowance*2, r=1, center=false, $fn=main_res);
        }
        
        // Top (larger) half of donut 
        difference(){ 
            translate([donut_outerRad,0,4.5]) rotate([-90,0,0]) cylinder(h=2.75, r=donut_outerRad, $fn=main_res);
            cube([8,donut_y+allowance,donut_z]);
        }

        // Bottom (smaller) half of donut 
        translate([donut_outerRad,0,donut_z]) rotate([-90,0,0]) cylinder(h=donut_y, r=donut_outerRad * (3.251/4), $fn=main_res); // Bottom semi-circle
        
        // The holders of the donut 
        cube(size=[holder_x, donut_y, donut_z], center=false);
        translate([donut_outerRad*2-holder_x, 0, 0]) cube(size=[holder_x, donut_y, donut_z], center=false);
        translate([donut_outerRad-(0.3/2),.75,.75]) cube([0.3,2,.5]);

        // A filler between the the holders & the donut 
        translate([0, 0, 4.5-1]) cube(size=[8,donut_y,1], center=false);

        // Side tabs 
        translate([25.3, 9, .9]) cube(size=[4.5, 1.75, .75], center=false);
        translate([59.5, 9, .9]) cube(size=[4.5, 1.75, .75], center=false);

        // Locking tab (IMPORTANT) 
        translate([main_x-1+ansi, ansi, ansi]) 
        union(){
            minkowski(){ cube(size=[1-(ansi*2), 6.5-(ansi*2), 3-(ansi*2)], center=false); sphere(r=ansi, $fn=main_res); }
            minkowski(){ translate([0, 2, 2.25]) cube(size=[3-(ansi*2), 3-(ansi*2), .75-(ansi*2)], center=false); sphere(r=ansi, $fn=main_res); }
        }


    }

    difference(){
        addition();

        curved_hollow_rad = 2;

        // The curved hollow, just perpendicular to the standoff
        translate([0, donut_y+curved_hollow_rad+allowance, -allowance]) minkowski(){ 
            cube(size=[donut_outerRad*2-curved_hollow_rad-holder_x, main_y, 1+allowance*2]);
            cylinder(h=1+allowance*2, r=curved_hollow_rad, $fn=main_res);
        }

        // The curve to the corner of the hollow
        translate([donut_outerRad*2-holder_x, main_y-(curved_hollow_rad/2), -allowance]) difference(){
            translate([-allowance, allowance, -allowance]) cube(size=[(curved_hollow_rad/2), (curved_hollow_rad/2), 1+allowance*2], center=false);
            translate([curved_hollow_rad/2, 0, -allowance]) cylinder(h=1+allowance*2, r=(curved_hollow_rad/2), center=false, $fn=main_res);
        }

        // Main hole & space for screwhead
        translate([donut_outerRad,-1,donut_z]) rotate([-90,0,0]) cylinder(h=5, r=1.5, $fn=main_res); 
        translate([donut_outerRad,1.75,donut_z]) rotate([90,0,0]) cylinder(h=5, r=3.25, $fn=main_res); 

        // Outer curve to main laptop edge
        translate([-allowance, 0, -allowance]) difference(){ 
            translate([0,-allowance,0]) cube(size=[main_x+allowance*2,2,2], center=false);
            translate([0,-allowance+2,2]) rotate([0,90,0]) cylinder(h=main_x+allowance*2, r=2, center=false, $fn=main_res);
        }

    }
    
}

module hddLidYassified(main_x, main_y, main_z, main_res){
    hddLidFunctional(main_x, main_y, main_z, main_res);
    floorThicknessWithAllowance_z = .9;

    // There are 2 sets of 3 stick jammies underneath
    module innerStick(the_xArr, idx=0, innerStickMink=.075){
        if (idx < len(the_xArr)) {
            minkowski(){
                translate([ the_xArr[idx] +innerStickMink, main_y-1-8+innerStickMink, floorThicknessWithAllowance_z-innerStickMink]) 
                cube(size=[.25-(innerStickMink*2),8-(innerStickMink*2),.25], center=false); 
                sphere(r=innerStickMink, $fn=main_res);
            }
            innerStick(the_xArr, idx + 1);
        }
    }
    innerStick([9.5, 11.5, 13.5, 76.5, 78.5, 80.5]);

    // There are 2 structures that are kinda like scaffolding (the rectangles)
    module scaffoldStructure(the_xArr, idx=0){
        if (idx < len(the_xArr)) {
            translate([the_xArr[idx][0], main_y-2-the_xArr[idx][1], floorThicknessWithAllowance_z]) cube(size=[the_xArr[idx][2], the_xArr[idx][3], .75], center=false);
            scaffoldStructure(the_xArr, idx + 1);
        }
    }
    scaffoldStructure([[25.3, 7, .25, 7, .75], [25.3, .25, 13.75, .25, .75], [25.3, 4.75, 13.75, .25, .75], [38.8, 7, .25, 7, .75], [59.25, 7, .25, 7, .75], [59.25, .25, 7.5, .25, .75], [59.25, 4.75, 7.5, .25, .75], [66.5, 7, .25, 7, .75]]);
    


}

module hddLidFinal(main_x, main_y, main_z, main_res){
    difference(){
        hddLidYassified(main_x, main_y, main_z, main_res);
        translate([main_y/7*10.5, main_y / 3, .5-allowance]) rotate([180,0,180]) signature(0,0,0,.5, main_y/5*3);
    }
}

hddLidFinal(real_x, real_y, real_z, arc_resolution);