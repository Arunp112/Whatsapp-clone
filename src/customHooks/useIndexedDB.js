import { openDB } from 'idb';

const useIndexedDB = () => {
  const initDB = async () => {
    return await openDB('WhatsAppCloneDB', 1, {
      upgrade(db) {
        db.createObjectStore('messages', { keyPath: 'id' });
      },
    });
  };

  const saveMessage = async (message) => {
    const db = await initDB();
    await db.put('messages', message);
  };

  const fetchMessages = async (contactId) => {
    const db = await initDB();
    return await db.getAllFromIndex('messages', 'contactId', contactId);
  };

  return { saveMessage, fetchMessages };
};

export default useIndexedDB;
