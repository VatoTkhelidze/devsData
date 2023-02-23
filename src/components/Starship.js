import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles";

export default function Starship() {
  const { id } = useParams();
  const [starship, setStarship] = useState(null)

  useEffect(() => {
    api.get(`/starships/${id}`).then(res => setStarship(res.data));
  }, [id])

  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Name: </InfoTitle>
          <CharInfo>{starship?.name}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Model: </InfoTitle>
          <CharInfo>{starship?.model}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Starship Class: </InfoTitle>
          <CharInfo>{starship?.starship_class}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>MGLT: </InfoTitle>
          <CharInfo>{starship?.MGLT}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Cargo Capacity: </InfoTitle>
          <CharInfo>{starship?.cargo_capacity}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Consumables: </InfoTitle>
          <CharInfo>{starship?.consumables}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Cost In Credits: </InfoTitle>
          <CharInfo>{starship?.cost_in_credits}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Crew: </InfoTitle>
          <CharInfo>{starship?.crew}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Hyperdrive Rating: </InfoTitle>
          <CharInfo>{starship?.hyperdrive_rating}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Length: </InfoTitle>
          <CharInfo>{starship?.length}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Manufacturer: </InfoTitle>
          <CharInfo>{starship?.manufacturer}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Max Atmosphering Speed: </InfoTitle>
          <CharInfo>{starship?.max_atmosphering_speed}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Passengers: </InfoTitle>
          <CharInfo>{starship?.passengers}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>People: </InfoTitle>
          <List>
            {starship?.people?.map(character => {
              const id = character.split("/")[character.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/characters/${id}`}>Person {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Films: </InfoTitle>
          <List>
            {starship?.films?.map(film => {
              const id = film.split("/")[film.split("/").length - 2];
              return (
                <ListItem key={id}>
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