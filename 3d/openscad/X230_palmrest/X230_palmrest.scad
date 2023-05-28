// X230_palmrest.scad 
// Designed by: Arial Hamed 🏳️‍🌈
// Created: 2023-May-20
// Description: Replacement palmrest without touchpad for X230, X230i, X230 Tablet & X230i Tablet.
// Released as FOSS. If this file is not distributed under GNU-GPL, please contact me via arifhamed.arial@outlook.com
echo(version=version());

// 1 = 1mm, 16.9 = 16.9mm, 1 unit is 1 milimetre. The following values here are real metrics, except for real_z, which is based off an estimation. The real lid is made out of metal, and I do not have vernier calipers.
ansi=0.23; // This value is for deburring the model (remove sharp edges), using minkowski function here in OpenSCAD, following ANSI Z359.14 standard, to a minimum of 0.127mm (0.005 inches). I think that's what it means anyway ¯\_(ツ)_/¯ i just don't want my models to hurt anyone. 
allowance=0.001; // This value is for when I really want to make sure that shapes connect

// Signature
module signature(sign_x, sign_y, sign_z, sign_depth, sign_size=1){ translate([sign_x, sign_y, sign_z]) linear_extrude(height=sign_depth) offset(r=0.01){  scale([(1/20)*sign_size,.05*sign_size,.05*sign_size]){ polygon([[0,0],[8,16],[16,0],[15,0],[8,14],[1,0]]); polygon([[15,0],[4,7],[4,8],[15,1]]); polygon([[4,7],[17,7],[17,7.8],[17,7],[17,7.8],[4,7.8]]); polygon([[16.9,7],[8.9,14],[8,16],[20,16],[19,15.2],[9,15.2],[17,8],[18,7]]); polygon([[5.8,17.8],[5,20],[4.2,17.8],[6.1,19.23],[3.9,19.23]]); translate([0,(-sign_size/3.5)/5*7.5,0]) text("arial hamed", size=sign_size/3.5, font="Liberation Mono");  } } }

module palmrestFunctional(main_x, main_y, main_z) {
	module curvedLayer() { 
		translate([0, 8.5]) square([main_z, main_y-8.5]); // Main long boi
		rotate([0,0,51.7]) translate([ansi*1.274,0]) minkowski(){square([1+main_z, 6.5]); circle(ansi);}// Angled short boi
		translate([0, 8.5]) circle(main_z); // Round smooth boi
	}
	translate([main_x,0,0]) rotate([0,-90,0]) linear_extrude(main_x){ // Extrude and rotate 2D curvedLayer
		difference(){
			union(){
				difference(){
					curvedLayer(); // Upper surface
					translate([-1,.4,0]) curvedLayer(); // Hollow the upper surface to creater the lower surface
				}
				translate([ansi/4, 0]) square([ansi*.6,ansi*.6]); // Vertical body
				translate([ansi/4, ansi/4]) circle(ansi/4); // Slightly small curve at the bottom of the vertical
			}
			translate([-2,0]) square([2,2]); // Trim off the front edge
		}
	}
}

module palmrestDetailed(main_x, main_y, main_z) {
	palmrestFunctional(main_x, main_y, main_z);
}

module palmrestFinal(main_x, main_y, main_z) {
	palmrestDetailed(main_x, main_y, main_z);
}

real_x = 305;
real_y = 76;
real_z = 5.5;
$fn = 64; // Resolution for arcs in spheres, cylinders & circles. Higher res means more smoother models & more accurate models dimensions, at the cost of machine performance (duh)

palmrestFinal(real_x, real_y, real_z);