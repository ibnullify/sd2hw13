// Adam Abbas, Ibnul Jahan
// SoftDev2 pd7
// K13 -- Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country 
// 2018-03-21

var xcors = [];
var ycors = [];

graphXsize = 500;
graphYsize = 500;


//This is for testing bc there is no dataset yet heh
for (var i = 0; i < 100; i+=1){
    xcors.push(i*10);
    ycors.push(i);
}

//To see the dataset
console.log(xcors);
console.log(ycors);

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
    circles.attr("cx", function(d){return d});
    circles.data(ycors);                      
    circles.attr("cy", function(d){return graphYsize - d});                                                    
}

//Runs the stuff
var runAll = function(){
    appendCircles();
    setCoordinates();
}

runAll();
