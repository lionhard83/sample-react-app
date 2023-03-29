import React, { useState } from 'react'
import { useMeteo } from '../../hooks/useMeteo';

export const Meteo = () => {
  const [city, setCity] = useState("Catania");
  const [meteo, setMeteo, isLoading] = useMeteo(city);

  const handleKeyDown = (el: React.KeyboardEvent<HTMLInputElement>) => {
    if (el.key === 'Enter') {
        setCity(el.currentTarget.value);
    }
  }

  return (
    <>
        <input onKeyDown={handleKeyDown} ></input>
        {!isLoading && meteo &&  <div>Meteo di {city} è {meteo.weather[0].description}</div>}
    </>
  )
}
