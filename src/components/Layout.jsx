import React from "react";
import { AppContainer, Navbar } from "../styles/StyledComponents";
import ChatWindow from "./ChatWindow";
import ContactList from "./ContactList";
import { WhatsApp } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { sidebarIcon } from "../icons/Icon";

const Layout = () => {
  return (
    <div
      className="layout  "
      // style={{ height: "100vh", width: "100%", backgroundColor: "lightgray" }}
    >
      {/* <Navbar> */}
      <div className="d-flex align-items-center gap-2">
        {/* <img src="" alt="" /> */}
        <WhatsApp className="logo" />
        <span className="text-black fw-bold text-sm">WhatsApp</span>
      </div>
      {/* </Navbar> */}
      {/* <AppContainer> */}
      <div className="container-fluid bg-white rounded ">
        <div className="sidebar border-end px-1">
        <div className="d-flex flex-column gap-4">
          {sidebarIcon.map((icons) => (
            <div key={icons.id} >
              {" "}
              {/* Use icons.id for the key */}
              <IconButton>
                <icons.icon size={24} /> {/* Render the icon as a component */}
              </IconButton>
            </div>
          ))}
        </div>
        </div>
        <div className="row info-container">
          <div className="col-2">
            <ContactList />
          </div>
          <div className="col-10">
            <ChatWindow />
          </div>
        </div>
      </div>

      {/* </AppContainer>{" "} */}
    </div>
  );
};
export default Layout;
