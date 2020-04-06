import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'row'};
    align-content: ${props => props.content || 'center'};
    align-items: ${props => props.items || 'center'};
    justify-content: center;
    padding-top: ${props => props.direction || '0'};
    width: ${props => props.width || 'auto'};

`;

export const Col = styled.div`
    flex: ${props => props.size};
    padding: ${props => props.padding || '0'};
    text-align: ${props => props.align ||'center'};
    border: ${props=> props.border || '2px solid black'}
    width: ${props => props.width || 'auto'};

`;

export const Wrapper = styled.section`
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.19);
  margin-bottom: 15px;
  padding: ${props => props.padding || '0'};
  width: ${props => props.width};
  justify-content: ${props => props.content || 'center'};

`;


//List Items

export const List = styled.ul`
  text-decoration: none;
  list-style: none;
`;