import React from "react";

function Message({ message }) {
  return (
    <span sent={message.sent}>
      <span className="chat-window-body d-flex justify-content-between align-items-center ">
        <span className="text-md ">{message.text}</span>

        <div className="text-sm">
          {new Date(message.createdAt).toLocaleTimeString()}
        </div>
      </span>
    </span>
  );
}
export default Message;
