// import { useState } from 'react'

import './App.css'
import Header from './components/header'
import Home from './pages/home/home'
import Signup from './pages/signup/signup'

function App() {
  // const [count, setCount] = useState(0)
  let component
  switch(window.location.pathname){
    case "/home":
      component = <Home/>
      break
    case "/cadastro":
      component = <Signup/>
      break
  }
  return (
    <>
      <Header/>
      {component}
    </>
  )
}

export default App
