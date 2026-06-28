import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from "./component/header"
import Hero from "./component/hero"
import Trusted from "./component/trusted"
import Participate from "./component/participating-school"
import Choose from "./component/choose-school"
import PreSchedule from "./component/pre-schedule"
import Exhibition from "./component/exhibition"
import Footer from "./component/footer"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Trusted />
    <Participate />
    <Choose />
    <PreSchedule />
    <Exhibition />
    <Footer />
    </>
  )
}

export default App
