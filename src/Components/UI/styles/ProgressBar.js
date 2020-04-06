import styled from "styled-components";

export const Tracker = styled.div`
  width: 100%;
  height: 20px;
  margin: 15px auto;
  background: rgb(34,34,34);
  border-radius: 10px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.19);
  
`;

export const ProgressInTracker = styled.div`
  width: ${props => props.percentage || '0'};
  height: 100%;
  background: purple;
  border-radius: 8px;
  color: white;
  text-align: center;
`;


