import React, { useState, useEffect } from "react";
import { FaFire, FaCode, FaAward } from "react-icons/fa";

// Helper to generate contributions for the last 52 weeks (364 days)
const generateMockHeatmapData = () => {
  const data = [];
  const today = new Date();
  const dayOfWeek = today.getDay();

  // Create 364 days of contributions
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    // Simulate typical dev commit pattern: more on weekdays, fewer on weekends
    const day = date.getDay();
    let probability = 0.6; // weekday commit probability
    if (day === 0 || day === 6) probability = 0.2; // weekend

    const count = Math.random() < probability ? Math.floor(Math.random() * 5) : 0;
    data.push({
      date: date.toISOString().split("T")[0],
      count,
    });
  }
  return data;
};

const CodingStats = () => {
  const [activeTab, setActiveTab] = useState("leetcode"); // 'leetcode' or 'heatmap'
  const [heatmapData, setHeatmapData] = useState([]);
  const [hoveredCell, setHoveredCell] = useState(null);

  useEffect(() => {
    setHeatmapData(generateMockHeatmapData());
  }, []);

  // LeetCode Stats Data
  const stats = {
    total: 722,
    easySolved: 232,
    easyTotal: 950,
    mediumSolved: 404,
    mediumTotal: 2069,
    hardSolved: 86,
    hardTotal: 943,
    rank: "83,219",
    rating: 1846,
    badge: "Knight",
    streak: 58
  };

  const getHeatmapColorClass = (count) => {
    if (count === 0) return "bg-gray-800/60";
    if (count === 1) return "bg-green-900/80";
    if (count === 2) return "bg-green-700/80";
    if (count === 3) return "bg-green-500/80";
    return "bg-green-300";
  };

  // SVGs for Leetcode Progress Rings
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const getStrokeDashoffset = (solved, total) => {
    const percentage = solved / total;
    return circumference - percentage * circumference;
  };

  return (
    <section id="coding-stats" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CODING METRICS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-[#4593ec] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Real-time snapshot of my problem solving metrics and contribution profiles
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-[#0b081e]/75 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl transition-all duration-300 hover:border-orange-500/20">
        {/* Toggle Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#131025] p-1.5 rounded-2xl border border-white/5 flex space-x-2">
            <button
              onClick={() => setActiveTab("leetcode")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "leetcode"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/10"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              LeetCode Stats
            </button>
            <button
              onClick={() => setActiveTab("heatmap")}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${activeTab === "heatmap"
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/10"
                  : "text-gray-400 hover:text-white"
                }`}
            >
              Submission Heatmap
            </button>
          </div>
        </div>

        {/* LeetCode View */}
        {activeTab === "leetcode" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center animate-fade-in">
            {/* Global circular progress */}
            <div className="flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r="52"
                    className="stroke-gray-800"
                    strokeWidth="8"
                    fill="transparent"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="52"
                    className="stroke-orange-500 transition-all duration-500"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 - (stats.total / (stats.easyTotal + stats.mediumTotal + stats.hardTotal)) * (2 * Math.PI * 52)}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-extrabold text-white">{stats.total}</span>
                  <span className="text-xs text-gray-500 font-semibold tracking-wider">SOLVED</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mt-4 text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                <FaFire />
                <span>Streak: {stats.streak} Days</span>
              </div>
            </div>

            {/* Difficulties grid */}
            <div className="space-y-5 md:col-span-2">
              <div className="grid grid-cols-3 gap-4">
                {/* Easy */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-xs font-semibold text-green-400 mb-2">EASY</span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="26" className="stroke-gray-800" strokeWidth="4" fill="transparent" />
                      <circle cx="32" cy="32" r="26" className="stroke-green-400" strokeWidth="4" fill="transparent"
                        strokeDasharray={2 * Math.PI * 26}
                        strokeDashoffset={getStrokeDashoffset(stats.easySolved, stats.easyTotal)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-white">{stats.easySolved}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2 font-medium">of {stats.easyTotal}</span>
                </div>

                {/* Medium */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-xs font-semibold text-yellow-400 mb-2">MEDIUM</span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="26" className="stroke-gray-800" strokeWidth="4" fill="transparent" />
                      <circle cx="32" cy="32" r="26" className="stroke-yellow-400" strokeWidth="4" fill="transparent"
                        strokeDasharray={2 * Math.PI * 26}
                        strokeDashoffset={getStrokeDashoffset(stats.mediumSolved, stats.mediumTotal)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-white">{stats.mediumSolved}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2 font-medium">of {stats.mediumTotal}</span>
                </div>

                {/* Hard */}
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                  <span className="text-xs font-semibold text-red-500 mb-2">HARD</span>
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="32" cy="32" r="26" className="stroke-gray-800" strokeWidth="4" fill="transparent" />
                      <circle cx="32" cy="32" r="26" className="stroke-red-500" strokeWidth="4" fill="transparent"
                        strokeDasharray={2 * Math.PI * 26}
                        strokeDashoffset={getStrokeDashoffset(stats.hardSolved, stats.hardTotal)}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute text-xs font-bold text-white">{stats.hardSolved}</span>
                  </div>
                  <span className="text-[10px] text-gray-500 mt-2 font-medium">of {stats.hardTotal}</span>
                </div>
              </div>

              {/* Contest / Rankings info */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center space-x-3 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="p-3 bg-orange-500/10 text-orange-400 rounded-xl shrink-0">
                    <FaAward size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Contest Rating</h4>
                    <p className="text-lg font-bold text-white">{stats.rating} ({stats.badge})</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="p-3 bg-[#4593ec]/10 text-[#4593ec] rounded-xl shrink-0">
                    <FaCode size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-gray-500 font-semibold tracking-wider uppercase">Global Ranking</h4>
                    <p className="text-lg font-bold text-white">#{stats.rank}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Heatmap View */}
        {activeTab === "heatmap" && (
          <div className="animate-fade-in overflow-x-auto">
            <h3 className="text-lg font-semibold text-gray-300 mb-6 text-center">
              1,591 Submissions in the Past One Year
            </h3>

            {/* Grid heatmap */}
            <div className="flex flex-col space-y-2 select-none min-w-[700px]">
              <div className="flex flex-wrap gap-[3px]">
                {heatmapData.map((day, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCell(day)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`w-[11px] h-[11px] rounded-[2px] transition-colors duration-200 cursor-pointer ${getHeatmapColorClass(
                      day.count
                    )}`}
                  />
                ))}
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 pt-3 px-1">
                <span>Older (365 days ago)</span>
                {/* Legend */}
                <div className="flex items-center space-x-2">
                  <span>Less</span>
                  <div className="w-[11px] h-[11px] rounded-[2px] bg-gray-800/60" />
                  <div className="w-[11px] h-[11px] rounded-[2px] bg-green-900/80" />
                  <div className="w-[11px] h-[11px] rounded-[2px] bg-green-700/80" />
                  <div className="w-[11px] h-[11px] rounded-[2px] bg-green-500/80" />
                  <div className="w-[11px] h-[11px] rounded-[2px] bg-green-300" />
                  <span>More</span>
                </div>
                <span>Today</span>
              </div>
            </div>

            {/* Dynamic Interactive Tooltip */}
            <div className="h-8 mt-4 text-center">
              {hoveredCell ? (
                <span className="text-sm text-green-400 font-semibold bg-green-500/10 border border-green-500/20 px-4 py-1.5 rounded-full animate-fade-in">
                  🔥 {hoveredCell.count} submissions on {new Date(hoveredCell.date).toLocaleDateString(undefined, {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              ) : (
                <span className="text-xs text-gray-500">
                  Hover over the contribution tiles to inspect submissions details
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CodingStats;
