import { useEffect,useState } from "react";
import { connect } from "../socket";
export default function Chat() {
  const [M, setM] = useState("Check")
  useEffect(() => {
    connect((message) => {
      console.log(message);
      setM(message);
    });
  });
  return (<div>
      {M}
  </div>);
}
