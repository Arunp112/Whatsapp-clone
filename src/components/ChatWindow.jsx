import React, { useContext, useEffect, useState } from "react";

import MessageInput from "./MessageInput";
import Message from "./Message";
import { ContactsContext } from "../context/ContactsContext";
import useInstantDB from "../customHooks/useInstantDB";
import { ChatContainer, MessagesContainer } from "../styles/StyledComponents";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import { IoMdCall } from "react-icons/io";
import { IoVideocamOutline } from "react-icons/io5";

function ChatWindow() {
  const { state } = useContext(ContactsContext);
  const { fetchMessages } = useInstantDB();
  const { isLoading, error, data } = fetchMessages();
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading && data) {
        setMessages(data.messages);
      }
    };
    fetchData();
  }, [isLoading, data]);

  return (
    <div className="chatcontainer">
      {/* <ChatContainer> */}
      {state && state.selectedContact ? (
        <div>
          {/* <MessagesContainer> */}
          <div className="chat-window-header pt-2 border-bottom">
            <div className="d-flex justify-content-between align-items-center bg-white">
              <span className="d-flex gap-2">
                <span>
                  <Avatar src="https://api.dicebear.com/9.x/fun-emoji/svg" />
                </span>
                <h2>{state.selectedName}</h2>
              </span>
              <div className="d-flex align-items-center gap-2">
                <IconButton>
                  <IoVideocamOutline />
                </IconButton>
                <IconButton>
                  <IoMdCall />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="chat-body">
            {messages &&
              messages
                .filter(
                  (message) => message.contactId === state.selectedContact
                )
                .map((message) => (
                  <Message key={message.id} message={message} />
                ))}
            <MessageInput />
          </div>
          {/* </MessagesContainer> */}
        </div>
      ) : (
        <div className="chat-container">
          <div className="d-flex align-items-center flex-column">
            <img
              src="https://static.whatsapp.net/rsrc.php/v4/y6/r/wa669aeJeom.png"
              alt="image"
              className="chat-image"
            />
            <h3 className="fw-semibold pt-3">
              Select a contact to start chatting
            </h3>
            <button className="btn-chat">Get from Microsoft Store</button>
          </div>
        </div>
      )}
      {/* </ChatContainer> */}
    </div>
  );
}
export default ChatWindow;
