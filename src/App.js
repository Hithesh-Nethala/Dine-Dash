import React from 'react'
import LandingPage from './Components/Pages/LandingPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import IndvFirmPage from './Components/Pages/IndvFirmPage'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<LandingPage/>}/>
      <Route path='/firm/:id' exact element={<IndvFirmPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App