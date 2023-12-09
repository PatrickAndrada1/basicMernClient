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
    <div className='gap-y-1.5' style={ForContainer}>
    {/* <p>Add Form</p>
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
    
    </div> */}

<label style={ForLabel} htmlFor="name">Name</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={ForInput} placeholder='Hotel Name' type="text" id="name" value={name} onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <label style={ForLabel} htmlFor="location">Location</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={ForInput} placeholder='Location' type="text" id="location" value={location} onChange={(e)=>{
          setLocation(e.target.value)
        }}/>
        <label style={ForLabel} htmlFor="price">Price</label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style={ForInput} placeholder='Rp.' min="0" type="number" onkeydown="return false" onwheel="return false" id="price"value={price} onChange={(e)=>{
          setPrice(e.target.value)
        }}/>
        <button onClick={handleSaveResort}>Add</button>

    </div>
  )
}

const ForContainer = {width: "200px", height: "350px", margin: "auto", marginTop: "5%", borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px"}
const ForLabel = {color: "gray"}
const ForInput = {borderRadius: "3px"}


export default AddForm