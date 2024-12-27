import styled, { createGlobalStyle, keyframes } from "styled-components";

// export const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//   }
// `;

// export const Navbar = styled.nav`
//   height: 10vh;
//   width: 80%;
//   margin: auto;
//   background-color: #128c7e;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const AppContainer = styled.div`
//   display: flex;
//   height: 90vh;
//   background-color: #f0f2f5;
//   width: 80%;
//   margin: auto;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// export const Sidebar = styled.div`
//   width: 35%;
//   border-right: 1px solid #d1d7db;
//   background: white;
//   overflow-y: auto;

//   @media (max-width: 768px) {
//     width: 30%;
//     display: ${(props) => (props.isHidden ? "none" : "block")};
//   }
// `;

// export const ContactItem = styled.div`
//   padding: 0.5rem;
//   border-bottom: 1px solid #e9edef;
//   cursor: pointer;
//   background: ${(props) => (props.isSelected ? "#f0f2f5" : "white")};

//   &:hover {
//     background-color: #f5f6f6;
//   }
// `;

// export const ContactName = styled.h3`
//   font-weight: 600;
//   color: #111b21;
//   margin-bottom: 0.25rem;
// `;

// export const LastMessage = styled.p`
//   color: #667781;
//   font-size: 0.875rem;
// `;

// export const ChatContainer = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   background: #efeae2;
//   justify-content: end;

//   @media (max-width: 768px) {
//     /* display: ${(props) => (props.isHidden ? "flex" : "none")}; */
//     width: 65%;
//   }
// `;

// export const ChatHeader = styled.div`
//   padding: 1rem;
//   background: #f0f2f5;
//   border-bottom: 1px solid #e9edef;
//   display: flex;
//   align-items: center;
// `;

// const messageAnimation = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(20px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// export const MessagesContainer = styled.div`
//   flex: 1;
//   /* padding: 1rem; */
//   overflow-y: auto;
//   display: flex;
//   flex-direction: column;
//   min-height: 90vh;
//   justify-content: space-between;
// `;

// export const MessageBubble = styled.div`
//   width: 60%;
//   margin-left: auto;
//   padding: 0.1rem 1rem;
//   margin-bottom: 0.5rem;
//   border-radius: 7.5px;
//   position: relative;
//   align-self: ${(props) => (props.sent ? "flex-end" : "flex-start")};
//   background: ${(props) => (props.sent ? "#d9fdd3" : "white")};
//   box-shadow: 0 1px 0.5px rgba(0, 0, 0, 0.13);
//   animation: ${messageAnimation} 0.3s ease;
//   margin-right: 10px;
// `;

// export const MessageTime = styled.span`
//   font-size: 0.75rem;
//   color: #667781;
//   display: block;
//   margin-top: 0.25rem;
//   text-align: right;
// `;

export const InputContainer = styled.form`
  padding: 1rem;
  background: #f0f2f5;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 0.9375rem;

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  background: #00a884;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #008f72;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;
