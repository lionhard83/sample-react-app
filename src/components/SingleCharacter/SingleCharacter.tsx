import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Character } from '../../hooks/useCharacters'

export const SingleCharacter = () => {
  const {id} = useParams() as {id: string}
  const [character, setCharacter] = useState<Character>();
  const loadData = async () => {
    const {data} = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    setCharacter(data);
  }
  useEffect(() => {
    loadData();
  }, [id])

  return (
    <div>{character?.name}</div>
  )
}
