import React, { useState } from 'react';


const Card = ({card, handleSelect}) => {
const {image, name, details, price, credit} = card;

 return (
 <>
  <div>
   <div className="card  bg-white border p-4  rounded-lg space-y-4"> 
       <div>
        <img className='w-full' src={image} alt="" />
       </div>
       <div>
        <h3 className='text-xl font-medium'>{name}</h3>
        <p className='text-gray-500 text-justify text-base '>{details}</p>
       </div>
       
       <div className='flex gap-5 text-gray-500'>
        <img src="./dollar-sign 1.png" alt="" />
        <p>Price:{price}</p>
        <img src="./Frame(2).png" alt="" />
        <p>Credit:{credit}</p>
       </div>
       <button onClick={()=> handleSelect(card)} className='bg-blue-700 text-white text-xl font-medium px-28 py-1 rounded-xl'>Select</button>
      </div>
  </div>

  </>
 );
};

export default Card;