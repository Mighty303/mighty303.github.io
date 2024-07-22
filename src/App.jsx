import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stars from './components/Stars';
import './App.css';

const App = () => {
  return (
    <div id='site' className='relative'>
        <Stars />
        <Header />
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
    </div>
  );
};

export default App;
