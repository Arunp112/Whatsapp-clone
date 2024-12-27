import React, { useEffect } from "react";
import { ContactsProvider } from "./context/ContactsContext";

import Layout from "./components/Layout";

const App = () => {
  useEffect(() => {
    // Fetch initial data for contacts and messages here.
  }, []);

  return (
    <ContactsProvider>
      <Layout />
    </ContactsProvider>
  );
};

export default App;
