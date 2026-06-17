import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { IoMdMenu } from "react-icons/io";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = (id) => {
        setActive(id);
        setIsOpen(false);

        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "education", label: "Education" },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#050414]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20" : "bg-transparent"}`}>
            <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-7xl mx-auto">
                <div className="flex items-center cursor-pointer group">
                    <span className="text-2xl font-bold text-[#4593ec] transition-colors duration-300 group-hover:text-orange-500">&lt;</span>
                    <span className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-orange-400 group-hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]">Gagan</span>
                    <span className="text-2xl font-bold text-[#4593ec] transition-colors duration-300 group-hover:text-orange-500">/</span>
                    <span className="text-2xl font-bold text-[#4593ec] transition-colors duration-300 group-hover:text-orange-500">&gt;</span>
                </div>

                <ul className="hidden md:flex space-x-6 text-gray-300">
                    {menuItems.map((item) => {
                        const isActive = active === item.id;
                        return (
                            <li key={item.id} className="relative group">
                                <button 
                                    onClick={() => handleClick(item.id)}
                                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 relative z-10 ${
                                        isActive 
                                            ? "text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.6)]" 
                                            : "text-gray-300 hover:text-orange-400"
                                    }`}
                                >
                                    {/* The Orange Explosion Backdrop Glow */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-md opacity-0 scale-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500 ease-out -z-10"></span>
                                    {/* Expanding Orange Outline */}
                                    <span className="absolute inset-0 border border-orange-500/0 rounded-xl group-hover:border-orange-500/30 group-hover:scale-105 transition-all duration-300 -z-10"></span>
                                    
                                    {item.label}
                                </button>
                            </li>
                        );
                    })}
                </ul>

                <div className="hidden md:flex space-x-4">
                    <a href="https://github.com/gagan-1307"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.linkedin.com/in/gagandeep-singh-8b62762a7/?trk=opento_sprofile_topcard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-400 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(249,115,22,0.6)] transition-all duration-300">
                        <FaLinkedin size={24} />
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    {isOpen ? (
                        <GiCancel size={24} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-orange-400 transition-all duration-300" />
                    ) : (
                        <IoMdMenu size={24} onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-orange-400 transition-all duration-300" />
                    )}
                </div>

                {isOpen && (
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-[#050414]/90 backdrop-blur-xl z-50 rounded-2xl border border-white/10 shadow-2xl md:hidden">
                        <ul className="flex flex-col items-center space-y-4 py-6 text-gray-300">
                            {menuItems.map((item) => {
                                const isActive = active === item.id;
                                return (
                                    <li key={item.id} className="relative group w-full text-center">
                                        <button 
                                            onClick={() => handleClick(item.id)}
                                            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 w-[80%] mx-auto ${
                                                isActive ? "text-orange-400" : "text-gray-300 hover:text-orange-400"
                                            }`}
                                        >
                                            {item.label}
                                        </button>
                                    </li>
                                );
                            })}

                            <div className="flex space-x-4 pt-2">
                                <a
                                    href="https://github.com/gagan-1307"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-orange-400"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/gagandeep-singh-8b62762a7/?trk=opento_sprofile_topcard"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-orange-400"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;