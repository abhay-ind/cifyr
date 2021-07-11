import React from "react";
import { useSelector } from "react-redux";
import ChatSystem from "../../Components/Chat";
import Requests from "./Requests";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Requests />
      {user.isLogin && <ChatSystem />}
    </div>
  );
}

export default Home;
