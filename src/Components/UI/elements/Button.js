import colors from "../../../utils/colors";
import styled from "styled-components";
import {Link} from 'react-router-dom'


export const StyledLink = styled(Link)`
font-family: Roboto;
font-size: 18px;
font-weight: 600;
color: white;
background-color: ${colors.primary};
width: 220px;
height: 36px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;

  &:hover, &:focus {
    background: #c25884;
  }
  
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
  
  &:active {
    transform: scale(0.99);
  }
`;
const Button = styled.a`
font-family: Roboto;
font-size: 18;
font-weight: 600;
color: white;
background-color: ${colors.primary};
width: 220px;
height: 44px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
cursor: pointer;
transition: background 250ms ease-in-out,
            transform 150ms ease;

  &:hover, &:focus {
    background: #c25884;
  }
  
  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
  
  &:active {
    transform: scale(0.99);
  }

`
export default Button