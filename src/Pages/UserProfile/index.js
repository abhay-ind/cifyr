import React, { useEffect } from "react";
import { Card as BCard } from "react-bootstrap";
import { connect, useSelector } from "react-redux";
import Avatar from "../../Components/Avatar";
import { getPosts, getPostsByUid } from "../../Services/firebase/User";
import { mock_img_url } from "../../Store/mock";
import { UPDATE_POSTS } from "../../Store/postStore";
import Card from "../Home/Card";
import { computeRemainingDays } from "../Home/Requests";
// import {Card} from '../../Pages/'
import PostCard from "./PostCard";

export const UserProfile = (props) => {
  const user = useSelector((state) => state.user);

  useEffect(() => {
    // if (startup) {
    // console.log('called requrests')
    let res;
    getPostsByUid(user.uid).then((data) => {
      res = data;
      // console.log(res);
      props.dispatch({ type: UPDATE_POSTS, payload: { posts: res } });
    });
    // setStartup(false);
    // console.log(res)
    // }
  }, []);
  const posts = props.posts.posts;
  return (
    <div className="d-flex flex-column">
      {/* <h4>Hello {"John"}, </h4> */}
      <div className="d-flex">
        <BCard className="w-50 p-4 m-3">
          <div className="d-flex align-items-center">
            <Avatar src={mock_img_url} size="100" />
            <span className="d-flex flex-column justify-content-start ml-3">
              <h4 className="">{user.displayName}</h4>
              <span>Something about myself.</span>
            </span>
          </div>
          <hr />
          <div>
            <h5>Email Address</h5>
            <p>{user.email}</p>
          </div>
          <div>
            <h5>Date of Birth</h5>
            <p>1st Jan 1970</p>
          </div>
          <div>
            <h5 style={{ color: "grey" }}>Change Password</h5>
          </div>
        </BCard>
        <BCard className="w-50 p-4 m-3">
          <h4>Your Posts</h4>
          <hr />

          {Object.keys(posts || {}).length > 0 ? (
            // <Slider {...settings}>
            Object.keys(posts).map((el) => (
              <Card
              isCommentScreen
                id={el}
                name={posts[el].name}
                title={posts[el].title}
                desc={posts[el].desc}
                // recv={posts[el].title}
                total={posts[el].amount}
                curr={posts[el].curr}
                days={computeRemainingDays(posts[el].timestamp, posts[el].days)}
              />
            ))
          ) : (
            // </Slider>
            <h4>Loading Posts...</h4>
          )}
          {/* <PostCard /> */}
        </BCard>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(UserProfile);
