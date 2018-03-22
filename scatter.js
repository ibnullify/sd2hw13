// Adam Abbas, Ibnul Jahan
// SoftDev2 pd7
// K13 -- Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country
// 2018-03-21

var xcors = [.032, .034, .214, .263, .275, .45, .5, .5, .63, .8, .9, .9, .9, .9, 1, 1.1, 1.1, 1.4, 1.7, 2, 2, 2, 2];
var ycors = [170, 290, -130, -70, -185, -220, 200, 290, 270, 200, 300, -30, 650, 150, 500, 920, 450, 500, 500, 960, 500, 850, 800, 1090];

graphXsize = 500;
graphYsize = 500;



//To see the dataset
console.log(xcors.toString());
console.log(ycors.toString());

var svg = document.getElementById("vimage");
var svgX = 1000; //x length
var svgY = 1000; //y length

//Makes label lines for the graph
var makeGraph = function() {
    var x_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    x_axis.setAttribute("x1", 50); //space for label
    x_axis.setAttribute("x2", svgX);
    x_axis.setAttribute("y1", svgY - (220+100));
    x_axis.setAttribute("y2", svgY - (220+100));
    x_axis.setAttribute("stroke-width", 3);
    x_axis.setAttribute("stroke", "black");
    svg.appendChild(x_axis);

    var x_label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    x_label.setAttribute("x", svgX/2);
    x_label.setAttribute("y", 25);
    x_label.setAttribute("font-family", "sans-serif");
    x_label.setAttribute("font-size", "20px");
    x_label.setAttribute("fill", "black");
    svg.append(x_label);
    console.log(x_label);
    
    var y_label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    y_label.setAttribute("x", svgX/2);
    y_label.setAttribute("y", 25);
    y_label.setAttribute("font-family", "sans-serif");
    y_label.setAttribute("font-size", "20px");
    y_label.setAttribute("fill", "black");
    svg.append(y_label);
    console.log(y_label);

    //Both the Texts for the Labels
    var texts = d3.selectAll("text");
    texts.data([0,svgX/2]); //xcors
    texts.attr("x",function(d){
        return d;
    });
    texts.data([svgY/2,svgY]); //ycors
    texts.attr("y",function(d){
        return d;
    });

    //Doesn't work, text is defined in the html
    /*texts.data(["Distance","Recession Velocity"]); //text
    texts.text(function(d){
        return d;
    });
    console.log(texts);
    */
    
    var y_axis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    y_axis.setAttribute("x1", 50);
    y_axis.setAttribute("x2", 50);
    y_axis.setAttribute("y1", svgY - 50);
    y_axis.setAttribute("y2", 0);
    y_axis.setAttribute("stroke-width", 2);
    y_axis.setAttribute("stroke", "black");
    svg.appendChild(y_axis);
}


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
    circles.attr("cx", function(d){return (d * 1000) + 50});//leave space for the x-label
    circles.data(ycors);
    circles.attr("cy", function(d){return svgY - (d + 220) - 50}); //We are offsetting the data by the smallest negative number, so as to make that 0 and make 0 the minimum value
}

//Runs the stuff
var runAll = function(){
    makeGraph();
    appendCircles();
    setCoordinates();
}

runAll();
