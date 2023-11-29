import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ResortCard(){
  const [dataResort, setDataResort] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3000/getResort')
      .then((res) => {
        setDataResort(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='App'>
      {dataResort.map((item, index) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.location}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ResortCard;
