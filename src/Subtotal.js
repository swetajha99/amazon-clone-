import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "./StateProvider"
import { getBasketTotal } from './reducer';
function Subtotal() {
  const[{basket}, dispatch] = useStateValue();
  const proceedToCheckout=()=>{
    if(getBasketTotal(basket)<1){
      alert('Your cart is empty')
  }else{
    alert('Your order is placed')
  }
 
}
  return (
    <div className='subtotal'>
        <CurrencyFormat renderText={(value) =>
        <>
            <p>
                Subtotal ({basket.length}items):
                <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
                <input type={"checkbox"} /> This order contains a gift 
            </small>
  </>}
        decimalScale={2}//two decimal places
        value = {getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator = {true}
        prefix={"$"}
        
/>

        <button onClick={proceedToCheckout}>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal