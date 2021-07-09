// import {} from "bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "./Card";
// import { Card } from "react-bootstrap";

function Requests() {
  return (
    <div>
        {/* <h4>Feeds</h4> */}
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Requests;
