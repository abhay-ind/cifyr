import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card as BCard, Button, Form } from "react-bootstrap";
import Avatar from "../../Components/Avatar";
import { mdiTimerSand, mdiPlus } from "@mdi/js";
import { addComment, getPostById } from "../../Services/firebase/User";
import Card from "../Home/Card";
import { useSelector } from "react-redux";

const Comment = (props) => {
  return (
    <div className="d-flex flex-column">
      <NamePhotoDesc
        name={props.name}
        // desc={props.name}
        src={props.imgSrc}
        imgSize={40}
      />
      <span className="ml-3 mt-2">{props.text}</span>
      <hr style={{ width: "80%" }} />
    </div>
  );
};
const NamePhotoDesc = (props) => {
  return (
    <div className="d-flex">
      {props.imgSrc && <Avatar src={props.src} size={props.imgSize} />}
      <span>
        <h6 className="mb-0">{props.name}</h6>
        <span className="text-muted">{props.desc}</span>
      </span>
    </div>
  );
};
function Post(props) {
  const params = useParams();
  const id = params.id;
  const user = useSelector((state) => state.user);
  const [showCommentEditor, setShowCommentEditor] = useState(false);
  console.log(id);
  const [post, setPost] = useState({});
  useEffect(() => {
    getPostById(id).then((data) => setPost(data));
  }, []);
  console.log(post);
  const computeRemainingDays = (datePosted, noOfDays) => {
    var remaining = datePosted + noOfDays * 24 * 60 * 60 * 1000 - Date.now();
    remaining = remaining / (1000 * 60 * 60 * 24);
    return parseInt(Math.round(remaining));
  };
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <div > */}
      <div className="d-flex flex-column w-50">
        {/* <Card className="m-3 mb-0">
          <h2
            className="p-3"
            style={{ backgroundColor: "#24a5c4", color: "white" }}
          >
            Heading of the post
          </h2>
          <div className="m-3">
            <div className="d-flex flex-column">
              <NamePhotoDesc
                name="Aadm Smith"
                desc="A painter"
                src="https://otakukart.com/wp-content/uploads/2020/02/Best-Monkey-D.-Luffy-Facts-in-One-Piece-You-Didn%E2%80%99t-Know-About-1200x900.jpg"
              />
              <p className="mt-3">{body}</p>
            </div>
          </div>
        </Card> */}
        {post.post ? (
          <Card
            isCommentScreen={true}
            // id={el}
            name={post.post.name}
            title={post.post.title}
            desc={post.post.desc}
            // recv={posts[el].title}
            total={post.post.amount}
            curr={post.post.curr}
            days={computeRemainingDays(post.post.timestamp, post.post.days)}
          />
        ) : (
          <h3>Loading Post...</h3>
        )}
        {!showCommentEditor && user.isLogin? (
          <div className="d-flex justify-content-end">
            <Button
              className="mr-3"
              onClick={() => {
                setShowCommentEditor(true);
              }}
            >
              <svg
                style={{
                  width: 25,
                  height: 25,
                }}
              >
                <path fill="#fff" d={mdiPlus} />
              </svg>
              Add Comment
            </Button>
          </div>
        ) : (
          user.isLogin && (
            <div className="d-flex">
              <Form
                className="d-flex ml-3 w-100"
                onSubmit={(ev) => {
                  ev.preventDefault();
                  const comment = document.getElementById("commentText").value;
                  console.log(comment);
                  document.getElementById("commentText").value = "";
                  setShowCommentEditor(false);
                  addComment(id, {
                    displayName: user.displayName,
                    text: comment,
                  }).then(() => {
                    getPostById(id).then((data) => setPost(data));
                  });
                  //Fetch comments.
                }}
              >
                <Form.Group className="m-0 mr-3" id="commentFormEditor">
                  <Form.Text>Comment</Form.Text>
                  <Form.Control type="text" id="commentText" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className="align-self-end mr-2"
                >
                  Comment
                </Button>
                <Button
                  style={{
                    background: "white",
                    color: "grey",
                    borderColor: "grey",
                  }}
                  variant="primary"
                  // type="submit"
                  className="align-self-end mr-3"
                  onClick={() => {
                    setShowCommentEditor(false);
                  }}
                >
                  Cancel
                </Button>
              </Form>
            </div>
          )
        )}
        {post.post && (
          <BCard className="m-3 p-2">
            <h5 className="mb-0">Comments</h5>
            <hr />
            {post.comment && Object.keys(post.comment).length > 0 ? (
              Object.keys(post.comment).map((el) => (
                <Comment
                  name={post.comment[el].displayName}
                  imgSrc="https://otakukart.com/wp-content/uploads/2020/02/Best-Monkey-D.-Luffy-Facts-in-One-Piece-You-Didn%E2%80%99t-Know-About-1200x900.jpg"
                  text={post.comment[el].text}
                />
              ))
            ) : (
              <h3>No Comments added yet</h3>
            )}
          </BCard>
        )}
      </div>
    </div>
  );
}
const body = `Body of the postBody of the postBody of the postBody of the postBody of the post
Body otBody of the postBody of the postBody of the postBody of the postBody of the postBody of the postBody of the post
Body of the postBody of the postBody of the postBody of the postBody of the postBody of the postBody of the post
Body of the postBody of the postBody of the postBody of the postBody of the postBody of the postBody of the post
Body of the postBody of the postBody of the postv`;

export default Post;
