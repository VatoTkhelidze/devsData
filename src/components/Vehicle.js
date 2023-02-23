import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles";

export default function Vehicle() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null)

  useEffect(() => {
    api.get(`/vehicles/${id}`).then(res => setVehicle(res.data));
  }, [id])

  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Name: </InfoTitle>
          <CharInfo>{vehicle?.name}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Model: </InfoTitle>
          <CharInfo>{vehicle?.model}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Consumables: </InfoTitle>
          <CharInfo>{vehicle?.consumables}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Crew: </InfoTitle>
          <CharInfo>{vehicle?.crew}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Cargo Capacity: </InfoTitle>
          <CharInfo>{vehicle?.cargo_capacity}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Consumables: </InfoTitle>
          <CharInfo>{vehicle?.consumables}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Cost In Credits: </InfoTitle>
          <CharInfo>{vehicle?.cost_in_credits}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Crew: </InfoTitle>
          <CharInfo>{vehicle?.crew}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Length: </InfoTitle>
          <CharInfo>{vehicle?.length}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Length: </InfoTitle>
          <CharInfo>{vehicle?.length}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Manufacturer: </InfoTitle>
          <CharInfo>{vehicle?.manufacturer}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Max Atmosphering Speed: </InfoTitle>
          <CharInfo>{vehicle?.max_atmosphering_speed}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Passengers: </InfoTitle>
          <CharInfo>{vehicle?.passengers}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Films: </InfoTitle>
          <List>
            {vehicle?.films?.map(film => {
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