import React from "react";
import { Card as BCard } from "react-bootstrap";
function Card() {
  return (
    <div>
      {/* <section> */}
      <BCard
        className="d-flex m-1"
        style={{
          width: "fit-content",
          maxWidth: 350,
          borderRadius: 10,
          overflow: "hidden",
          border: 0,
        }}
      >
        <img
          style={{
            height: "auto",
          }}
          src={`https://images.unsplash.com/photo-1430285561322-7808604715df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80`}
        />
        <h3
          style={{
            position: "absolute",
            padding: 7,
            bottom: 0,
            background: "rgba(20,20,20,0.4)",
            color: "white",
            backdropFilter: "blur(4px)",
            width: "100%",
          }}
        >
          Simson Watson
        </h3>
      </BCard>
      {/* </section> */}
    </div>
  );
}

export default Card;
