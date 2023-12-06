import React from 'react'
import Axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/deleteResort/'

const DeleteResort = () => {
    const navigate = useNavigate()
    const {id} = useParams()

    const handleDelete = ()=>{
        Axios.delete(`https://patbasicmernserver-git-main-patrickandrada1.vercel.app/deleteResort/${id}`)
        .then(()=>{
            navigate('/')
            alert('Villa has been deleted')
        })
        .catch((err)=>{
            alert('An unexpected error happened. Please do console.log')
            console.log(err);
        })
    }

  return (
    <div>
        <button onClick={handleDelete}>Delete Now</button>
    </div>
  )
}

export default DeleteResort