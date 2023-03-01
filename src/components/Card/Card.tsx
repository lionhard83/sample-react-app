import React, { ReactNode } from 'react'
import { Product } from '../../App';

type CardProps = {setItems: Function, product: Product, index: number};



export const Card = (props: CardProps) => {
  const product = props.product;
  const changeQty = (value: number) => {
    props.setItems((prevState: Product[]) => {
      prevState[props.index].qty = Math.max(prevState[props.index].qty + value, 0);
      return [...prevState];
    })
  }

  return (
    
    <div className="card" style={{width: '18rem'}}>
    
    <div className="card-body">
        <h5 className="card-title">{product.type} {props.index}</h5>
        <p className="card-text">{product.description}</p>
        <a href="#" className="btn btn-primary">{product.price}</a>
        <hr></hr>
        <button className='btn btn-primary' onClick={() => changeQty(1)}>+</button>
        <span>{product.qty}</span>
        <button className='btn btn-primary' onClick={() => changeQty(-1)}>-</button>
    </div>
    </div>
  )
}
