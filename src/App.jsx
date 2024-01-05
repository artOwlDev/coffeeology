import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Home from './components/Home'
import Info from './components/Info'
import Menu from './components/Menu'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import Aos from 'aos';
import 'aos/dist/aos.css';
import CoffeeAnimation from './components/CoffeeAnimation'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({
        duration: 2000,
        once: true,
        easing: "ease-in-out"
    })
}, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    },2000); 
    return () => clearTimeout(timer);
  },[])

  return (
    <div className="app">

      {isLoading ? (
          <CoffeeAnimation/>
        ) : (
          <>
              <div data-aos="fade-in">
                <Home/>
                <Info/>
                <Menu/>
                <Gallery/>
                <Footer/>
              </div>
          </>
      
      
      )}
    </div>

  )
}

export default App
