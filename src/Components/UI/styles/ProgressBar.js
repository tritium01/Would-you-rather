import styled from "styled-components";

export const Tracker = styled.div`
display: flex;
  width: 100%;
  height: 30px;
  margin: 15px auto;
  background: none;
  border-radius: 15px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.19);
    align-items: center;
`;

export const ProgressInTracker = styled.div`
  width: ${props => props.percentage || '0'};
  height: 100%;
  background: purple;
  border-radius: 15px;
  color: white;
  text-align: center;
  align-items: center;
  font-size: 18px;
  
`;


