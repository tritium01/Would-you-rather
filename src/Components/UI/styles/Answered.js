import React, {useState} from "react";
import colors from "../../../utils/colors";
import styled from "styled-components";


export const Profile = styled.div`
      border-color: pink;
      border-style: ${colors.primary};
      border-width: 0 2px 0 0;
      padding: 20px 40px;
      h2 {
      text-align: center;
      }
      
`;

export const Question = styled.div`
    flex: 1;
    text-align: center;
    padding: 15px;
    margin: ${props => props.margin};
    box-shadow: ${props => props.shadow};
`;

export const Text = styled.p`
font-family: Roboto;
font-weight: 300;
font-size: 18px;
  align-items: center;
  align-content: center;
  justify-content: center;
`