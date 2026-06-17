import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImg from '../../assets/profile2.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Typewriter } from 'react-simple-typewriter';


const About = () => {
    return (
        <section
            id="about"
            className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
        >
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <div className="inline-flex items-center space-x-2 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-full text-xs font-bold text-orange-400 mb-6">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
                        <span>Open to Opportunities</span>
                    </div>

                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-mono font-bold text-white mb-4 leading-tight">
                        Gagan
                    </h2>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="text-[#4593ec]">
                            <Typewriter
                                words={['Software Engineer', 'Competitive Programmer', 'Fullstack Developer', 'Backend Engineer']}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1500}
                            />
                        </span>
                    </h3>

                    <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
                        I’m a passionate Full Stack Developer with a knack for crafting responsive web and mobile applications. With experience in technologies like React, Node.js, Express, and MongoDB, I enjoy transforming ideas into functional, user-friendly digital products. I’ve built projects ranging from personal portfolios to full-fledged web apps, and I love tackling real-world challenges through code. I’m also a UI/UX enthusiast, aiming to deliver visually appealing and intuitive designs. Beyond coding, I’m active in hackathons and team collaborations that push my learning boundaries. I'm always eager to learn, build, and contribute to impactful tech solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a 
                            href="#contact"
                            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            Let's Connect 🚀
                        </a>
                        <a 
                            href="#projects"
                            className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-sm border border-white/10 hover:border-orange-500/40 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            View Projects
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <div className="relative group">
                        {/* Rotating Neon Aura Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-[#4593ec] to-pink-500 rounded-full blur-xl opacity-60 animate-spin [animation-duration:12s] group-hover:scale-105 group-hover:opacity-85 transition-all duration-500"></div>
                        
                        <Tilt
                            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[26rem] md:h-[26rem] bg-[#050414] rounded-full p-1 overflow-hidden shadow-inner border border-white/10"
                            tiltMaxAngleX={12}
                            tiltMaxAngleY={12}
                            perspective={1000}
                            scale={1.03}
                            transitionSpeed={1000}
                            gyroscope={true}
                        >
                            <img
                                src={profileImg}
                                alt="Gagandeep Singh"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;