import React from "react";
import colors from '../../../utils/colors'
import styled from "styled-components";


export const Title = styled.h1`
  color: ${colors.primary};
  font-size: 46px;
  font-family: Roboto;
  font-weight: 600;
  display: flex;
  
`;

export const SubTitle = styled.h2`
  color: ${colors.body};
  font-size: 22px;
  font-weight: 600;
  font-family: Roboto;
`

export const NavTitles = styled.h3`
  font-size: 22px;
  font-weight: 600;
  text-decoration: none;
`;

export const Body = styled.p`
  color: ${colors.subBody};
  font-size: 18px;
  font-weight: normal;
  font-family: Roboto;
`;

