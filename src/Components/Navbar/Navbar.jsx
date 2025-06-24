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
        <div className="flex justify-between items-center px-10 py-5">
            <div className="flex items-center cursor-pointer">
                <span className="text-2xl font-bold text-[#4593ec]">&lt;</span>
                <span className="text-2xl font-bold text-white">Gagan</span>
                <span className="text-2xl font-bold text-[#4593ec]">/</span>
                <span className="text-2xl font-bold text-[#4593ec]">&gt;</span>
            </div>

            <ul className="hidden md:flex space-x-8 text-gray-300">
                {menuItems.map((item) => {
                    return <li key={item.id} className={`cursor-pointer hover:text-[#4593ec] hover:font-bold font-semibold transition-all duration-300 ${active === item.id ? "text-[#4593ec]" : ""}`}>
                        <button onClick={() => handleClick(item.id)}>
                            {item.label}
                        </button>
                    </li>
                })}
            </ul>

            <div className="hidden md:flex space-x-4">
                <a href="https://github.com/gagan-1307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#4593ec] transition-all duration-300">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/gagandeep-singh-8b62762a7/?trk=opento_sprofile_topcard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#4593ec] transition-all duration-300">
                    <FaLinkedin size={24} />
                </a>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                {isOpen ? (
                    <GiCancel size={24} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[#4593ec] transition-all duration-300" />
                ) : (
                    <IoMdMenu size={24} onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-[#4593ec] transition-all duration-300" />
                )}
            </div>

            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {menuItems.map((item) => {
                            return <li key={item.id} className={`cursor-pointer hover:text-[#4593ec] hover:font-bold font-semibold transition-all duration-300 ${active === item.id ? "text-[#4593ec]" : ""}`}>
                                <button onClick={() => handleClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        })}

                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/gagan-1307"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gagandeep-singh-8b62762a7/?trk=opento_sprofile_topcard"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white"
                            >
                                <FaLinkedin size={24} />
                            </a>
                        </div>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar;