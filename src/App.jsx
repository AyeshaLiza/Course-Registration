import { useState } from 'react'

import './App.css'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'


function App() {

  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState((0));
  const [creditHour, setCreditHour] = useState((0));
  const [remainingCredit, setRemainingCredit] = useState((0));
  const handleSelect = (card) => {
    const isExist = selectedCourse.find((item) => item.id == card.id);
    let count = parseInt(card.price);
    let hour = parseInt(card.credit);

    if(isExist){
      alert('already selected')
    }else{
     selectedCourse.forEach((item) => {
        count = count + parseInt(item.price);     
        hour = hour + parseInt(item.credit);

     });
        const creditRemaining = 20- hour;
     if(hour> 20){
      return alert ('You Can not purchase More')
     }
     setCreditHour(hour);
      if(creditRemaining <0){
        return alert ('sorry! Credit limit fulfilled')
      }
     setRemainingCredit(creditRemaining);
     
     setTotalPrice(count);
      setSelectedCourse([...selectedCourse,card])
    }

  }
  return (
  <div>
    <div className='bg-red-50'>
  <h1 className='text-4xl text-center text-orange-400 font-medium p-7'>Course Regestration</h1>
    <div className='container flex'>
    <Home handleSelect={handleSelect}
    ></Home> 
    <Cart selectedCourse={selectedCourse} totalPrice={totalPrice} creditHour={creditHour} remainingCredit={remainingCredit}></Cart>
    
    </div>
  </div>
  </div>
  )
}

export default App
