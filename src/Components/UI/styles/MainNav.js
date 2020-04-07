import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavItems = styled.li`
   padding: 0 15px;
`;

export const StyledLink = styled(NavLink)`
      font-size: 22px;
    font-weight: 600;
    text-decoration: none;
    
      &:hover, &:focus {
    color: #c25884;
  }

`


export const NavList = styled.ul`
  list-style-type: none;
  flex-direction: row;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px 0;
`;

