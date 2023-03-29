import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCharacters } from '../../hooks/useCharacters';


export const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const [characters, , isLoading] = useCharacters(page);
  

  return (
    <div style={{paddingLeft: '30px'}}>
        <button onClick={() => setPage(Math.max(1, page -1))}>-</button>
        <span>{page}</span>
        <button onClick={() => setPage(page +1)}>+</button>
        {isLoading && <p>loading</p>}
        {!isLoading && <ul>
            {characters.map(item =><li>{item.id}-{item.name}</li>)}
        </ul>}
    </div>
  )
}
