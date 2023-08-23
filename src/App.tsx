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
import { YardSettling } from './pages/YardSettling'
import { WoodenFurniture } from './pages/WoodenFurniture'
import {routes} from './data/routes'


function App() {

  const {pathname} = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(routes)
  }), [pathname]
  

  return (
    <Routes>
      {(
        routes.map((data, i) => (
          <Route path={data.route} element={<data.component/>} key={i}/>
        ))
      )}
    </Routes>
  )
}

export default App
