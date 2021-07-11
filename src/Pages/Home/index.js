import React from "react";
import { useSelector } from "react-redux";
import ChatSystem from "../../Components/Chat";
import Counter from "./Counter";
import Footer from "./Footer";
import Requests from "./Requests";
import Steps from "./Steps";
import TopInvestors from "./TopInvestors";

function Home() {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <Requests />
      <TopInvestors />
      <Counter />
      <Steps />
      <Footer />
      {user.isLogin && <ChatSystem />}
    </div>
  );
}

export default Home;
