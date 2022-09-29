import React from 'react';
import './Card.css'
import {BsFillCartFill} from "react-icons/bs"  // bs is icon name first letters

const Card = ({gunData, handelAddToCart}) => {
   const {img, name, bullet, capacity, action, price, id} = gunData;
   
    return (
        <div className='card'>
           <div className='img-container'>
            <img src={img} alt="" />
           </div>
           <div className="card-content">
                <h3>{name}</h3>
                <p>Bullet Type : {bullet}</p>
                <p>Capacity : {capacity}</p>
                <p>Action : {action}</p>
                <p>Price : {price}</p>
           </div>
           <div>
            <button onClick={() => handelAddToCart(gunData)} className='card-btn'>
                <BsFillCartFill className='cart-icon'/>
                Add To Cart
                </button>
           </div>
        </div>
    );
};

export default Card;
