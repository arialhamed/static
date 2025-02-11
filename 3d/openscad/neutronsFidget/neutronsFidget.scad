// just a little trinket for myself ^_^

module tomoWork() {
	module letterM(){
		color("#FFA116") scale([1,1,1+allowance]) {
			offset(.5) {
				difference(){
					translate([-1.5+allowance,1.5+allowance]) circle(1.5); // Outer curve
					translate([-1.5,1.5]) circle(1.5); // Cut to create curve
					translate([-1,0]) square([2,1.5]); // Cut verticle loose end
					translate([-2.9,0]) square([2,5]); // Cut curved loose end
				}
				square([allowance,1.5]); // First vertical line
			}
		}
		color("#FD0069") translate([1.1, 1.9]) offset(.5) {
			difference(){
				circle(r=1.1+allowance/2);
				circle(r=1.1-allowance/2);
				translate([-1.1,-2]) square([2.2,2]);
			}
			translate([1.1,-1.9]) square([allowance, 2]);
		}
		color("#9E25B2") scale([1,1,1-allowance]) translate([3.3, 1.9]) offset(.5) {
			difference(){
				circle(r=1.1+allowance/2);
				circle(r=1.1-allowance/2);
				translate([-1.1,-2]) square([2.2,2]);
			}
			translate([1.1,-1.9]) square([allowance, 2]);
		}
	}
	offset(.02){
		translate([6,2]){
			color("#000000") polygon([[1,0], [2,0], [2,3], [3,3], [3,4], [0,4], [0,3], [1,3]]);	// T
			color("#000000") translate([4.8,2]) difference(){ circle(r=2); circle(r=1); } // O
			translate([7.3, .5]) letterM(); // M
			color("#000000") scale([1,1,1-allowance*2]) translate([13.8,2]) difference(){ circle(r=2); circle(r=1); } // O
			color("#FD0069") translate([8.8,4.6]) circle(.5);
			color("#9E25B2") translate([10.25,4.6]) circle(.5);

			translate([0.35,-.05]) scale(.945){
				translate([9,-.8]) rotate([0,0,180]) scale([.65,.65,1]) letterM(); // W
				color("#000000") translate([10.3,-1.7]) scale([.67,.67,.99]) difference(){ circle(r=2); circle(r=1); } // O
				color("#000000") translate([11.3,-0.2]) rotate([180,0,0]) scale([.032,.032]) polygon([[15.21, 07.23], [50.37, 05.74], [61.35, 06.48], [70.82, 10.47], [77.56, 15.71], [81.05, 21.95], [82.29, 31.17], [81.80, 39.15], [79.05, 45.89], [74.31, 51.87], [69.83, 55.36], [84.04, 86.53], [78.80, 87.03], [60.35, 87.28], [49.63, 62.09], [47.88, 59.85], [38.40, 59.85], [37.91, 44.14], [50.37, 44.39], [56.36, 42.39], [59.35, 37.91], [59.35, 32.17], [57.36, 27.43], [54.36, 24.44], [49.38, 23.19], [44.39, 22.44], [38.15, 23.69], [37.91, 35.41], [38.40, 60.60], [37.91, 64.09], [38.90, 78.30], [39.15, 86.78], [20.45, 87.28], [16.46, 87.28], [14.96, 85.79], [16.21, 51.87]]); // R
				color("#000000") translate([13.6,-0.2]) rotate([180,0,0]) scale([.032,.032])  polygon([[38.90, 06.48], [39.15, 07.23], [38.40, 35.91], [40.40, 38.40], [46.88, 37.41], [51.37, 34.91], [54.36, 31.17], [63.34, 08.48], [64.84, 06.73], [74.31, 06.98], [85.54, 06.48], [85.79, 07.98], [82.04, 20.95], [76.81, 32.42], [71.82, 40.15], [64.84, 45.89], [84.29, 78.30], [85.79, 82.79], [86.03, 85.54], [83.29, 87.53], [68.33, 87.78], [62.84, 86.78], [61.60, 85.04], [44.89, 55.86], [38.15, 58.85], [38.90, 85.29], [37.91, 87.28], [17.96, 87.28], [15.96, 86.53], [16.46, 61.60], [16.46, 38.40], [15.71, 06.23], [27.68, 06.73]]);
			}

			// 友 (friend)
			color("#C6202C") translate([15.3,1.9]) rotate([180,0,0]) scale(.032) difference(){
				union(){
					polygon([[09.50, 21.75], [10.50, 18.75], [12.25, 15.50], [15.00, 13.00], [38.50, 10.00], [38.75, 12.00], [34.25, 13.25], [31.25, 16.25], [29.75, 20.50], [20.50, 22.00], [16.25, 24.75], [14.75, 30.00], [15.50, 37.75], [18.00, 42.00], [23.00, 44.75], [29.75, 44.25], [28.50, 51.25], [24.25, 63.00], [20.75, 74.00], [22.25, 79.50], [26.00, 83.25], [31.25, 85.25], [35.75, 86.00], [39.00, 84.75], [42.75, 85.75], [48.75, 85.25], [54.25, 83.25], [62.75, 77.00], [70.75, 79.25], [81.00, 80.00], [86.25, 77.75], [89.50, 73.75], [90.00, 66.50], [89.25, 62.25], [85.00, 58.25], [81.50, 57.00], [78.00, 56.25], [81.00, 46.75], [81.00, 40.25], [80.00, 36.00], [83.75, 31.25], [84.25, 24.00], [81.75, 17.50], [76.50, 14.00], [67.50, 15.00], [53.75, 17.00], [51.75, 14.25], [48.50, 11.75], [45.25, 11.25], [39.00, 12.00], [38.75, 09.75], [78.75, 04.25], [82.25, 05.50], [85.00, 08.75], [86.50, 11.50], [94.75, 74.75], [94.00, 77.50], [92.00, 80.00], [89.25, 80.75], [28.50, 90.25], [24.25, 90.00], [20.00, 87.75], [18.25, 83.25]]);
					translate([0,10]) polygon([[34.75, 14.25], [34.75, 09.25], [37.50, 07.00], [44.25, 05.75], [47.75, 06.25], [50.25, 10.00], [50.25, 11.75], [76.50, 08.50], [78.75, 11.00], [79.75, 17.75], [78.50, 20.75], [75.75, 22.00], [50.25, 25.75], [50.50, 28.50], [71.00, 25.50], [75.25, 27.00], [76.50, 31.00], [76.50, 36.25], [74.00, 43.25], [71.00, 48.00], [71.25, 49.75], [82.50, 52.25], [85.25, 55.00], [85.50, 59.50], [84.00, 63.50], [80.25, 65.25], [74.00, 65.25], [68.00, 63.50], [61.50, 61.00], [55.50, 66.25], [48.75, 70.25], [44.75, 71.25], [41.75, 70.50], [38.75, 66.75], [38.25, 62.75], [40.25, 59.75], [46.50, 56.75], [46.50, 55.00], [50.00, 55.25], [54.75, 52.75], [55.50, 51.00], [52.75, 49.00], [50.25, 50.75], [52.50, 47.75], [52.25, 46.50], [48.25, 48.50], [45.25, 49.00], [44.25, 54.75], [39.75, 57.50], [37.25, 59.50], [35.75, 64.50], [37.50, 69.50], [35.00, 71.50], [31.50, 70.75], [26.50, 67.75], [25.50, 64.75], [26.50, 60.75], [32.75, 42.00], [35.25, 30.75], [35.50, 28.75], [35.00, 27.50], [22.75, 29.00], [19.75, 25.50], [19.50, 19.00], [21.75, 16.25]]);
				}
				translate([0,10.5]) polygon([[40.50, 39.00], [44.50, 37.00], [48.50, 36.50], [51.75, 38.00], [51.00, 36.50], [48.75, 35.75], [49.25, 32.25], [52.25, 28.50], [54.75, 28.25], [59.00, 32.25], [59.50, 34.25], [58.25, 36.00], [59.00, 36.50], [62.00, 34.00], [68.50, 34.25], [69.50, 36.75], [68.75, 41.25], [66.25, 45.00], [63.75, 45.00], [64.00, 46.50], [67.50, 45.25], [69.50, 48.50], [69.25, 51.00], [66.25, 53.25], [63.50, 53.25], [58.25, 51.75], [58.25, 49.75], [60.50, 48.00], [62.50, 47.75], [60.00, 46.75], [59.50, 45.50], [61.00, 45.25], [63.25, 46.25], [63.50, 44.25], [61.25, 44.00], [59.25, 43.00], [63.50, 39.50], [58.75, 42.00], [57.75, 41.50], [57.75, 37.75], [57.50, 40.25], [55.75, 40.75], [54.50, 35.25], [55.25, 40.50], [53.75, 41.00], [52.00, 38.50], [53.00, 42.75], [47.00, 41.75], [52.25, 44.50], [49.25, 46.75], [46.25, 47.50], [43.75, 46.00], [40.50, 41.50]]);
				translate([0,10.5]) polygon([[54.50, 41.25], [55.25, 43.00], [55.00, 45.00], [55.50, 46.50], [56.75, 46.25], [57.00, 44.50], [56.25, 43.00], [56.00, 42.00], [57.75, 42.50], [58.75, 44.75], [58.25, 46.50], [57.50, 46.75], [57.25, 45.75], [56.75, 46.75], [57.25, 47.50], [59.00, 47.75], [59.00, 48.75], [57.25, 50.25], [55.75, 50.25], [54.25, 49.50], [54.00, 47.75], [55.00, 47.50], [55.75, 47.00], [55.25, 46.50], [54.75, 47.75], [53.50, 46.75], [53.00, 45.25], [53.25, 43.25]]);
			}
		}
		translate([0,-3.8]) scale(.064) import("micron.svg");
		translate([8.5,-11]) text("ari hamed", size=1.8);
	}
}	


