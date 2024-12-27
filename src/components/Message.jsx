import React from "react";
import { MessageBubble, MessageTime } from "../styles/StyledComponents";

function Message({ message }) {
  return (
    <span sent={message.sent}>
      {/* <MessageBubble sent={message.sent}> */}
      <span className="chat-window-body d-flex justify-content-between align-items-center ">
        <span className="text-md ">{message.text}</span>
        {/* <MessageTime> */}
        <div className="text-sm">{new Date(message.createdAt).toLocaleTimeString()}</div>
      </span>
      {/* </MessageTime> */}
      {/* </MessageBubble>  */}
    </span>
  );
}
export default Message;
