import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles"

export default function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null)

  useEffect(() => {
    api.get(`/people/${id}`).then(res => setCharacter(res.data));
  }, [id])

  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Name: </InfoTitle>
          <CharInfo>{character?.name}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Birth Year: </InfoTitle>
          <CharInfo>{character?.birth_year}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Gender: </InfoTitle>
          <CharInfo>{character?.gender}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Eye Color: </InfoTitle>
          <CharInfo>{character?.eye_color}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Hair Color: </InfoTitle>
          <CharInfo>{character?.hair_color}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Skin Color: </InfoTitle>
          <CharInfo>{character?.skin_color}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Height: </InfoTitle>
          <CharInfo>{character?.height}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Mass: </InfoTitle>
          <CharInfo>{character?.mass}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Films: </InfoTitle>
          <List>
            {character?.films?.map(film => {
              const id = film.split("/")[character.url.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/films/${id}`}>Film {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Species: </InfoTitle>
          <List>
            {character?.species?.map(species => {
              const id = species.split("/")[character.url.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/species/${id}`}>Specie {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Starships: </InfoTitle>
          <List>
            {character?.starships?.map(starships => {
              const id = starships.split("/")[character.url.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/starships/${id}`}>Starship {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>vehicles: </InfoTitle>
          <List>
            {character?.vehicles?.map(vehicles => {
              const id = vehicles.split("/")[character.url.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/vehicles/${id}`}>Vehicle {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
      </CharacterContainer>
    </Container>
  )
}
