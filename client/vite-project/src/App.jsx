import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './Signin'
import Dashboard from './Dashboard'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/Signin' element={<Signin/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App