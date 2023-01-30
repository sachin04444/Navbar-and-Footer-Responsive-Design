import React from 'react'
import Naav from './components/Naav'
import { BrowserRouter  } from 'react-router-dom'

import Nfooter from './components/Nfooter'
// import Footer from './components/Footer'
// import Home from './components/Home'
// import NavBar from './components/Naav'
// import "./components/nav.css"
// import Services from './components/Services'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Naav/>
      <Nfooter/>
      </BrowserRouter>
    </div>
  )
}

export default App
