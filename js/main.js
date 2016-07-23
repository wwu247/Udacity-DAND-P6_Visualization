/* Use D3 to load the CSV file */
d3.csv("data/data_airport.csv", function(d) {
  var format = d3.time.format("%Y");
  return {
    'Year': format.parse(d.year),
    'Airport': d.airport,
    'Airport Name': d.airport_name,
    'On Time': +d.on_time,
    'Carrier Delays': +d.carrier_delays/1000,
    'Weather Delays': +d.weather_delays/1000,
    'National Aviation System Delays': +d.nas_delays/1000,
    'Security Delays': +d.security_delays/1000,
    'Late Aircraft Delays': +d.late_aircraft_delays/1000
  };
},

function(data) {
'use strict';

/*******************************************************************/
/* On-time Arrivals by Airport Plot */

// append title
d3.select('#arrivals')
  .append('h2')
  .attr('id', 'title')
  .text('Average Annual On-Time Arrivals for U.S. Domestic Flights (2003-2016)');

// set svg
var width = 1150,
    height = 500;
    
var svg = dimple.newSvg('#arrivals', width, height);

var arrivals = new dimple.chart(svg, data);

// set x axis
var x = arrivals.addTimeAxis('x', 'Year');
x.tickFormat = '%Y';
x.title = 'Year';
x.fontSize = 12;

// set y axis
var y = arrivals.addMeasureAxis('y', 'On Time');
y.tickFormat = '%';
y.overrideMin = 0.55;
y.overrideMax = 1;
y.title = '% of On-time Arrivals (within 15 mins)';
y.fontSize = 12;

// set series and legend
arrivals.addSeries('Airport Name', dimple.plot.line);
arrivals.addSeries('Airport Name', dimple.plot.scatter);
arrivals.addLegend(width*.9, height*.62, width*.01, 130, 'right');

// draw chart
arrivals.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });

/*******************************************************************/
/* Carrier Delays by Airport Plot */

// append title
d3.select('#carrier')
  .append('h2')
  .attr('id', 'title')
  .text('Number of Carrier Delays (2003-2016)');

// set svg
var svg = dimple.newSvg('#carrier', width, height);

var carrierD = new dimple.chart(svg, data);

// set x axis
var carrierX = carrierD.addTimeAxis("x", "Year");
carrierX.tickFormat = '%Y'
carrierX.title = 'Year';
carrierX.fontSize = 12;

// y axis
var carrierY = carrierD.addMeasureAxis("y", "Carrier Delays");
carrierY.title = 'Number of Carrier Delays (thousands)';
carrierY.overrideMax = 40;
carrierY.fontSize = 12;

// set series
carrierD.addSeries("Airport Name", dimple.plot.line);
carrierD.addSeries("Airport Name", dimple.plot.scatter);
carrierD.addLegend(width*.9, height*.1, width*.01, 130, 'right');

// draw chart
carrierD.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });

/*******************************************************************/
/* Weather Delays by Airport Plot */

// append title
d3.select('#weather')
  .append('h2')
  .attr('id', 'title')
  .text('Number of Weather Delays (2003-2016)');

// set svg
var svg = dimple.newSvg('#weather', width, height);

var weatherD = new dimple.chart(svg, data);

// set x axis
var weatherX = weatherD.addTimeAxis("x", "Year");
weatherX.tickFormat = '%Y'
weatherX.title = 'Year';
weatherX.fontSize = 12;

// y axis
var weatherY = weatherD.addMeasureAxis("y", "Weather Delays");
weatherY.title = 'Number of Weather Delays (thousands)';
weatherY.overrideMax = 10;
weatherY.fontSize = 12;

// set series
weatherD.addSeries("Airport Name", dimple.plot.line);
weatherD.addSeries("Airport Name", dimple.plot.scatter);
weatherD.addLegend(width*.9, height*.1, width*.01, 130, 'right');

// draw chart
weatherD.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });

/*******************************************************************/
/* National Aviation System Delays by Airport Plot */

// append title
d3.select('#nas')
  .append('h2')
  .attr('id', 'title')
  .text('Number of National Aviation System Delays (2003-2016)');

// set svg
var svg = dimple.newSvg('#nas', width, height);

var nasD = new dimple.chart(svg, data);

// set x axis
var nasX = nasD.addTimeAxis("x", "Year");
nasX.tickFormat = '%Y'
nasX.title = 'Year';
nasX.fontSize = 12;

// y axis
var nasY = nasD.addMeasureAxis("y", "National Aviation System Delays");
nasY.title = 'Number of National Aviation System Delays (thousands)';
nasY.overrideMax = 75;
nasY.fontSize = 12;

// set series
nasD.addSeries("Airport Name", dimple.plot.line);
nasD.addSeries("Airport Name", dimple.plot.scatter);
nasD.addLegend(width*.9, height*.1, width*.01, 130, 'right');

// draw chart
nasD.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });

/*******************************************************************/
/* Security Delays by Airport Plot */

// append title
d3.select('#security')
  .append('h2')
  .attr('id', 'title')
  .text('Number of Security Delays (2003-2016)');

// set svg
var svg = dimple.newSvg('#security', width, height);

var secD = new dimple.chart(svg, data);

// set x axis
var secX = secD.addTimeAxis("x", "Year");
secX.tickFormat = '%Y'
secX.title = 'Year';
secX.fontSize = 12;

// y axis
var secY = secD.addMeasureAxis("y", "Security Delays");
secY.title = 'Number of Security Delays (thousands)';
secY.overrideMax = 0.5;
secY.fontSize = 12;

// set series
secD.addSeries("Airport Name", dimple.plot.line);
secD.addSeries("Airport Name", dimple.plot.scatter);
secD.addLegend(width*.9, height*.1, width*.01, 130, 'right');

// draw chart
secD.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });

/*******************************************************************/
/* Late Aircraft Delays by Airport Plot */

// append title
d3.select('#late')
  .append('h2')
  .attr('id', 'title')
  .text('Number of Late Aircraft Delays (2003-2016)');

// set svg
var svg = dimple.newSvg('#late', width, height);

var lateD = new dimple.chart(svg, data);

// set x axis
var lateX = lateD.addTimeAxis("x", "Year");
lateX.tickFormat = '%Y'
lateX.title = 'Year';
lateX.fontSize = 12;

// y axis
var lateY = lateD.addMeasureAxis("y", "Late Aircraft Delays");
lateY.title = 'Number of Late Aircraft Delays (thousands)';
lateY.overrideMax = 50;
lateY.fontSize = 12;

// set series
lateD.addSeries("Airport Name", dimple.plot.line);
lateD.addSeries("Airport Name", dimple.plot.scatter);
lateD.addLegend(width*.9, height*.1, width*.01, 130, 'right');

// draw chart
lateD.draw();

// handle mouse events on paths
d3.selectAll('path')
  .style('opacity', 0.8)
  .on('mouseover', function(e) {
    d3.select(this)
      .style('stroke-width', '6px')
      .style('opacity', 1)
      .attr('z-index', '1');
    }).on('mouseleave', function(e) {
      d3.select(this)
        .style('stroke-width', '2px')
        .style('opacity', 0.8)
        .attr('z-index', '0');
      });
});

