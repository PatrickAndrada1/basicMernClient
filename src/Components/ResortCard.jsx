import React, { useState, useEffect } from 'react';
import Axios from 'axios';
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/'

function ResortCard(){
  const [dataResort, setDataResort] = useState([]);

  useEffect(() => {
    Axios.get('https://patbasicmernserver-git-main-patrickandrada1.vercel.app/')
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
