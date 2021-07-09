import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import React from "react";
import Titlebar from "./Components/Titlebar";
import Login from "./Pages/Login";
import Chat from "./Components/Chat";
import * as d3 from "d3";

function App() {
  var svg = d3.select("my_dataviz"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

  // Map and projection
  var path = d3.geoPath();
  var projection = d3
    .geoMercator()
    .scale(70)
    .center([0, 20])
    .translate([width / 2, height / 2]);

  // Data and color scale
  var data = d3.map();
  var colorScale = d3
    .scaleThreshold()
    .domain([100000, 1000000, 10000000, 30000000, 100000000, 500000000])
    .range(d3.schemeBlues[7]);

  // Load external data and boot
  Promise.all([
    d3.json(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    ),
    d3.csv(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv"
    ),
  ])
    .then(function (d) {
      data.set(d.code, +d.pop);
    })
    .then(ready)
    .catch(function (error) {
      console.log(error);
    });
  function ready(error, topo) {
    let mouseOver = function (d) {
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.5);
      d3.select(this)
        .transition()
        .duration(200)
        .style("opacity", 1)
        .style("stroke", "black");
    };

    let mouseLeave = function (d) {
      d3.selectAll(".Country").transition().duration(200).style("opacity", 0.8);
      d3.select(this).transition().duration(200).style("stroke", "transparent");
    };

    // Draw the map
    svg
      .append("g")
      .selectAll("path")
      .data(topo.features)
      .enter()
      .append("path")
      // draw each country
      .attr("d", d3.geoPath().projection(projection))
      // set the color of each country
      .attr("fill", function (d) {
        d.total = data.get(d.id) || 0;
        return colorScale(d.total);
      })
      .style("stroke", "transparent")
      .attr("class", function (d) {
        return "Country";
      })
      .style("opacity", 0.8)
      .on("mouseover", mouseOver)
      .on("mouseleave", mouseLeave);
  }

  return (
    <React.Fragment>
      <div className="App">
        <Titlebar />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
        <svg id="my_dataviz" width="400" height="300"></svg>
      </div>
    </React.Fragment>
  );
}

export default App;
