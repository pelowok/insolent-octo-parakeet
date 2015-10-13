'use strict';

//scripted by pelowok 10/7/2015

var CARDS = CARDS || [];

// We define a function that takes one parameter named $.
CARDS.Main = (function($){

    var pub = {};

    var format = d3.time.format("%a %b %d %Y");

    // JSONData3
    var theData = JSONData3.map(function(series) {
        series.values = series.values.map(function(d) { return {x: d[0], y: d[1] } });
        return series;
    });
    var amountFn = function(d){return d["x"]};
    var dateFn = function(d){return d["y"]};


    var x = d3.time.scale()
        .range( [ 10, 280 ])
        .domain( d3.extent( theData, dateFn ) )

    var y = d3.scale.linear()
        .range( [ 180, 0 ] )
        .domain( d3.extent( theData, amountFn ) )

    var svg = d3.select("#demo").append("svg:svg")
        .attr("width", 300)
        .attr("height", 300)

    var init = function () {

        svg.selectAll("circle")
            .data(theData)
            .enter()
            .append("svg:circle")
            .attr("r", 8)
            //.attr("cx", function(d) { return x(dateFn(d)) })
            //.attr("cy", function(d) { return y(amountFn(d)) })

    };

    pub.init = init;
    pub.theData = theData;
    pub.amountFn = amountFn;
    pub.dateFn = dateFn;
    pub.svg = svg;


    return pub;

}($));

$(function() {

    CARDS.Main.init();

});

