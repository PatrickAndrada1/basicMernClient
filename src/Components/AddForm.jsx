import React, {useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/'


function AddForm() {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const navigate = useNavigate()
  
  const handleSaveResort = ()=>{
    const data = {
      name,
      location,
      price
    }
    Axios.post(baseURL + 'addResort', data)
    .then(()=>{
     navigate('/')
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  return (
    <>
    <p>Add Form</p>
    <div>
    
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={location} onChange={(e)=>{
          setLocation(e.target.value)
        }}/>
        <label htmlFor="price">Price</label>
        <input type="text" id="price"value={price} onChange={(e)=>{
          setPrice(e.target.value)
        }}/>
        <button onClick={handleSaveResort}>Add</button>
    
    </div>
    </>
  )
}

export default AddForm