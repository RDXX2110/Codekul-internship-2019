function areaoft(){
var side1,side2,side3,s,area
 side1 = 5; 
 side2 = 6; 
 side3 = 7; 
 s = (side1 + side2 + side3)/2;
 area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
document.getElementById("area").value=area;
}