import React, { createContext, useReducer } from "react";

const initialState = { contacts: [], selectedContact: null, selectedName:null };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "SELECT_CONTACT":
      return { ...state, selectedContact: action.payload.id, selectedName:action.payload.name };
    default:
      return state;
  }
};

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setContacts = (contacts) =>
    dispatch({ type: "SET_CONTACTS", payload: contacts });
  const selectContact = (id,name) =>
    dispatch({ type: "SELECT_CONTACT", payload: {id,name} });

  return (
    <ContactsContext.Provider value={{ state, setContacts, selectContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
