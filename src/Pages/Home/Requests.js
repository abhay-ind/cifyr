// import {} from "bootstrap";
import React from "react";
import { Carousel } from "react-bootstrap";
import Slider from "react-slick";
import Card from "./Card";
// import { Card } from "react-bootstrap";

function Requests() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    // centerMode: true,
  };
  return (
    <div>
      {/* <h4>Feeds</h4> */}
      <div className="d-flex mt-5 mb-5" style={{
        justifyContent:'center'
      }}>
        <Slider {...settings}>
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
          <Card
            title={"Title of the Post"}
            desc={"Description of the post"}
            recv="25000"
            total="50000"
            days="30"
          />
        </Slider>
        {/* <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
        {/* <Card title={"Title of the Post"} desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
        {/* <Card title={"Title of the Post"} desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
      </div>
    </div>
  );
}

export default Requests;
