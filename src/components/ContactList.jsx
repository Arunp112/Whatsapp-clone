import React, { useMemo, useState, useContext, useEffect } from "react";
import {
  Sidebar,
  ContactItem,
  ContactName,
  LastMessage,
} from "../styles/StyledComponents";
import styled from "styled-components";
import useInstantDB from "../customHooks/useInstantDB";
import { ContactsContext } from "../context/ContactsContext";
import { IconButton } from "@mui/material";
import { MdDonutLarge } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";

export default function ContactList({ message }) {
  const { state, setContacts, selectContact } = useContext(ContactsContext);
  const { fetchUsers } = useInstantDB();
  const { isLoading, error, data } = fetchUsers();

  useEffect(() => {
    const fetchData = async () => {
      if (!isLoading && data) {
        setContacts(data.users);
      }
    };
    fetchData();
  }, [isLoading, data]);

  const [addNewContact, setAddContact] = useState(false);
  const [newContactName, setNewContactName] = useState("");
  const { addUser } = useInstantDB();

  const handleSaveContact = () => {
    if (!newContactName) return;
    addUser(newContactName);
    setAddContact(false);
    setNewContactName("");
  };

  return (
    <div>
      <div className="pt-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold text-lg">Chats</span>
          <span className="d-flex align-items-center gap-3 justify-content-between">
            <IconButton>
              <MdDonutLarge />
            </IconButton>
            <IconButton>
              <MdChat />
            </IconButton>
            <IconButton>
              <FaEllipsisVertical />
            </IconButton>
          </span>
        </div>
        <span className="pt-4">
        <input class="input-grey-rounded" type="text" placeholder="Search" />
        </span>
      </div>
      {/* <Sidebar> */}
      {state.contacts &&
        state.contacts.map((contact) => (
          // <ContactItem
          //   key={contact.id}
          //   isSelected={state.selectedContact?.id === contact.id}
          //   onClick={() => selectContact(contact.id, contact.name)}
          // >
          <div
            key={contact.id}
            isSelected={state.selectedContact?.id === contact.id}
            onClick={() => selectContact(contact.id, contact.name)}
          >
            {/* <ContactName> */}
            <div><span>
              {contact.name}
              </span>
              {/* <span>{message.text}</span> */}
              </div>
            {/* </ContactName> */}
            {/* <LastMessage> */}
            <div>{contact.lastMessage}</div>
            {/* </LastMessage> */}
          </div>
          // </ContactItem>
        ))}
      <div>
        {/* <ADD_CONTACT> */}
        {addNewContact && (
          <div>
            <input
              type="text"
              placeholder="Name"
              value={newContactName}
              autoFocus
              onChange={(e) => setNewContactName(e.target.value)}
            />
            <button onClick={handleSaveContact}>Save</button>
          </div>
        )}
        <button
          onClick={() => setAddContact(!addNewContact)}
          style={{ backgroundColor: addNewContact ? "#C62300" : "#128c7e" }}
        >
          {addNewContact ? "Cancel" : "Add +"}
        </button>
        {/* </ADD_CONTACT> */}
      </div>

      {/* </Sidebar> */}
    </div>
  );
}

// const ADD_CONTACT = styled.div`
//   width: 70%;
//   margin: auto;
//   padding: 20px 0;

//   button {
//     width: 100%;
//     height: 40px;
//     border-radius: 20px;
//     background-color: var(--color, #128c7e);
//     border: none;
//     color: white;
//     font-weight: 500;
//     cursor: pointer;
//     margin-top: 20px;
//   }

//   input {
//     width: 90%;
//     height: 40px;
//     border-radius: 10px;
//     margin-bottom: 20px;
//     border: 0.5px solid lightgray;
//     /* padding: 0 10px; */
//     margin: auto;
//   }
//   input:focus {
//     outline: none;
//     border: 2px solid lightblue;
//   }

//   @media (max-width: 768px) {
//     width: 95%;
//   }
// `;
