import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {


  return (
    <>
  <div className="app">
  <Header/>
  <Sidebar/>
     
      {/* Your main content goes here */}
    </div>
    </>
  )
}

export default App
