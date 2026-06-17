import React, { useState, useRef, useEffect } from "react";
import { FaTerminal } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const COMMANDS = {
  help: "Available commands:\n  • about         - Learn about Gagan\n  • skills        - Check technical skills\n  • contact       - Get social profile links\n  • riddle        - Play a quick text riddle\n  • clear         - Clear the terminal screen\n  • exit          - Close the terminal",
  about: "Gagan | B.Tech IT student at NIT Kurukshetra\nFull Stack Developer & Competitive Programmer (900+ Leetcode/GFG solved).\nPassionate about AI/ML, MERN, Next.js, and building games like RiddlesMaster!",
  skills: "Technical Skills:\n  • Frontend: HTML, CSS, JavaScript, React JS, Next JS, Tailwind\n  • Backend: Node JS, Express JS, MySQL, MongoDB, PostgreSQL\n  • Languages: C, C++, Java, Python, JavaScript\n  • Tools/Libs: Docker, Supabase, Git/GitHub, PyTorch, TensorFlow",
  contact: "Contact Details:\n  • GitHub: https://github.com/gagan-1307\n  • LinkedIn: https://www.linkedin.com/in/gagandeep-singh-8b62762a7/"
};

const RIDDLES_TERM = [
  { q: "What has a head and a tail but no body?", a: "coin" },
  { q: "What key is hardest to turn but fits no keyhole?", a: "donkey" },
  { q: "The more of them you take, the more you leave behind. What are they?", a: "footsteps" }
];

const TerminalWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { text: "Welcome to Gagan-OS v1.0.0 Terminal! 🚀", type: "system" },
    { text: "Type 'help' to view the list of commands.", type: "system" },
    { text: "", type: "empty" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [activeRiddle, setActiveRiddle] = useState(null);

  const logsEndRef = useRef(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newHistory = [...history, { text: `gagan@portfolio:~$ ${cmd}`, type: "command" }];

    // If a riddle is active, check the answer first
    if (activeRiddle) {
      if (lower === activeRiddle.a) {
        newHistory.push({ text: `🎉 Correct! The answer was: ${activeRiddle.a}`, type: "system" });
        setActiveRiddle(null);
      } else if (lower === "cancel" || lower === "exit") {
        newHistory.push({ text: "Riddle game cancelled.", type: "system" });
        setActiveRiddle(null);
      } else {
        newHistory.push({ text: `❌ Incorrect. Try again! Or type 'cancel' to exit.`, type: "error" });
      }
      setHistory(newHistory);
      return;
    }

    if (lower === "help") {
      newHistory.push({ text: COMMANDS.help, type: "system" });
    } else if (lower === "about") {
      newHistory.push({ text: COMMANDS.about, type: "system" });
    } else if (lower === "skills") {
      newHistory.push({ text: COMMANDS.skills, type: "system" });
    } else if (lower === "contact") {
      newHistory.push({ text: COMMANDS.contact, type: "system" });
    } else if (lower === "clear") {
      setHistory([]);
      return;
    } else if (lower === "exit") {
      setIsOpen(false);
      return;
    } else if (lower === "riddle") {
      const randomRiddle = RIDDLES_TERM[Math.floor(Math.random() * RIDDLES_TERM.length)];
      setActiveRiddle(randomRiddle);
      newHistory.push({ text: `🧩 Riddle: ${randomRiddle.q}`, type: "system" });
      newHistory.push({ text: "Type your answer below...", type: "system" });
    } else {
      newHistory.push({ text: `gagan-os: command not found: '${trimmed}'. Type 'help' for details.`, type: "error" });
    }

    setHistory(newHistory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      {/* Terminal Toggle Badge Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full flex justify-center items-center shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(249,115,22,0.7)] transition-all duration-300 animate-bounce"
        >
          <FaTerminal size={22} />
        </button>
      )}

      {/* Terminal Interface */}
      {isOpen && (
        <div className="w-80 h-96 sm:w-96 rounded-2xl bg-[#050414]/90 border border-orange-500/30 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden animate-scale-up">
          {/* Header Bar */}
          <div className="bg-[#100e28] px-4 py-2.5 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
              <span className="text-xs text-gray-400 font-semibold pl-2">gagan@portfolio: ~</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-orange-400 transition-colors"
            >
              <IoMdClose size={18} />
            </button>
          </div>

          {/* Logs Terminal Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs sm:text-sm scrollbar-thin scrollbar-thumb-gray-800">
            {history.map((log, index) => {
              if (log.type === "empty") return <div key={index} className="h-1" />;
              
              let color = "text-orange-400";
              if (log.type === "command") color = "text-white";
              if (log.type === "error") color = "text-red-400";
              if (log.type === "system") color = "text-green-400";

              return (
                <div key={index} className={`whitespace-pre-wrap ${color}`}>
                  {log.text}
                </div>
              );
            })}
            <div ref={logsEndRef} />
          </div>

          {/* Prompt Entry Form */}
          <form onSubmit={handleSubmit} className="border-t border-white/5 bg-[#090818]/60 p-2 flex items-center">
            <span className="text-green-400 text-xs sm:text-sm pl-2 shrink-0">gagan@portfolio:~$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white text-xs sm:text-sm px-2 py-1 placeholder-orange-500/20"
              placeholder={activeRiddle ? "Answer here..." : "Type here..."}
              autoFocus
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default TerminalWidget;
