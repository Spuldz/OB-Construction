import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import {Routes, Route} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Inserting } from './pages/Inserting'
import { Contact } from './pages/Contact'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/ieliksana' element={<Inserting/>}/>
      <Route path='/kontakti' element={<Contact/>}/>
    </Routes>
  )
}

export default App
