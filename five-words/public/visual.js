document.addEventListener('DOMContentLoaded', bubbleChart)

function bubbleChart() {
  // var d3 = require("d3");
  var height = 1000;
  var width = height;

  //creating the space where the visual will go
  var svg = d3
    //svg: a vector graphic format—based on XML
    //and is used to display a variety of graphics on the Web and other environments.
    .select("#chart")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .append("g")
    .attr("transform", "translate(0,0)");
    console.log(svg);

  //the scale at whcih the bubbles will generate
  var radiusScale = d3
    .scaleSqrt()
    .domain([1, 20])
    .range([40, 175]);

  //the scale at which the text will size
  var textScale = d3
    .scaleSqrt()
    .domain([1, 40])
    .range([10, 50]);

  //instructions for where the bubbles should be
  //get bubbles to the middle
  //don't let them collide
  var simulation = d3
    .forceSimulation()
    .force("x", d3.forceX(width / 2).strength(0.05))
    .force("y", d3.forceY(height / 2).strength(0.05))
    .force(
      "collide",
      d3.forceCollide(function(d) {
        return radiusScale(d.recurrence) + 2;
      })
    );

  async function master() {
    //retrieving the data
    const dataset = await d3.csv("fake-data.csv");
    console.log(dataset);

    //creation of bubbles
    var bubbles = svg
      .selectAll()
      .data(dataset)
      .enter()
      .append("circle")
      .attr("class", "words")
      .attr("r", function(d) {
        return radiusScale(d.recurrence);
      })
      //assigning each bubble a random color
      .attr("fill", function color(d) {
        let colors = d3.schemeRdBu[10];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        let randomColorIndex = colors.indexOf(randomColor);
        colors.splice(randomColorIndex, 1);
        return randomColor;
      });
      console.log(bubbles);
    //creating the text
    var text = svg
      .selectAll()
      .data(dataset)
      .enter()
      .append("text")
      .attr("dy", "0.35em")
      .style("text-anchor", "middle")
      .attr("font-weight", "700")
      .attr("font-family", "Volkhorn")
      .attr("font-size", function(d) {
        return textScale(d.recurrence);
      })
      .text(function(d) {
        return `${d.words} ${d.recurrence}`;
      });

    //every time there is a tick on the clock
    // run ticked so that the bubbles are "up to date"
    simulation.nodes(dataset).on("tick", ticked);

    function ticked() {
      //this is the "magic" under the hood
      bubbles
        .attr("cx", function(d) {
          return d.x;
        })
        .attr("cy", function(d) {
          return d.y;
        });
      text
        .attr("x", function(d) {
          return d.x;
        })
        .attr("y", function(d) {
          return d.y;
        });
    }
  }
  master();
};

//OLD CODE..................................................................................

// d3.queue()
//   .defer(d3.csv, "fake-data.csv")
//   .await(ready);

// function ready(error, dataset) {
//   var circles = svg
//     .seleectAll(".name")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("class", "name")
//     .attr("r", 10)
//     .attr("fill", "lightblue");
// }

// var dataset = [
//   { word: "relaxed", recurrence: 10 },
//   { word: "overwhelmed", recurrence: 15 },
//   { word: "happy", recurrence: 11 },
//   { word: "reflective", recurrence: 5 },
//   { word: "loved", recurrence: 7 },
//   { word: "bleh", recurrence: 4 },
//   { word: "proud", recurrence: 8 }
// ]
