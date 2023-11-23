import './App.css'
import HeroSection from './components/HeroSection'
import NavBar from './components/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'
import AnimateRouter from './components/AnimateRouter'

function App() {
  return (
      <Router>
        <NavBar />
        <AnimateRouter /> 
      </Router>
  )
}

export default App;
