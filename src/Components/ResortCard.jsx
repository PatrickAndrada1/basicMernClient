import React, { useState, useEffect } from 'react';
import Axios from 'axios';
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/'

function ResortCard(){
  const [dataResort, setDataResort] = useState([]);

  useEffect(() => {
    Axios.get(baseURL + 'getResort')
      .then((res) => {
        setDataResort(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (

    <div className='p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Villas List</h1>

      </div>
      <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className='border border-slate-600 rounded-md'>No</th>
            <th className='border border-slate-600 rounded-md'>Name</th>
            <th className='border border-slate-600 rounded-md'>Location</th>
            <th className='border border-slate-600 rounded-md'>Price</th>
            {/* <th className='border border-slate-600 rounded-md max-md:hidden'>Details</th>
            <th className='border border-slate-600 rounded-md max-md:hidden'>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {dataResort.map((item, index)=>(
            <tr key={item._id} className='h-8'>
              <td className='border border-slate-700 rounded-md text-center'>
                {index + 1}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {item.name}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {item.location}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {item.price}
              </td>
              {/* <td className='border border-slate-700 rounded-md text-center'>
                {item.price}
              </td>
              <td className='border border-slate-700 rounded-md text-center'>
                {item.price}
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <div className='App'>
    //    {dataResort.map((item, index) => (
    //     <div key={item._id}>
    //       <p>{index + 1}</p>
    //       <p>{item.name}</p>
    //       <p>{item.location}</p>
    //       <p>{item.price}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ResortCard;
