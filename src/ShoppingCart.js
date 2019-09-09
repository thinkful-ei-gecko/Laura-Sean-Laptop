import React from 'react';
import Summary from './Summary';
import Total from './Total';
import './ShoppingCart.css';

export default function ShoppingCart(props){

  return (<section className="main__summary">
           <h2>Your cart</h2>
           <Summary  features={props.features} selected={props.selected} />
           <Total  features={props.features} selected={props.selected} />
         </section>
  )
}







