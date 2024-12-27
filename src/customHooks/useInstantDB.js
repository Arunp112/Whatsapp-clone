import { init, tx, id } from "@instantdb/react";

const useInstantDB = () => {
  const db = init({
    appId: "5966b783-c443-429d-8169-ddef293c7b37",
  });

  function fetchUsers() {
    const { isLoading, error, data } = db.useQuery({
      users: {},
    });
    return { isLoading, error, data };
  }

  function fetchMessages(contactId) {
    const { isLoading, error, data } = db.useQuery({
      messages: { contactId: contactId },
    });
    return { isLoading, error, data };
  }

  function sendMessage(contactId, text) {
    db.transact(
      db.tx.messages[id()].update({
        createdAt: new Date(),
        text: text,
        contactId: contactId,
        sent: true,
      })
    );
  }
  function addUser(name) {
    db.transact(
      db.tx.users[id()].update({
        createdAt: new Date(),
        name: name,
      })
    );
  }

  return { fetchUsers, sendMessage, addUser, fetchMessages };
};

export default useInstantDB;
