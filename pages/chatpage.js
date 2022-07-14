import React from "react";
import Chatbox from "../components/chat/Chatbox";
import Conversations from "../components/chat/conversations";
import User from "../components/chat/User";

const chatpage = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Conversations />
      </div>
      <div>
        <Chatbox />
      </div>
      <div>
        <User />
      </div>
    </div>
  );
};

export default chatpage;
