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
            <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-mono font-bold text-white mb-2 leading-tight">
                        Hi, I am
                    </h1>
                    <h2 className="text-3xl sm:text-4xl md:text-6xl  font-mono font-bold text-white mb-4 leading-tight">
                        Gagan
                    </h2>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
                        <span className="text-white">I am a </span>
                        <span className="text-[#4593ec]">
                            <Typewriter
                                words={['Competitive Programmer', 'Fullstack Developer', 'Data Analyst', 'ML Expert']}
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

                </div>
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-[#4593ec] rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                        transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImg}
                            alt="Gagandeep Singh"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(69,147,236,0.5)]"
                        />
                    </Tilt>
                </div>
            </div>
        </section>
    );
};

export default About;