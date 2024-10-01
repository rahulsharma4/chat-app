import React from "react";
import Sidebar from "../../components/leftsection/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div
      className="flex max-[767px]:block sm:h-[80%] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
    >
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
