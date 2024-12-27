import React, { useState, useContext, useEffect } from "react";

import useInstantDB from "../customHooks/useInstantDB";
import { ContactsContext } from "../context/ContactsContext";
import { IconButton } from "@mui/material";
import { MdDonutLarge } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { FaEllipsisVertical } from "react-icons/fa6";
import { Avatar } from "@mui/material";

export default function ContactList() {
  const { state, setContacts, selectContact } = useContext(ContactsContext);
  const { fetchUsers } = useInstantDB();
  const { isLoading, data } = fetchUsers();

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
    <div className="contact-list-main">
      <div className="pt-2 px-2">
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

      {state.contacts &&
        state.contacts.map((contact) => (
          <div
            key={contact.id}
            isSelected={state.selectedContact?.id === contact.id}
            onClick={() => selectContact(contact.id, contact.name)}
          >
            <div className="mt-2">
              <div className="d-flex justify-content-start align-items-center gap-2 p-2 cursor-pointer user-info">
                <span>
                  <Avatar src="https://api.dicebear.com/9.x/fun-emoji/svg" />
                </span>
                <span>{contact.name}</span>
              </div>

              <div>{contact.lastMessage}</div>
            </div>
          </div>
        ))}
      <div className="add-user">
        {addNewContact && (
          <div className="">
            <input
              type="text"
              placeholder="Name"
              value={newContactName}
              className="user-input"
              autoFocus
              onChange={(e) => setNewContactName(e.target.value)}
            />
            <button onClick={handleSaveContact} className="save-btn">
              Save
            </button>
          </div>
        )}
        <button
          onClick={() => setAddContact(!addNewContact)}
          style={{ backgroundColor: addNewContact ? "#C62300" : "#128c7e" }}
          className="add-btn"
        >
          {addNewContact ? "Cancel" : "Add +"}
        </button>
      </div>
    </div>
  );
}
