import React from "react";
import { useState } from "react";
import Avatar from "../Avatar";

const ChatOption = (props) => {
  const width = +props.size || 50;
  return (
    <div
      className="my-1 d-flex p-1 align-items-center"
      style={{
        borderBottom: "1px solid lightgrey",
        cursor: "pointer",
      }}
    >
      <Avatar src={props.src} size={props.width} />
      <div className="d-flex flex-column">
        <h6 className="m-0">{props.name}</h6>
        <span>{props.msg}</span>
      </div>
    </div>
  );
};
function ChatSystem() {
  const [showChats, setShowChats] = useState(false);
  const toggleChats = () => {
    setShowChats((prevState) => {
      return !prevState;
    });
  };
  return (
    <div
      className="mr-1"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        boxShadow: "0 0 10px grey",
        borderRadius: "10px 10px 0 0",
      }}
    >
      <button
        className="p-2"
        style={{
          background: "#1459c7",
          color: "white",
          border: 0,
          //   padding: 5,
          width: 400,
          fontWeight: "bold",
          fontSize: 20,
          letterSpacing: 1.3,
          //   cursor: "pointer",
          //   paddingRight: "500px",
          borderRadius: "10px 10px 0 0 ",
          textAlign: "left",
          outline: "none",
        }}
        onClick={toggleChats}
      >
        Chat
      </button>
      {showChats && (
        <div
          className="d-flex flex-column p-1"
          style={
            {
              background:'white'
              // border: "1px solid grey",
            }
          }
        >
          <ChatOption
            name="Simon S"
            src={
              "https://otakukart.com/wp-content/uploads/2020/02/Best-Monkey-D.-Luffy-Facts-in-One-Piece-You-Didn%E2%80%99t-Know-About-1200x900.jpg"
            }
            msg="hello shall we finalise the deal!"
          />
          <ChatOption
            name="Richard Smith"
            src={
              "https://i.pinimg.com/originals/e9/be/67/e9be67dd130aee203aaed715ddfcf75c.png"
            }
            msg="Hey, hows the status of your work?"
          />
         <ChatOption
            name="Samuel D'Souza"
            src={
              "https://i.pinimg.com/736x/b7/4e/68/b74e686c93030a733c64cc451d50e59e.jpg"
            }
            msg="Lets  meet over a cup of coffee, virtually!"
          />
        </div>
      )}
    </div>
  );
}

export default ChatSystem;
