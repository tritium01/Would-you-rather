import styled from "styled-components";



export const Input = styled.input`
font-family: Roboto;
  height: 45px;
  width: 100%;
  padding: ${props => props.padding || '0'};
  margin: ${props => props.margin || '0'};
  background: ${props => props.color || 'white'}
  border-radius: 80px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.19);
`;