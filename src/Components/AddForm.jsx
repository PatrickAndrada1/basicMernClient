import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
let baseURL = 'https://patbasicmernserver-git-main-patrickandrada1.vercel.app/'


function AddForm() {

  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [price, setPrice] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSaveResort = ()=>{
    const data = {
      name,
      location,
      price
    }
    setLoading(true)
    axios.post(baseURL + 'addResort', data)
    .then(()=>{
     setLoading(false)
     navigate('/')
    })
    .catch((error)=>{
      setLoading(false)
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