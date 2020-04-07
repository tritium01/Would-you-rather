import styled from "styled-components";

export const TextInput = styled.textarea`
  width: 220px;
  height: 56px;
  border-radius: 4px;
  position: relative;
  transition: 0.3s all;
  resize: none;
  outline: none;
  border: none;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);;
  &:hover {
    background-color: 'e7e7eb';
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }
  &::placeholder {
    text-align: center;
    padding-top: 20px;
  }
`


