import React from "react";
import { MessageBubble, MessageTime } from "../styles/StyledComponents";

function Message({ message }) {
  return (
    <div sent={message.sent}>
     {/* <MessageBubble sent={message.sent}> */}
      <p>{message.text}</p>
      {/* <MessageTime> */}
        <div>
        {new Date(message.createdAt).toLocaleTimeString()}
        </div>
      {/* </MessageTime> */}
     {/* </MessageBubble>  */}
    </div>
  );
}
export default Message