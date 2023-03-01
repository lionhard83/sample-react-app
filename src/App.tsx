import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Card } from './components/Card/Card';
import { Counter } from './components/Counter/Counter';
import { Container } from './components/Container/Container';

export type Product = {type: string, description: string, price: number, qty: number}




const App = () => {
  const [price, setPrice] = useState(0);
  const [items, setItems]= useState([
    {type: "iphone", description: 'An iphone just for cool people', price: 800, qty: 0},
    {type: "samsung", description: 'A samsung just for wrong people', price: 400,  qty: 0},
    {type: "ps5", description: 'A ps5 just for geek people', price: 500,  qty: 0},
    {type: "dabliu", description: 'A tv that Pignataro buy for class', price: 500,  qty: 0}
  ]) 
  useEffect(() => {
    console.log("array vuoto");
  }, [])

  useEffect(() => {
    console.log("senza array");
  })

  useEffect(() => {
    setPrice(items.reduce((acc, {price, qty})=> acc + price * qty, 0));
  }, [items]);

  return (
    <>
      <h1>{price}</h1>
      {items.map((item, index) => 
        <Container key={index}>
          <Card key={index} setItems={setItems} product={item} index={index}></Card>
        </Container>
      )}
      
    </>
    )
}

export default App;
