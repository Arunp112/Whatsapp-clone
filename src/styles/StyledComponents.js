import styled from "styled-components";

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
