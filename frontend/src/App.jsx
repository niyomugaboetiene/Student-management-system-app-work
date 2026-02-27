import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InsertComponent from './pages/InsertComponent'
import SelectComponent from './pages/SelectComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateComponent from './pages/UpdateComponent'

function App() {

  return (
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<InsertComponent />}/>
          <Route path='/studentList' element={<SelectComponent />}/>
          <Route path='/update/:student_id' element={<UpdateComponent />}/>
         </Routes>
      </BrowserRouter>
  )
}

export default App
