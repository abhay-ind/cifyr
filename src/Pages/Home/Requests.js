// import {} from "bootstrap";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { connect } from "react-redux";
import Slider from "react-slick";
import { getPosts } from "../../Services/firebase/User";
import { mock_bg_urls } from "../../Store/mock";
import { UPDATE_POSTS } from "../../Store/postStore";
import Card from "./Card";
// import { Card } from "react-bootstrap";
export const computeRemainingDays = (datePosted, noOfDays) => {
  var remaining = datePosted + noOfDays * 24 * 60 * 60 * 1000 - Date.now();
  remaining = remaining / (1000 * 60 * 60 * 24);
  return parseInt(Math.round(remaining));
};
function Requests(props) {
  // const [startup, setStartup] = useState(true);

  useEffect(() => {
    // if (startup) {
    // console.log('called requrests')
    let res;
    getPosts(10).then((data) => {
      res = data;
      // console.log(res);
      props.dispatch({ type: UPDATE_POSTS, payload: { posts: res } });
    });
    // setStartup(false);
    // console.log(res)
    // }
  }, []);
  const posts = props.posts.posts;

  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: Math.min(4, Object.keys(posts).length),
    slidesToScroll: 1,
    // centerMode: true,
  };
  return (
    <div>
      {/* <h4>Feeds</h4> */}
      <div
        className="d-flex mt-5 mb-5"
        style={{
          justifyContent: "center",
        }}
      >
        {/* {console.log(posts)} */}
        {Object.keys(posts || {}).length > 0 ? (
          <Slider {...settings}>
            {Object.keys(posts).map((el,idx) => (
              <Card
                id={el}
                name={posts[el].name}
                title={posts[el].title}
                desc={posts[el].desc}
                src={mock_bg_urls[idx % mock_bg_urls.length]}
                // recv={posts[el].title}
                total={posts[el].amount}
                curr={posts[el].curr}
                days={computeRemainingDays(posts[el].timestamp, posts[el].days)}
              />
            ))}
          </Slider>
        ) : (
          <h4>Loading Posts...</h4>
        )}
        {/* <Card desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
        {/* <Card title={"Title of the Post"} desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
        {/* <Card title={"Title of the Post"} desc={"Description of the post"} recv="25000" total="50000"  days="30" /> */}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(Requests);
