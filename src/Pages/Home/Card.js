import { mdiTimerSand, mdiTimerSandEmpty, mdiTimerSandFull } from "@mdi/js";
import { INR } from "currency-symbol-map/map";
import React, { useState } from "react";
import { Card as BCard, ProgressBar } from "react-bootstrap";
import InvestorIcon from "../../Components/InvestorIcon";
import { mock_bg_url, mock_img_url } from "../../Store/mock";
function Card(props) {
  const [showComplete, setShowComplete] = useState(false);
  return (
    <div>
      {/* <section> */}
      <BCard
        onMouseOver={() => setShowComplete(true)}
        onMouseOut={() => setShowComplete(false)}
        className="d-flex m-1"
        style={{
          width: "fit-content",
          maxWidth: 350,
          borderRadius: 10,
          overflow: "hidden",
          border: 0,
          background: "rgb(250 250 250)",
          boxShadow: showComplete ? "0 0 15px grey" : "",
          cursor:'pointer'
        }}
      >
        <img
          style={{
            height: "auto",
          }}
          src={mock_bg_url}
        />
        <div className="d-flex flex-column p-2">
          <h5
            style={{
              // position: "absolute",
              padding: 7,
              margin: 0,
              // bottom: 0,
              // background: "rgba(20,20,20,0.4)",
              // color: "white",
              // backdropFilter: "blur(4px)",
              width: "100%",
            }}
          >
            Simson Watson
          </h5>
          <p className="text-truncate p-1 m-1 mb-2">{props.desc}</p>
          <div
            className="d-flex ml-3 mr-3 mb-2"
            style={{ justifyContent: "space-between" }}
          >
            <h5 className="m-0">{INR + " " + props.total}</h5>
            <div className="d-flex align-items-center">
              {/* <img src={mdiTimerSandFull}/> */}
              <svg
                style={{
                  width: 25,
                  height: 25,
                }}
              >
                <path fill="#000" d={mdiTimerSand} />
              </svg>
              <span className="mdi-timer-sand-empty"></span>
              <h6 className="m-0">{props.days} days left</h6>
            </div>
          </div>
        </div>
        <ProgressBar
          label={"$ " + props.recv}
          now={(+props.recv / +props.total) * 100}
        />
        {showComplete && (
          <div className="m-2">
            <h4 className="mt-3">Investors</h4>
            <div className="">
              <InvestorIcon src={mock_img_url} name="Jade Smith" />
            </div>
          </div>
        )}
      </BCard>
      {/* </section> */}
    </div>
  );
}

export default Card;
