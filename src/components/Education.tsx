"use client";

import React from "react";

const Education = () => {
  return (
    <section className="px-8 md:px-20 max-w-7xl mx-auto space-y-8 py-12" id="education">
      <div className="text-center space-y-4 relative">
        <div className="orbital-glow"></div>
        <span className="text-primary uppercase tracking-[0.2em] text-[12px] font-semibold">My Journey</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Education & <span className="text-primary">Qualification</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          My academic background has shaped my logical thinking, problem-solving skills and analytical approach.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Academic Journey */}
        <div className="lg:col-span-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-10 space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
              <span className="material-symbols-outlined">school</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Academic Journey</h3>
              <p className="text-gray-500 text-sm">My education timeline</p>
            </div>
          </div>

          <div className="relative space-y-8 pl-0 md:pl-4">
            {/* Timeline Vertical Line */}
            <div className="absolute left-[17px] md:left-[25px] top-4 bottom-4 w-0.5 bg-primary/20 hidden md:block"></div>

            {/* B.Sc */}
            <div className="relative pl-0 md:pl-12">
              <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-primary bg-black z-10 hidden md:block"></div>
              <div className="absolute -left-32 top-0 text-right w-24 hidden md:block">
                <span className="text-primary font-bold">2026 –</span>
                <br />
                <span className="text-primary font-bold text-sm">Present</span>
              </div>
              <div className="bg-white/5 border border-primary/40 rounded-2xl p-4 md:p-6 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                <span className="text-primary font-bold text-sm md:hidden block mb-3">2026 – Present</span>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="p-2 bg-primary/20 rounded-lg text-primary flex-shrink-0">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <div className="space-y-1 w-full">
                    <h4 className="text-lg font-bold text-white leading-snug">B.Sc (Honours) in Mathematics</h4>
                    <p className="text-primary text-sm font-semibold">2nd Year Running</p>
                    <p className="text-gray-400 text-sm flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> Govt. City college
                    </p>
                    <p className="text-gray-500 text-sm pt-2 leading-relaxed">
                      Studying core mathematics including Calculus, Linear Algebra, Real Analysis and Differential
                      Equations. Building strong analytical and problem-solving skills.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Learning & Strengths */}
        <div className="lg:col-span-5 space-y-8">
          {/* What I'm Learning */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">star</span>
              </div>
              <h3 className="text-xl font-bold text-white">What I'm Learning</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Advanced Calculus
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Linear Algebra
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Abstract Algebra
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Real Analysis
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Differential Equations
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-base md:text-lg">
                <span className="material-symbols-outlined text-primary text-xl flex-shrink-0">check_circle</span> Numerical Methods
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Key Strengths (Full Width) */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-4 sm:p-6 md:p-8 space-y-8">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <span className="material-symbols-outlined text-2xl">target</span>
          </div>
          <h3 className="text-xl font-bold text-white">Key Strengths</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">psychology</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Logical Thinking</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Strong foundation in logical reasoning and problem solving.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gray-400/10 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">equalizer</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Analytical Skills</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Ability to analyze complex problems and find effective solutions.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">code_blocks</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Structured Approach</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Breaking down problems into smaller, manageable parts.</p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center gap-2 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gray-400/10 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform flex-shrink-0">
              <span className="material-symbols-outlined text-2xl">brain</span>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm mb-1">Continuous Learning</h4>
              <p className="text-gray-500 text-xs leading-relaxed max-w-xs">Always eager to learn new concepts and technologies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Quote */}
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10">
        <p className="text-gray-400 text-base md:text-lg flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 md:gap-4">
          <span className="material-symbols-outlined text-primary text-3xl sm:text-2xl flex-shrink-0">format_quote</span>
          <span>Mathematics teaches us to be precise with logic, and development teaches us to be creative with that logic.</span>
        </p>
      </div>
    </section>
  );
};

export default Education;
