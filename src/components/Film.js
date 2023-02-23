import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles";

export default function Character() {
  const { id } = useParams();
  const [film, setFilm] = useState(null)

  useEffect(() => {
    api.get(`/films/${id}`).then(res => setFilm(res.data));
  }, [id])

  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Title: </InfoTitle>
          <CharInfo>{film?.title}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Director: </InfoTitle>
          <CharInfo>{film?.director}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Producer: </InfoTitle>
          <CharInfo>{film?.producer}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Release Date: </InfoTitle>
          <CharInfo>{film?.release_date}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Episode: </InfoTitle>
          <CharInfo>{film?.episode_id}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Description: </InfoTitle>
          <CharInfo>{film?.opening_crawl}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Characters: </InfoTitle>
          <List>
            {film?.characters?.map(character => {
              const id = character.split("/")[character.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/characters/${id}`}>Character {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Species: </InfoTitle>
          <List>
            {film?.species?.map(species => {
              const id = species.split("/")[film.url.split("/").length - 2];
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
            {film?.starships?.map(starships => {
              const id = starships.split("/")[film.url.split("/").length - 2];
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
            {film?.vehicles?.map(vehicle => {
              const id = vehicle.split("/")[vehicle.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/vehicles/${id}`}>Vehicle {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Planets: </InfoTitle>
          <List>
            {film?.planets?.map(planet => {
              const id = planet.split("/")[planet.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/planets/${id}`}>Planet {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
      </CharacterContainer>
    </Container>
  )
}