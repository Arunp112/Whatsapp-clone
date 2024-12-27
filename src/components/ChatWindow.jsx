import React, { useContext, useEffect, useState } from "react";


import MessageInput from "./MessageInput";
import Message from "./Message";
import { ContactsContext } from "../context/ContactsContext";
import useInstantDB from "../customHooks/useInstantDB";
import { ChatContainer, MessagesContainer } from "../styles/StyledComponents";

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
    <div>
    {/* <ChatContainer> */}
      {state && state.selectedContact ? (
        <div>
        {/* <MessagesContainer> */}
          <div>
            <h2 style={{ color: "#128c7e", marginLeft: "10px" }} className="user-name">
              {state.selectedName}
            </h2>
          </div>
          <div>
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
        <div style={{ textAlign: "center", marginBottom: "50%" }}>
          <h3>Select a contact to start chatting</h3>
        </div>
      )}
    {/* </ChatContainer> */}
    </div>
  );
}
export default ChatWindow