import colors from "../../../utils/colors";
import styled from "styled-components";


export const Select = styled.select`
  width: 100%;
  height: 44px;
  background: white;
  color: gray;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  margin-bottom: 20px;
  box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.19);
  border-radius: 9px;
  option {
    color: ${colors.subBody};
    font-family: Roboto;
    background: white;
    display: flex;
    font-size: 16px;
    min-height: 20px;
    padding: 100px 2px ;
  }
`;