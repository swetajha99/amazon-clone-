import React from 'react'
import './Product.css'
import { useEffect,useState } from 'react';
import { useStateValue } from './StateProvider';
function Product({id, title, image, price}) {
const [{}, dispatch] = useStateValue();
// console.log("This is the basket>>>", basket);
const [star, setStar] =  useState(4)
useEffect(() => {
  setStar(Math.floor(Math.random()*5)+1);
}, [])
  const addToBasket =()=>{
    //dispatch the item into the data layer
    dispatch({
      type : 'ADD_TO_BASKET',
      item : {
        id : id,
        title:title,
        image: image,
        price: price,
      }
    });
  };
 
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
            <strong>$</strong>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
            
              {
                Array(star).fill().map((_,i) => (
                    <p>⭐</p> 
              ))}
             
            </div>
            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
  );
}

export default Product
