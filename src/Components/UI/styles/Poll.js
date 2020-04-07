import styled from "styled-components";
import colors from "../../../utils/colors";

export const Profile = styled.div`
      border-color: ${colors.primary};
      border-style: solid;
      border-width: 0 2px 0 0;
      padding-right: 40px;
      
      img {
      text-align: center;
      }
      
      h2 {
      text-align: center;
      }
      
`;

export const Question = styled.div`
    flex: 1;
    padding: 0 30px 0 30px;
    text-align: center;
`;

export const Text = styled.p`
font-family: Roboto;
font-weight: 300;
font-size: 18px;
color: ${colors.subBody};
  align-items: center;
  align-content: center;
  justify-content: center;
`


