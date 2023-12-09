import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom'
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
            <th className='border border-slate-600 rounded-md max-md:hidden'>More</th>
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
              <td className=' border-slate-700 flex flex-row gap-x-3 rounded-md text-center'>
                <Link to={`/details/${item._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle text-center" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
                </Link>

                <Link to={`/delete/${item._id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash te" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>
                </Link>
              </td>
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
