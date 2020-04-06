import React from "react";
import styled from 'styled-components'


export const TabsContainer = styled.ul`
    overflow: unset;
    border: 1px solid #c4cdd7;
    border-radius: 25px;
    padding: 5px 4px;
    
    list-style-type: none;
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    
    font-family: Roboto;
    
`;
export const Tab = styled.li`
    min-width: 120px;
    text-align: center;
    position: relative;
    
    z-index: 1;
    margin: 0;
    border: unset;
    border-radius: 25px;
    padding: 6px 15px;
    font-size: 14px;
    line-height: 2;
    color: #c4cdd7;
    text-transform: initial;
    background-color: unset;
    transition: color 0.4s;
    display: inline-block;
    
    &:hover{
        color: #F42958 !important;
        cursor: pointer;
    }
    
    &.active{
        box-shadow: 0px 15px 39px rgba(0, 0, 0, 0.2);
        background-color: #ffffff; 
        color: #F42958;
    }
`;