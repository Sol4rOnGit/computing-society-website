//Imports
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Styles
import './global.css'

//Components

//Pages
import Landing from './pages/Landing';
import About from './pages/About';
import ProblemsLanding from './pages/ProblemsLanding';

function App() {

  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={ <Landing/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/problems" element={ <ProblemsLanding/> }/>

        {/* Problem pages */}
      </Routes>
    </Router>
  )
}

export default App
