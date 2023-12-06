import React, { useEffect, useState } from 'react'
import Axios  from 'axios'
import { useParams } from 'react-router-dom'
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/getResort/'

const DetailResort = () => {
    const [detail, setDetail] = useState({})
    const {id} = useParams()
    
    useEffect(() => {
        Axios.get(baseURL + id)
        .then((res)=>{
            setDetail(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])
  return (
    <div className='p-4'>
        <div className='flex flex-col border-2 border-sky-4000 rounded-xl w-fit p-4'>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Id</span>
                <span>{detail._id}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Name</span>
                <span>{detail.name}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Location</span>
                <span>{detail.location}</span>
            </div>
            <div className='my-4'>
                <span className='text-xl mr-4 text-gray-500'>Price</span>
                <span>{detail.price}</span>
            </div>
        </div>
    </div>
  )
}

export default DetailResort