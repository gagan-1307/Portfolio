import { useState, useEffect } from "react";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work/Work';
import Education from './Components/Education/Education';
import Experience from './Components/Experience/Experience';
import { Analytics } from "@vercel/analytics/react";
import Blur from './Components/Blur';
import { SpeedInsights } from "@vercel/speed-insights/react";
import ParticlesBackground from './Components/Effects/ParticlesBackground';
import RiddleGame from './Components/Riddle/RiddleGame';
import TerminalWidget from './Components/Terminal/TerminalWidget';
import CodingStats from './Components/Stats/CodingStats';
import './index.css';

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div className="bg-[#050414] min-h-screen relative overflow-hidden">
        {/* Constellation Canvas Backdrop */}
        <ParticlesBackground />

        {/* Dynamic Interactive Mouse Glow Background */}
        <div 
          className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
          style={{
            background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(69, 147, 236, 0.12), transparent 80%)`
          }}
        />

        <Blur position={{top:'35%',left:'20%'}} size={{width:'30%',height:'40%'}}/>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className='relative z-20 pt-20'>
          <Analytics />
          <SpeedInsights />
          <Navbar/>
          <About/>
          <Skills/>
          <Experience/>
          <CodingStats/>
          <Education/>
          <Work/>
          <RiddleGame />
          <Contact/>
          <Footer/>
        </div>

        {/* Floating Command Terminal Widget */}
        <TerminalWidget />
      </div>
    </>
  );
}

export default App;
