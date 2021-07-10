// import {} from "bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "./Card";
// import { Card } from "react-bootstrap";

function Requests() {
  return (
    <div>
        {/* <h4>Feeds</h4> */}
      <div className="d-flex" style={{flexFlow:''}}>
        <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" />
        <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" />
        <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" />
        {/* <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}

      </div>
    </div>
  );
}

export default Requests;
