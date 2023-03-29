import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://rickandmortyapi.com/api/character";

type Character = {
  id: number;
  name: string;
  status: "unknown" | "alive" | "dead";
  species: string;
  type: string;
  gender: "unknown" | "female" | "male" | "genderless";
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const useCharacters = (page = 1) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setTimeout(async () => {
        const { data } = await axios.get(`${url}?page=${page}`);
        setCharacters(data.results);
        setLoading(false);
      }, 2000);
    };
    load();
  }, [page]);
  return [characters, setCharacters, isLoading] as [
    Character[],
    Function,
    boolean
  ];
};
