import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'  
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><Hero /><Projects /><Experience /><Education /><Contact /><Footer /></>} />
        {/* Redirect /Portfolio to / */}
        <Route path="/Portfolio" element={<Navigate replace to="/" />} />
        <Route path="*" element={<><Header /><Hero /><Projects /><Experience /><Education /><Contact /><Footer /></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
