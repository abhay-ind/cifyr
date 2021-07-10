import React from "react";
import { mock_img_url } from "../Store/mock";
import Avatar from "./Avatar";

function InvestorIcon(props) {
  return (
    <div className="m-1 p-2 d-flex align-items-center" style={{ borderRadius:70, background:'#cfcfcf'}}>
      <Avatar src={props.src} size={40} />
      <h5 className="mb-0">{props.name}</h5>
    </div>
  );
}

export default InvestorIcon;
