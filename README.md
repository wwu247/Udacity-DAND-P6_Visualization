# Udacity-DAND-P6_Flights_Visualization
By Wenny Wu / Project 6 (Data Visualization) for Udacity's Data Analyst Nanodegree

## Summary
This data visualization shows average annual on-time arrivals for U.S. domestic flights between the years 2003 and 2016 for 8 different airports: IAH (Houston), DFW (Dallas/Fort Worth), LAS (McCarran Las Vegas), ATL (Atlanta), PHX (Phoenix), DEN (Denver), LAX (Los Angeles), and ORD (Chicago O'Hare). The data was obtained from the Research and Innovative Technology Administration (RITA).

## Initial Design
After collecting the data from RITA, I loaded the data into R for some exploratory data analysis. I was curious about delays by airport - perhaps some airports have worse infrastructure, TSA operations, administration, etc. that could result in more delays. I wanted to see which airports performed the worst, but there was intially so much data that it was difficult to visualize anything of significance. I decided to aggregate the data, grouping by airport, and focus on the busiest airports. 

![R Plot](https://raw.githubusercontent.com/wwu247/Udacity-DAND-P6_Flights_Visualization/master/png/on_time_airports.png)

I chose a line chart to display changes in airport performance via on-time arrivals over the years. A line chart is appropriate for time-series data and visualizing any trends or patterns that may exist in the data over a range of years, as is the case in this example. I also wanted to compare the performance of different airports over the timespan of interest. The plots generated in R showed some interesting fluctuations in on-time arrivals for the airports of interest - Chicago and Atlanta showed poorer performance for many years and higher overall variation. The next step was to improve the visualization with D3.js and dimple.js. My goals were to improve the axes and legend to enhance the visualization and overlay a scatterplot on top of the line plot so the viewer can see data points for each year. I generated the following plot:

![Plot Version 1](https://raw.githubusercontent.com/wwu247/Udacity-DAND-P6_Flights_Visualization/master/png/index-initial.png)

## Feedback
I conducted 3 interviews for feedback on the visualization, asking each person the following questions:
- What do you notice in the visualization?
- What questions do you have about the data?
- What relationships do you notice?
- What do you think is the main takeaway from this visualization?
- Is there something you do not understand in the graph?

A summary of their responses is provided below:

Feedback 1:

"The scales are consistent and not misleading, which is important for plots and graphs, although the y-axis can be shifted up a little. It clearly shows percentage of on-time arrivals to these airports, and I can see significant dips, particularly leading up to 2007 and then again in 2014. I wonder if there was something going on with national travel those years."

Feedback 2:

"Are these averages for each year? It seems most of the airlines follow similar trends, although ORD made significant improvements between 2008 and 2009. The lines are sort of close together, so it would be nice to highlight airports of interest. The chart is pretty straightforward, and I like the brighter, more opaque lines because I have a hard time seeing lighter colors."

Feedback 3:

"The plot clearly shows on-time arrivals over the past thirteen years for large airports. I see ORD has typically had more delays, except maybe LAX has been performing worse the past two years - I'll try to avoid those airports from now on. There seems to be a lot going on at the bottom of the plot - maybe try to space things out more."

## Revised Design
In lieu of the feedback comments, I extended the y-axis to center the data around the middle of the chart area. I chose not to start the y-axis at 0% because the chart would be too zoomed-out and all the data would be clustered at the top. I added a mouseover event to highlight line paths for the viewer to interact with the graph and better identify which airport they are inspecting. I originally planned to lower the opacity of the line paths so that the mouseover highlight feature would have a greater effect, but since Interviewee #2 said he prefered the more defined lines and had trouble seeing lighter colors, I kept the opacity and changed the color of the title from black to gray so that the data stands out more. I also increased the font size of the axes to improve readability. Lastly, I slightly changed the wording in the title and y-axis label to better communicate the information that was being conveyed - Interviewee #2 had asked if the data showed averages, so I specified in the title that these were annual averages for U.S. domestic flights. 

The second rendition of the plot is below:

![Plot Version 2](https://raw.githubusercontent.com/wwu247/Udacity-DAND-P6_Flights_Visualization/f31b21560ade0be04058435ccb973594d550e7cb/png/index-final.png)

My initial submission feedback indicated that the reviewer did not find the visualization to center on a clear, specific finding in the data (i.e. a clear trend or pattern). To dive deeper into the data, I decided to visualize the delays on a more granular level, focusing on different reasons for delay (national aviation system, late-arriving aircraft, air carrier, extreme weather, and security). I also visualized these data with line-scatter plots to make easy comparisons with the on-time arrival chart, and the charts indicate that national aviation system delays contribute most heavily to overall delays, with Atlanta and Chicago showing significantly more national aviation system delays.

![Final Visualization](http://wwu247.github.io/Udacity-DAND-P6_Flights_Visualization/)

## Resources
- [Udacity Lectures - Data Visualization and D3.js](https://classroom.udacity.com/nanodegrees/nd002)
- [Udacity Discussion Forums](https://discussions.udacity.com/c/nd002-p6-data-visualization-with-d3-js/p6-make-effective-data-visualization)
- [D3.js Documentation](http://d3js.org)
- [D3 API Reference by Mike Bostock](https://github.com/d3/d3/blob/master/API.md#selections-d3-selection)
- [dimple.js Documentation](http://dimplejs.org/)
- [bl.ocks.org/](http://bl.ocks.org/)
- [Stack Overflow posts](http://stackoverflow.com/search?q=dimple.js)
