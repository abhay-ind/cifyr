import React from "react";

const CounterTag = (props) => {
  return (
    <div
      className="p-3 m-2"
      style={{
        background: props.color || "lavender",
        borderRadius: 15,
        boxShadow:'0 0 10px grey'
      }}
    >
      <h3 className="m-0">{props.number}+</h3>
      <h5 className="mt-1 mb-o" style={{color:'#444'}}>{props.text}</h5>
    </div>
  );
};
function Counter() {
  return (
    <div className="w-100 d-flex mt-5" style={{ justifyContent: "center" }}>
      <div className="w-75 d-flex" style={{justifyContent:'space-evenly'}}>
        <CounterTag number="1000" text="Investments made" />
        <CounterTag number="$14000" text="Total Investment" color="pink" />
        <CounterTag number="100" text="Successful deal closures" color="lightgrey"/>

        {/* <CounterTag text="$15000+ Total Investment" color="pink" /> */}
        {/* <CounterTag text="$15000+ Total Investment" color="pink" /> */}
      </div>
    </div>
  );
}

export default Counter;
