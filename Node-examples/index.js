var rect = require('./rectangle.js');  //Exporting the Module   

function solve_rectangle(l,b){
    console.log("Finding the area and perimeter of the rectangle");
    console.log(rect.perimeter(l,b));
    console.log(rect.area(l,b));
}

solve_rectangle(2,3);