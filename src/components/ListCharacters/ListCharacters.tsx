import React, { useState } from "react";
import { useCharacters } from "../../hooks/useCharacters";
import { Link, useLocation, useSearchParams } from "react-router-dom";

export const ListCharacters = () => {
  const [search, setSearchParams] = useSearchParams({page: "1"});
  const [characters] = useCharacters(Number(search.get("page")));

  const setPagination = (page: number) => {
    setSearchParams({page: String(page)});
  }

  return <>
    <p>page: {Number(search.get("page"))}</p>
    <button onClick={() => setPagination(Number(search.get("page")) -1)}>-</button>
    <button onClick={() => setPagination(Number(search.get("page")) +1)}>+</button>
    <ul>
    {characters.map(item => 
    <Link to={String(item.id)}> 
      <li>{item.name}</li> 
    </Link> )}
  </ul></>;
};
