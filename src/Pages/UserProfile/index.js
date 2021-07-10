import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import Avatar from "../../Components/Avatar";
import { mock_img_url } from "../../Store/mock";
import PostCard from "./PostCard";

export const UserProfile = (props) => {
  return (
    <div className="d-flex flex-column">
      {/* <h4>Hello {"John"}, </h4> */}
      <div className="d-flex">
        <Card className="w-50 p-4 m-3">
          <div className="d-flex align-items-center">
            <Avatar src={mock_img_url} size="100" />
            <span className="d-flex flex-column justify-content-start ml-3">
              <h4 className="">{"John Deon"}</h4>
              <span>Something about myself.</span>
            </span>
          </div>
          <hr />
          <div>
            <h5>Email Address</h5>
            <p>abc@xyz.com</p>
          </div>
          <div>
            <h5>Date of Birth</h5>
            <p>1st Jan 1970</p>
          </div>
          <div>
            <h5>Change Password</h5>
          </div>
        </Card>
        <Card className="w-50 p-4 m-3">
          <h4>Your Posts</h4>
          <hr />
          <PostCard
            name="John Deos"
            desc="Helo whats up, here john"
            amount="50000"
            createdAt="Jul 10 2021 00:58:05"
            modifiedAt="Jul 10 2021 00:58:05"
            
          />
          {/* <PostCard /> */}

        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
