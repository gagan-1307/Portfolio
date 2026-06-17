import React, { useState, useEffect } from "react";

const RIDDLES = [
  {
    id: 1,
    question: "I have keys but open no locks. I have space but no room. You can enter but can't go outside. What am I?",
    hint: "You are typing on me right now!",
    answers: ["keyboard", "a keyboard"]
  },
  {
    id: 2,
    question: "I am a language with no types, I make some devs cry, I power the entire web, and my name starts with 'Java' but I am not Java. Who am I?",
    hint: "Often abbreviated as JS.",
    answers: ["javascript", "js"]
  },
  {
    id: 3,
    question: "I am a Git command. I take changes from one branch and apply them directly on top of another, rewriting commit history. Who am I?",
    hint: "Starts with 'r', opposite of merge in workflow style.",
    answers: ["rebase", "git rebase"]
  }
];

const RiddleGame = () => {
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle, correct, incorrect
  const [showHint, setShowHint] = useState(false);
  const [solvedIds, setSolvedIds] = useState([]);

  useEffect(() => {
    // Load solved riddles from localStorage
    const saved = localStorage.getItem("gagan_portfolio_riddles_solved");
    const solved = saved ? JSON.parse(saved) : [];
    setSolvedIds(solved);

    // Pick a riddle based on day or pick one that isn't solved, or just pick the first one
    const unsolved = RIDDLES.filter(r => !solved.includes(r.id));
    if (unsolved.length > 0) {
      setCurrentRiddle(unsolved[0]);
    } else {
      // Loop back if all solved
      setCurrentRiddle(RIDDLES[0]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentRiddle) return;

    const sanitizedInput = userInput.trim().toLowerCase();
    const isCorrect = currentRiddle.answers.includes(sanitizedInput);

    if (isCorrect) {
      setStatus("correct");
      const updatedSolved = [...solvedIds, currentRiddle.id];
      setSolvedIds(updatedSolved);
      localStorage.setItem("gagan_portfolio_riddles_solved", JSON.stringify(updatedSolved));
    } else {
      setStatus("incorrect");
      // Reset incorrect state after animation finishes
      setTimeout(() => setStatus("idle"), 1000);
    }
  };

  const handleNext = () => {
    const currentIndex = RIDDLES.findIndex(r => r.id === currentRiddle.id);
    const nextIndex = (currentIndex + 1) % RIDDLES.length;
    setCurrentRiddle(RIDDLES[nextIndex]);
    setUserInput("");
    setStatus("idle");
    setShowHint(false);
  };

  if (!currentRiddle) return null;

  const isRiddleAlreadySolved = solvedIds.includes(currentRiddle.id);

  return (
    <section id="riddles-challenge" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">DAILY RIDDLE CHALLENGE</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-[#4593ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Test your wits with a mini daily riddle from Gagan's <a href="#projects" className="text-orange-400 hover:underline">RiddlesMaster</a> game!
        </p>
      </div>

      <div className={`max-w-2xl mx-auto bg-[#0b081e]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 ${
        status === "correct" || isRiddleAlreadySolved
          ? "border-green-500/40 shadow-green-500/10"
          : status === "incorrect"
          ? "border-red-500/40 animate-shake shadow-red-500/10"
          : "hover:border-orange-500/20"
      }`}>
        <div className="flex justify-between items-center mb-6">
          <span className="bg-[#251f38] text-xs font-semibold text-orange-400 rounded-full px-3 py-1">
            Puzzle #{currentRiddle.id}
          </span>
          <span className="text-sm text-gray-500">
            {isRiddleAlreadySolved ? "✅ Solved" : "⏳ Active"}
          </span>
        </div>

        <div className="mb-8">
          <p className="text-xl sm:text-2xl font-medium text-white leading-relaxed font-mono">
            "{currentRiddle.question}"
          </p>
        </div>

        {showHint && (
          <div className="mb-6 p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold animate-fade-in">
            💡 Hint: {currentRiddle.hint}
          </div>
        )}

        {status === "correct" || isRiddleAlreadySolved ? (
          <div className="text-center py-6 animate-scale-up">
            <h3 className="text-2xl font-bold text-green-400 mb-2">🎉 Brilliant! That is Correct!</h3>
            <p className="text-gray-400 mb-6">You've unlocked this riddle master achievement.</p>
            <button
              onClick={handleNext}
              className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Play Next Riddle
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Type your answer here..."
              required
              className="w-full p-4 rounded-xl bg-[#131025] text-white border border-gray-700 focus:outline-none focus:border-orange-500 transition-colors"
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setShowHint(!showHint)}
                className="w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-300 font-semibold py-3 px-4 rounded-xl transition duration-300 text-sm"
              >
                {showHint ? "Hide Hint" : "Get Hint"}
              </button>
              <button
                type="submit"
                className="w-2/3 bg-gradient-to-r from-orange-500 to-[#4593ec] hover:from-orange-600 hover:to-[#3b82d6] text-white font-bold py-3 px-4 rounded-xl shadow-lg transition duration-300 hover:scale-[1.02]"
              >
                Submit Answer
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default RiddleGame;
