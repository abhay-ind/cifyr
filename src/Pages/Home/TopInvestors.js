import { Button } from "react-bootstrap";
import React, { useState } from "react";

const Tag = (props) => {
  return (
    <div
      className="m-2 p-3"
      style={{
        background: props.color || "rgb(250,250,250)",
        borderRadius: 7,
        boxShadow: "0 0 5px grey",
      }}
    >
      <div className="d-flex" style={{ justifyContent: "space-between" }}>
        <h5>{props.name}</h5>
        <span>$ 50000</span>
      </div>
    </div>
  );
};
const SortTag = (props) => {
  const setCurrentSelection = props.setCurrentSelection;
  const currentSelection = props.currentSelection;
  return (
    <Button
      className="m-1"
      style={{
        borderRadius: 75,
        outline: "none",
        background: currentSelection == props.index ? "royalblue" : "white",
        color: currentSelection == props.index ? "white" : "grey",
      }}
      onClick={() => setCurrentSelection(props.index)}
    >
      {props.name}
    </Button>
  );
};
function TopInvestors() {
  const [currentSelection, setCurrentSelection] = useState(0);
  return (
    <div className="mt-5 d-flex flex-column">
      <hr className="w-100" />
      <div
        className="d-flex ml-4 mr-4"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <h4 className="">Top Investors</h4>
        <div className="d-flex flex-column">
          <span style={{ fontSize: 12, color: "grey" }}>Filter By</span>
          <div>
            <SortTag name="Weekly" index={0} setCurrentSelection={setCurrentSelection} currentSelection={currentSelection} />
            <SortTag name="Monthly" index={1} setCurrentSelection={setCurrentSelection} currentSelection={currentSelection} />
            <SortTag name="Overall" index={2} setCurrentSelection={setCurrentSelection} currentSelection={currentSelection} />

            {/* <SortTag name="Monthly" index={1} /> */}
            {/* <SortTag name="Overall" index={2} /> */}
          </div>
        </div>
      </div>
      <hr className="w-100" />
      <div
        className=" mt-0 p-1 w-75"
        style={{ background: "white", alignSelf: "center" }}
      >
        <Tag name="Harvy Richards" />
        <Tag name="Harvy Richards" />
        <Tag name="Harvy Richards" />
        <Tag name="Harvy Richards" />
        <Tag name="Harvy Richards" />
      </div>
    </div>
  );
}

export default TopInvestors;
