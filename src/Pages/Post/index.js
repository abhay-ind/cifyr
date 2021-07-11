import React from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Avatar from "../../Components/Avatar";

const Comment = (props) => {
  return (
    <div className="d-flex flex-column">
      <NamePhotoDesc
        name={props.name}
        desc={props.name}
        src={props.imgSrc}
        imgSize={40}
      />
      <span className="ml-3 mt-2">{props.text}</span>
      <hr style={{width:'80%'}} />
    </div>
  );
};
const NamePhotoDesc = (props) => {
  return (
    <div className="d-flex">
      <Avatar src={props.src} size={props.imgSize} />
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
  console.log(id);
  return (
    <div className="d-flex flex-column align-items-center">
      {/* <div > */}
      <div className="d-flex flex-column w-50">
        <Card className="m-3 mb-0">
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
        </Card>

        <Card className="m-3 p-2">
          <h5 className="mb-0">Comments</h5>
          <hr />
          <Comment
            name="Investor Bob"
            imgSrc="https://otakukart.com/wp-content/uploads/2020/02/Best-Monkey-D.-Luffy-Facts-in-One-Piece-You-Didn%E2%80%99t-Know-About-1200x900.jpg"
            text="I had a small doubt I had a small doubtI had a small doubtI had a small doubtI had a small doubtI had a small doubtI had a small doubt"
          />
           <Comment
            name="Investor Bob"
            imgSrc="https://otakukart.com/wp-content/uploads/2020/02/Best-Monkey-D.-Luffy-Facts-in-One-Piece-You-Didn%E2%80%99t-Know-About-1200x900.jpg"
            text="I had a small doubt I had a small doubtI had a small doubtI had a small doubtI had a small doubtI had a small doubtI had a small doubt"
          />
        </Card>
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
