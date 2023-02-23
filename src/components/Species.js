import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles";

export default function Specy() {
  const { id } = useParams();
  const [specy, setSpecy] = useState(null)

  useEffect(() => {
    api.get(`/species/${id}`).then(res => setSpecy(res.data));
  }, [id])

  console.log(specy)
  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Name: </InfoTitle>
          <CharInfo>{specy?.name}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Average Height: </InfoTitle>
          <CharInfo>{specy?.average_height}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Average Lifespan: </InfoTitle>
          <CharInfo>{specy?.average_lifespan}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Classification: </InfoTitle>
          <CharInfo>{specy?.classification}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Designation: </InfoTitle>
          <CharInfo>{specy?.designation}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Eye Colors: </InfoTitle>
          <CharInfo>{specy?.eye_colors}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Hair Colors: </InfoTitle>
          <CharInfo>{specy?.hair_colors}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Skin Colors: </InfoTitle>
          <CharInfo>{specy?.skin_colors}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Home World: </InfoTitle>
          <CharInfo>{specy?.home_world}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Language: </InfoTitle>
          <CharInfo>{specy?.language}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>People: </InfoTitle>
          <List>
            {specy?.people?.map(character => {
              const id = character.split("/")[character.split("/").length - 2];
              return (
                <ListItem>
                  <StyledLink to={`/characters/${id}`}>Person {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Films: </InfoTitle>
          <List>
            {specy?.films?.map(film => {
              const id = film.split("/")[film.split("/").length - 2];
              return (
                <ListItem>
                  <StyledLink to={`/films/${id}`}>Film {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
      </CharacterContainer>
    </Container>
  )
}