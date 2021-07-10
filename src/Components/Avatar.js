import React from "react";

function Avatar(props) {
  const width = +props.size || 50;

  return (
    <div
      className="mr-2"
      style={{
        width: width,
        height: width,
        display: "flex",
        placeContent: "center",
        overflow: "hidden",
        borderRadius: width,
        ...props.style,
      }}
    >
      <img
        src={props.src}
        style={{ width: width * 1.35, height: "fit-content" }}
      />
    </div>
  );
}

export default Avatar;
