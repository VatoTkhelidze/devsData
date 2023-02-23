import React, { useState, useEffect } from 'react'
import api from '../api';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearchValue(e.target[0].value)
  }

  useEffect(() => {
    api.get(`/people/?search=${searchValue}`).then((res) => {
      setCharacters(res.data)
    })
  }, [searchValue])

  const getNextPage = () => {
    api.get(characters.next).then((res) => {
      setCharacters(res.data)
    })
  }

  const getPreviousPage = () => {
    api.get(characters.previous).then((res) => {
      setCharacters(res.data)
    })
  }

  return (
    <Container>
      <Form onSubmit={submit}>
        <SearchInput name="character" type="search" placeholder='Search characters' />
        <Search type='submit'>Search</Search>
      </Form>
      <CharactersContainer>
        {characters?.results?.map((character) => {
          const id = character.url.split("/")[character.url.split("/").length - 2];
          return (
            <>
              <Character to={`characters/${id}`} key={id}>
                <h2>{character.name}</h2>
              </Character>
            </>
          )
        })}
      </CharactersContainer>
      <Pagination>
        <NextPrevButton onClick={getPreviousPage} disabled={!characters.previous}>Previous Page</NextPrevButton>
        <NextPrevButton onClick={getNextPage} disabled={!characters.next}>Next Page</NextPrevButton>
      </Pagination>
    </Container>
  )
}
const NextPrevButton = styled.button`
  font-family: 'StarJout';
  letter-spacing: 1px;
  font-size: 16px;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  &:not(:disabled) {
    :hover{
      background-color: gray;
      cursor: pointer;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
`
const SearchInput = styled.input`
  font-family: 'StarJout';
  letter-spacing: 1px;
  font-size: 16px;
  color: black;
  outline: none;
  border: none;
  border-radius: 8px;
`
const Search = styled.button`
  font-family: 'StarJout';
  letter-spacing: 1px;
  font-size: 16px;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  text-decoration: none;
  :hover{
    background-color: gray;
    cursor: pointer;
  }
`

const Character = styled(Link)`
  font-family: 'StarJout';
  letter-spacing: 3px;
  color: black;
  padding: 40px 20px;
  border-radius: 8px;
  background-color: white;
  text-decoration: none;
  :hover{
    background-color: gray;
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  padding: 100px 16px;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 100px 40px;
  }

  @media (min-width: 1024px) {
    padding: 100px 160px;
  }
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  height: 40px;


  input {
    width: 100%;
    height: 100%;
    padding: 0 16px;
  }

  button {
    padding: 0 40px;
  }
`; 

const Pagination = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  button {
    padding: 10px 40px;
  }
`;

const CharactersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;