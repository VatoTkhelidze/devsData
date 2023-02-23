import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import api from '../api';
import {Container, CharacterContainer, StyledLink, Info, InfoTitle, CharInfo, List, ListItem} from "../styled-components/GlobalStyles";

export default function Planet() {
  const { id } = useParams();
  const [planet, setPlanet] = useState(null)

  useEffect(() => {
    api.get(`/planets/${id}`).then(res => setPlanet(res.data));
  }, [id])

  return (
    <Container>
      <CharacterContainer>
        <StyledLink to="/">Go back</StyledLink>
        <Info>
          <InfoTitle>Name: </InfoTitle>
          <CharInfo>{planet?.name}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Climate: </InfoTitle>
          <CharInfo>{planet?.climate}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Diameter: </InfoTitle>
          <CharInfo>{planet?.diameter}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Gravity: </InfoTitle>
          <CharInfo>{planet?.gravity}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Orbital Period: </InfoTitle>
          <CharInfo>{planet?.orbital_period}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Population: </InfoTitle>
          <CharInfo>{planet?.population}</CharInfo>
        </Info>
        <Info>
          <InfoTitle>Rotation Period: </InfoTitle>
          <CharInfo>{planet?.rotation_period}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Surface Water: </InfoTitle>
          <CharInfo>{planet?.surface_water}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Terrain: </InfoTitle>
          <CharInfo>{planet?.terrain}</CharInfo>
        </Info>
        <Info FlexStart>
          <InfoTitle>Films: </InfoTitle>
          <List>
            {planet?.films?.map(film => {
              const id = film.split("/")[film.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/films/${id}`}>Film {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
        <Info FlexStart>
          <InfoTitle>Residents: </InfoTitle>
          <List>
            {planet?.residents?.map(resident => {
              const id = resident.split("/")[resident.split("/").length - 2];
              return (
                <ListItem key={id}>
                  <StyledLink to={`/characters/${id}`}>Resident {id}</StyledLink>
                </ListItem>
              )
            })}
          </List>
        </Info>
      </CharacterContainer>
    </Container>
  )
}