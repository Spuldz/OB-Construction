import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import {Routes, Route, useLocation} from 'react-router-dom'
import { Landing } from './pages/Landing'
import { Inserting } from './pages/Inserting'
import { Contact } from './pages/Contact'
import { TitleModal } from './components/TitleModal'


function App() {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
  }), [pathname]
  

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/ieliksana' element={<Inserting/>}/>
      <Route path='/kontakti' element={<Contact/>}/>
      <Route path='/test' element={                <TitleModal
                 title={"Tavs sapņu pagalms vien dažu soļu attālumā"}
                 body='Ja jūs sapņojat par kādu konkrētu pagalma dizainu, vidi vai ainavu, mēs esam gatavi jūsu vīziju pārvērst par realitāti'
                 variant={{
                    interactive: true,
                    buttonText: "Saņemt bezmaksas konsutlāciju!"
                 }}/>}/>
    </Routes>
  )
}

export default App
