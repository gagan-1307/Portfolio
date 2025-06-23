import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import './index.css'

function App() {
  return (
    <>
      <div className="bg-[#050414]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div>
          <Navbar className='bg-[#051514] text-white'/>
          <About/>
          <Skills/>
          <Experience/>
          <Education/>
          <Work/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default App
