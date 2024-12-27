import React, { useContext, useState } from "react";

import {
  InputContainer,
  MessageInput as Input,
  SendButton,
} from "../styles/StyledComponents";
import { ContactsContext } from "../context/ContactsContext";
import useInstantDB from "../customHooks/useInstantDB";

function MessageInput() {
  const [message, setMessage] = useState("");
  const { state } = useContext(ContactsContext);
  const { sendMessage } = useInstantDB();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || !state.selectedContact) return;

    sendMessage(state.selectedContact, message.trim());
    setMessage("");
  };

  return (
    // <div onSubmit={handleSubmit}>
     <InputContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message"
      />
     
      <SendButton type="submit">Send</SendButton>
      {/* <button type="submit">Send</button> */}
    </InputContainer>
  //  </div>
  );
}
export default MessageInput
