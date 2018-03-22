// Adam Abbas, Ibnul Jahan
// SoftDev2 pd7
// K13 -- Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country
// 2018-03-21

var xcors = [.032, .034, .214, .263, .275, .45, .5, .5, .63, .8, .9, .9, .9, .9, 1, 1.1, 1.1, 1.4, 1.7, 2,, 2, 2, 2];
var ycors = [170, 290, -130, -70, -185, -220, 200, 290, 270, 200, 300, -30, 650, 150, 500, 920, 450, 500, 500, 960, 500, 850, 800, 1090];

graphXsize = 500;
graphYsize = 500;



//To see the dataset
console.log(xcors.toString());
console.log(ycors.toString());

var svg = document.getElementById("vimage");

//Gets all the points ready
//Doesn't display them because it does not give them x or y coordinates
var appendCircles = function() {
    for (var i = 0; i < xcors.length; i+=1){
	c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("fill", "blue");
	c.setAttribute("r", "5");
	svg.appendChild(c);
    }
}

//Takes all the cirles that we have already made, and puts them on the svg by giving them coordinates
//Since (0,0) is the top left, there are some things to be done
var setCoordinates = function(){
    var circles = d3.selectAll("circle");
    circles.data(xcors);
    circles.attr("cx", function(d){return d * 1000});
    circles.data(ycors);
    circles.attr("cy", function(d){return graphYsize - d + 220}); //We are offsetting the data by the smallest negative number, so as to make that 0 and make 0 the minimum value
}

//Runs the stuff
var runAll = function(){
    appendCircles();
    setCoordinates();
}

runAll();
