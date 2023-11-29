import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Resort from './Views/Resort'
import AddForm from './Components/AddForm'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Resort/>} />
      <Route path='/addResort' element={<AddForm/>} />
    </Routes>
  )
}

export default App