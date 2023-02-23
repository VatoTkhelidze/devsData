import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "../assets/starWarsCover.png"
import StarJout from "../assets/fonts/Starjout.ttf";
import StarJedi from "../assets/fonts/Starjedi.ttf";
import {Link} from "react-router-dom";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Starjout';
    src: url(${StarJout}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'StarJedi';
    src: url(${StarJedi}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-image: url(${backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    padding: 40px 0;
  }
`;

export default GlobalStyles;

export const StyledLink = styled(Link)`
  font-family: 'StarJedi';
  color: black;
  letter-spacing: 1px;
  font-size: 14px;
`
export const CharInfo = styled.h2`
  font-family: 'StarJedi';
  color: black;
  letter-spacing: 1.5px;
  font-size: 14px;
`

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 40px;
  }

  @media (min-width: 1024px) {
    padding: 0 160px;
  }
`;

export const CharacterContainer = styled.div`
  max-width: 800px;
  width: 100%;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 40px 20px;
`;

export const Info = styled.div`
  display: flex;
  align-items: ${({FlexStart}) => FlexStart ? "flex-start" : "center"};
  gap: 16px;
`;

export const InfoTitle = styled.p`
  font-family: 'StarJedi';
  color: gray;
  letter-spacing: 1px;
  font-size: 16px;
`;

export const List = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  list-style-type: none;
  width: 80%;
  margin-left: auto;
`

export const ListItem = styled.li``;