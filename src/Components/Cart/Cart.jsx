import React, { Children } from 'react';
import './Cart.css';

const Cart = ({selectedCourse, totalPrice,creditHour, remainingCredit}) =>{
 return (
  <div className='bg-white mx-4 p-4 rounded-lg h-96 '>
    <h1>Credit Hour Remaining: {remainingCredit} hr</h1>
    <h2 className='border border-solid my-3'></h2>


   <h1 className='text-2xl'> Course Name:</h1>


     {
      selectedCourse.map((card)=>{
        return (

          <div key={card.id}>
        
          <li>{card.name}</li>
         
          </div>
        )
      } )
     }
     
     <h1 className='border border-solid my-3'></h1>
          <h1 className='text-xl '>Total Credit Hour:{creditHour}</h1>
          <h2 className='border border-solid my-3'></h2>
          <h1 className='text-xl '>Total Price:{totalPrice}</h1>
  </div>
 )
}
export default Cart;