module signatureAri(sign_x, sign_y, sign_z, sign_depth, sign_size=1){ 
	translate([sign_x, sign_y, sign_z]) 
	linear_extrude(height=sign_depth) 
	offset(r=0.01){  
		scale([(1/20)*sign_size,.05*sign_size,.05*sign_size]){ 
			polygon([[0,0],[8,16],[16,0],[15,0],[8,14],[1,0]]); 
			polygon([[15,0],[4,7],[4,8],[15,1]]); 
			polygon([[4,7],[17,7],[17,7.8],[17,7],[17,7.8],[4,7.8]]); 
			polygon([[16.9,7],[8.9,14],[8,16],[20,16],[19,15.2],[9,15.2],[17,8],[18,7]]); 
			polygon([[5.8,17.8],[5,20],[4.2,17.8],[6.1,19.23],[3.9,19.23]]); 
			// translate([-.5,(-sign_size/3.5)/5*4,0]) text("arial hamed", size=sign_size/8, font="Liberation Mono");  
		} 
	} 
}
module signatureWeiLing() {
	difference(){ // DUCKY
		polygon([[28.93, 52.12], [31.42, 46.38], [29.93, 45.14], [29.18, 42.39], [34.91, 31.17], [36.16, 19.45], [39.65, 13.22], [46.88, 10.22], [61.10, 10.22], [70.32, 13.47], [75.06, 34.41],[ 79.3, 41.65], [74.06, 46.88], [73.32, 50.87], [77.31, 64.59], [77.55, 72.32], [76.06, 81.05], [72.57, 87.78], [68.33, 92.52], [67.58, 100.0], [27.18, 100.0], [26.93, 89.03], [23.69, 80.30], [22.69, 72.07], [23.44, 65.34]]); // Main head
		polygon([[34.16, 41.40], [35.41, 38.40], [38.15, 37.16], [39.65, 41.40], [34.66, 44.64]]); // Left eye
		polygon([[70.32, 40.40], [71.57, 43.14], [72.57, 46.38], [71.57, 49.63], [69.08, 44.14]]); // Right eye
		polygon([[35.16, 31.42], [43.39, 26.93], [53.12, 23.94], [65.84, 25.44], [70.82, 27.93], [72.32, 31.67], [73.82, 34.66], [77.75, 39.90], [78.30, 42.39], [69.58, 34.91], [61.35, 31.92], [56.11, 31.67], [44.39, 33.17], [30.67, 40.90]]); // Hat
		polygon([[33.67, 39.90], [32.42, 45.64], [30.52, 42.64]]); // Left hat shadow
		polygon([[71.07, 36.91], [77.56, 42.64], [73.81, 45.89], [73.57, 41.90]]); // Right hat shadow
		difference(){ // Beak
			polygon([[36.91, 59.85], [44.39, 42.14], [51.37, 44.89], [57.36, 45.14], [62.34, 43.39], [65.59, 57.11], [65.84, 62.34], [70.32, 66.08], [68.33, 69.58], [64.84, 70.57], [63.59, 76.56], [50.12, 77.06], [36.91, 73.57], [36.16, 69.08], [33.67, 68.08], [33.17, 63.84]]);
			polygon([[35.66, 63.84], [52.37, 59.10], [63.59, 64.09], [69.58, 67.58], [52.37, 72.32], [34.16, 67.08]]); 
		}
	}
}
module signatureDesiree(){
	polygon([[28.25, 66.75], [33.75, 55.50], [40.50, 46.25], [45.00, 40.75], [42.00, 37.50], [40.75, 33.00], [40.50, 29.75], [38.75, 27.50], [33.75, 25.00], [27.75, 20.00], [26.00, 18.25], [24.75, 13.75], [26.25, 12.75], [40.00, 18.00], [43.75, 21.50], [39.00, 13.25], [37.75, 10.50], [36.00, 04.50], [37.00, 03.50], [43.75, 07.50], [46.75, 11.25], [49.50, 16.75], [50.75, 21.50], [56.25, 21.25], [60.25, 22.25], [67.50, 27.00], [69.25, 29.50], [68.75, 30.75], [68.75, 33.75], [67.50, 35.75], [65.75, 37.25], [63.25, 38.50], [63.00, 39.75], [63.75, 42.00], [66.50, 40.75], [75.50, 38.00], [76.50, 39.75], [75.75, 41.25], [69.75, 45.50], [66.25, 47.50], [62.75, 51.25], [60.75, 57.50], [62.50, 60.75], [65.75, 63.25], [68.00, 68.25], [68.00, 71.25], [65.75, 72.50], [63.75, 71.50], [62.50, 69.00], [60.75, 68.00], [59.50, 71.00], [59.50, 75.00], [62.25, 81.00], [62.50, 85.25], [61.75, 89.75], [62.25, 90.25], [63.75, 90.00], [67.00, 90.50], [70.75, 92.50], [71.75, 95.25], [66.00, 96.50], [47.00, 96.75], [32.75, 93.00], [28.75, 94.00], [25.00, 93.00], [22.50, 90.25], [23.25, 85.75], [28.00, 83.50], [26.75, 75.25]]);
	translate([65.5,4]) scale([.3,.3]) polygon([[47.50, 36.50], [47.00, 49.50], [50.75, 41.25], [48.25, 50.75], [56.25, 44.50], [49.75, 52.00], [63.50, 45.25], [76.25, 46.75], [68.75, 57.75], [59.50, 62.75], [47.00, 57.00], [53.75, 60.75], [57.25, 68.00], [55.00, 74.50], [47.75, 73.25], [41.75, 65.25], [42.75, 61.25], [39.00, 63.75], [30.50, 63.25], [25.25, 57.25], [29.00, 50.50], [35.75, 49.75], [43.00, 55.00], [35.00, 47.50], [32.75, 38.50], [39.75, 25.50]]);
}
module signatureEthan(){
	offset(.1){
		difference(){
			translate([50,50]) circle(r=50);
			union(){
				difference(){
					polygon([[42.75, 13.00], [43.50, 13.00], [43.50, 23.25], [44.50, 30.00], [47.50, 36.50], [50.25, 42.50], [51.50, 39.00], [55.50, 34.25], [58.00, 29.75], [59.50, 24.75], [59.50, 19.25], [58.00, 13.75], [59.00, 12.50], [61.50, 14.75], [65.25, 19.50], [68.75, 26.50], [69.75, 31.75], [68.00, 31.75], [67.00, 25.75], [64.75, 21.50], [60.00, 15.50], [61.25, 21.00], [61.00, 26.75], [58.75, 33.00], [54.75, 39.00], [51.00, 43.50], [50.00, 56.00], [53.25, 47.25], [62.50, 40.00], [67.00, 35.75], [67.75, 31.75], [69.75, 31.75], [68.75, 38.75], [68.00, 43.50], [64.00, 49.50], [57.25, 55.25], [65.25, 50.75], [73.25, 47.50], [82.00, 45.25], [86.25, 45.25], [84.25, 47.75], [69.75, 53.00], [60.75, 58.25], [53.75, 63.75], [48.00, 63.25], [43.25, 59.25], [30.75, 54.75], [16.75, 52.50], [09.75, 52.50], [07.75, 51.75], [10.25, 50.25], [17.75, 48.75], [24.75, 49.25], [31.75, 50.75], [45.50, 58.00], [34.25, 48.75], [31.00, 40.75], [31.00, 33.75], [33.00, 35.25], [34.00, 38.25], [37.50, 40.75], [45.00, 47.00], [49.50, 55.75], [48.75, 42.00], [44.00, 32.75], [42.25, 25.25], [42.25, 16.00], [38.25, 21.25], [33.50, 29.50], [33.00, 35.00], [30.75, 33.50], [32.75, 26.25], [36.75, 19.50]]); // Horns & stache
					polygon([[33.5, 39.5], [39.25, 43.25], [43.25, 46.5], [44.25, 48.25], [40.5, 45.75], [39.5, 43.25], [37.75, 42.5], [39.25, 46.5], [45.5, 49.75], [46.5, 52.25], [39, 47.5], [35, 43.75]]); // Left eye
					polygon([[60.25, 43.5], [65.75, 39], [67.75, 36.25], [68, 39], [66.5, 41.25], [64.5, 43.5], [59.25, 48.5], [52.25, 54], [53.25, 50.5], [56.5, 49], [59.75, 47], [60.75, 44], [60, 43.75], [59, 46], [58, 47.5], [54.5, 48.75], [55.25, 47.25]]);
					polygon([[44, 57.5], [46, 56.75], [47.25, 59], [44.75, 59.25]]); // Left nostril
					polygon([[53.5, 56.75], [55.25, 57.25], [54.25, 59.25], [52, 58.5]]); // Right nostril

				}
				polygon([[42, 59.5], [44, 64.25], [50.5, 66.5], [55.75, 65.25], [57, 61], [60.5, 59], [71.5, 52.75], [77.75, 50.5], [76.5, 57.5], [74.5, 64.25], [71.75, 67.75], [62.5, 69.75], [40.25, 69.25], [34, 56.25]]);
				polygon([[27.25, 54.5], [32.75, 55.75], [38.75, 70.25], [55, 70.75], [70.25, 69.5], [75.25, 66], [79, 49.5], [85, 48], [78.5, 58.75], [76.75, 68.5], [74.25, 78], [36.25, 81.75], [31.75, 76], [27.25, 68.25], [20.75, 54]]);
				polygon([[17.25, 44.75], [29.75, 34], [31.25, 43], [33.75, 48.75], [38.75, 53], [43.25, 56.45], [32.75, 51], [29.75, 46], [31.25, 50.25], [24.75, 49], [18.5, 48.5]]);
				polygon([[70.25, 29.25], [79.25, 34.5], [79.75, 38], [78.5, 45.5], [60.75, 53], [67.25, 45.75], [69.25, 40.75], [70.5, 34]]);
				polygon([[91.25, 36.5], [95, 30.25], [97.5, 38.5], [98.5, 48.25], [98.25, 56.25], [96.5, 63.75], [93.5, 71.75], [88.5, 80.5], [79.75, 88.5], [84, 83.5], [79.75, 86.25], [83.25, 77.5], [79.75, 79.25], [74, 80.75], [76, 73.25], [77.75, 65.75], [80.25, 58.25], [88.25, 44.75]]);
				polygon([[43.75, 24], [52, 17], [58.75, 23.25], [58, 29.25], [54.55, 34], [50.65, 40.5], [50.55, 41.5], [49.75, 39.75], [46.35, 33.25], [44.35, 27]]);
				polygon([[80.75, 81.75], [76.5, 90.75], [67.5, 94.5], [59.75, 97.25], [50.75, 98], [40.75, 97.5], [29.25, 93.5], [20, 88.25], [13.5, 81.25], [8.5, 75.25], [3.25, 64], [2.25, 55.5], [2, 47.5], [2.75, 38.5], [5.75, 30.5], [9.25, 23.25], [15.75, 16.25], [24, 9.25], [34.25, 4], [44.5, 2.5], [56.25, 2.5], [64.25, 4.25], [74.25, 8.75], [81, 14], [87.75, 20.75], [92.25, 27.25], [93.5, 30.75], [87, 44.75], [80.25, 44.75], [81.25, 34], [69.95, 27.5], [66.0, 19.25], [62.25, 14.5], [57.25, 10.95], [59.2, 21.75], [51.25, 14.75], [43.8, 22.25], [43.6, 11.95], [37.75, 17.35], [32.35, 26.25], [31, 32.25], [15.75, 44], [17.5, 48.5], [10.25, 49.5], [7, 52], [9, 53.5], [15, 52.75], [19, 53.25], [26.5, 70.25], [35.5, 83], [54.25, 82], [74.75, 79.25], [71.75, 84]]);
			}
		}
	}
}

