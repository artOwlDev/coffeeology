import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './components/Home'
import Info from './components/Info'
import Menu from './components/Menu'
import Gallery from './components/Gallery'

function App() {

  return (
    <div className="app">
      <Home/>
      <Info/>
      <Menu/>
      <Gallery/>
    </div>

  )
}

export default App