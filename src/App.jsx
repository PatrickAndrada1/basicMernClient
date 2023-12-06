import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Resort from './Views/Resort'
import AddForm from './Components/AddForm'
import DetailResort from './Views/DetailResort'
import DeleteResort from './Views/DeleteResort'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Resort/>} />
      <Route path='/addResort' element={<AddForm/>} />
      <Route path='/details/:id' element={<DetailResort/>} />
      <Route path='/delete/:id' element={<DeleteResort/>} />
    </Routes>
  )
}

export default App