module neutronTrinketFunctional(main_x, main_y, main_z){
	railLineRad = 3;
	bearingRad = railLineRad - .1;
	railRadArr = [14, 22];
	module bearingShape(posRad, posAngle){
		mirror(v=[1,0,0]) rotate([0, 0, posAngle]) { translate([posRad, 0, 0]) sphere(r=bearingRad); }
		
	}
	module eachRail(railRad){
		difference(){
			translate([0, 0, -ansi]) cylinder(h=main_z+ansi*2, r=railRad+1, center=true);
			translate([0, 0, -ansi]) cylinder(h=main_z+ansi*2, r=railRad-1, center=true);
		}
		rotate_extrude() translate([railRad, 0, 0]) circle(r = railLineRad);
	}
	module centerRingSubtraction(){
		difference(){ // Depth to allow more estate for the finger
			cylinder(h=4, r=railRadArr[1], center=true);	
			cylinder(h=4, r=railRadArr[0], center=true);	
		}
	}
	difference(){
		scale([1,1,main_z/main_y]) sphere(r=main_y/2); // Main body
		eachRail(railRadArr[0]); // Inner rail
		eachRail(railRadArr[1]); // Outer rail
	// }
		translate([0, 0, main_z/2]) centerRingSubtraction();
		translate([0, 0, -main_z/2]) centerRingSubtraction();

		for (i = [0:19]) {
			mirror(v=[1,0,0]) rotate([0, 0, 18 * i]) { translate([main_x/2+7.75, 0, 0]) cylinder(h=main_z, r=bearingRad+6, center=true); }
			// bearingShape(main_x/2+1.5, 15 * i); // Outer treads
		}
	}
	for (i = [0:9]) {
		bearingShape(railRadArr[0], 36 * i); // Inner balls
	}
	for (i = [0:19]) {
		bearingShape(railRadArr[1], 20 * i); // Outer balls
	}
	// mirror(v=[1,0,0]) rotate([0, 0, 45]) { bearingShape(); }
	// translate([main_x - main_y/2, main_y/2, main_z/2, ]) scale([1,1,main_z/main_y]) sphere(r=main_y/2);

}


module neutronTrinketDetailed(main_x, main_y, main_z){
	difference(){
		neutronTrinketFunctional(main_x, main_y, main_z);
		translate([9.2,-3,main_z*.5-1]) signatureAri(-16, -4, 0, 1, 16);
		// translate([-11, 13, main_z*.5]) rotate([180,0,0]) scale([.22,.22]) linear_extrude(1) signatureWeiLing();
		// translate([-11, 11.5, main_z*.5]) rotate([180,0,0]) scale([.22,.22]) linear_extrude(1) signatureDesiree();
		// translate([-11, 11.5, main_z*.5]) rotate([180,0,0]) scale([.22,.22]) linear_extrude(1) signatureEthan();

		translate([10.5,1.5,-main_z*.5+1]) rotate([0,180,0]) scale([.9,.9,1]) linear_extrude(1) 
		tomoWork();
	}
}

module neutronTrinketFinal(main_x, main_y, main_z){
	neutronTrinketDetailed(main_x, main_y, main_z);
}

allowance = 0.001;
ansi = 0.5;
$fn = 8*3;
neutronTrinketFinal(80,80,10);