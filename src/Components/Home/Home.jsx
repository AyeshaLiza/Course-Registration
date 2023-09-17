

import { useEffect, useState } from 'react';
import Card from './Card';

const Home = ({handleSelect})=>{
const [courses, setCourses] = useState([]);

useEffect(() => {
  fetch("./FakeData.json")
  .then(res => res.json() )
  .then(data => setCourses(data))
}, [])


 return(
  <>
  

    <div className="Home-container w-4/5">
     <div className="card-container  grid grid-cols-3 gap-6"> 
        {
          courses.map(course => <Card key={course.id}  card={course} handleSelect={handleSelect}></Card> )
        }

      </div>
    </div>
 

  </>
 )
}
export default Home