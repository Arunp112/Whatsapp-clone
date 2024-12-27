import React, { useEffect } from 'react';
import { ContactsProvider } from './context/ContactsContext';
// import { Layout } from './components/Layout';
import Layout from './components/Layout';
import LayoutBasic from './components/LayoutBasic';

const App = () => {
  useEffect(() => {
    // Fetch initial data for contacts and messages here.
  }, []);

  return (
    <ContactsProvider>
      {/* <MessagesProvider> */}
        <Layout/>
        {/* <LayoutBasic/> */}
      {/* </MessagesProvider> */}
    </ContactsProvider>
  );
};

export default App;


// import React from "react";
// import { ChatProvider } from "./context/ChatContext";

// import {Layout} from "./components/Layout";

// export default function App() {
//   return (
//     <ChatProvider>
//       <Layout />
//     </ChatProvider>
//   );
// }
