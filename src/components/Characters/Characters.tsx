import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';
import RecipeReviewCard from '../Card/Card';


export const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const [characters, , isLoading] = useCharacters(page);
  

  return (
    <div style={{paddingLeft: '30px'}}>
        <button onClick={() => setPage(Math.max(1, page -1))}>-</button>
        <p>{page}</p>
        <button onClick={() => setPage(page +1)}>+</button>
        {isLoading && <p>loading</p>}
        {!isLoading && <ul>
            {characters.map(({name, image, created, type, species}) => <><RecipeReviewCard title={name} image={image} description={type + ' ' + species} subheader={created} /><hr></hr></>)}
        </ul>}
    </div>
  )
}
