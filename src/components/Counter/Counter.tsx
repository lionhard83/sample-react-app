import React, { useState } from 'react'
import { Button } from '../CustomButton/Button';

export const Counter = () => {
    console.log('Sono entrato nel counter');
    const [x, setX] = useState(3); //  setX (s: number) => void
    const [y, setY] = useState<"pippo" | "caio">("pippo"); // setY (s: string) => void
 
  


  return (
    <>
    <div>Counter: {x}</div>
    <div>Y: {y}</div>
    
    <Button onClick={() => setX(x + 1)}></Button>
    <Button title='toggleY' onClick={() => setY(y === "pippo" ? "caio": "pippo")}></Button>
    <Button title='log' onClick={() => console.log("ciao")}></Button>
    </>
  )
}
