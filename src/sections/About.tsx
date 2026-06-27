import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const statsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation on scroll
      gsap.fromTo(
        textContainerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Stats Cards stagger fade-in setup
      gsap.fromTo(
        statsContainerRef.current?.children || [],
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsContainerRef.current,
            start: "top 85%",
          },
        }
      );

      // Picture entrance setup
      gsap.fromTo(
        imageWrapperRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#0b0f19] py-24 overflow-hidden border-t border-[#1e293b]" // Theme base matched
    >
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Content Column */}
        <div ref={textContainerRef} className="lg:col-span-7 flex flex-col justify-center">
          <span className="font-mono text-[13px] tracking-[3px] text-[#2dd4bf] uppercase font-semibold">
            Let me introduce myself
          </span>

          <h2 className="text-[36px] md:text-[46px] font-bold text-[#f8fafc] leading-[1.2] mt-3 tracking-[-1px]">
            Crafting Intelligent & <br />
            <span className="text-[#2dd4bf]">Digital Experiences</span>
          </h2>

          <div className="text-[15px] md:text-[16px] text-[#cbd5e1] leading-[1.8] mt-6 space-y-5 font-normal tracking-wide">
            <p>
              Hi! I'm <strong className="text-[#f8fafc] font-bold">Basma Hassan</strong>, a passionate Full Stack Developer and Mobile Developer with a love for building things that actually work — and work beautifully. 💻 I specialize in the MERN stack and React Native, crafting everything from dynamic web applications to smooth cross-platform mobile experiences that solve real-world problems.
            </p>
            <p>
              My core stack includes <span className="text-[#2dd4bf] font-semibold">MongoDB, Express.js, React, Node.js, Next.js, and React Native</span>, with strong proficiency in JavaScript and Python. I've backed my learning with 3 months of hands-on internship experience, where I got to apply these skills in a real professional environment.
            </p>
            <p className="bg-[#1e293b]/40 border border-[#334155] p-5 rounded-xl text-[#cbd5e1]">
              <span className="text-[#2dd4bf] font-semibold block mb-1 font-mono text-[14px] uppercase tracking-wider">💡 What excites me most right now?</span>
              <strong className="text-[#f8fafc]">Agentic AI</strong> — I'm actively diving into the world of AI agents and intelligent systems, always looking to stay ahead of what's next in tech. I believe the future belongs to developers who understand both the full stack and the intelligence layer on top of it.
            </p>
            <p>
              I thrive on building end-to-end products — from backend APIs and databases to polished frontend UIs and mobile apps. Whether it's a scalable web platform or a cross-platform mobile solution, I bring both technical depth and a problem-solving mindset to the table.
            </p>
          </div>

          {/* 📊 STATS GRID CARDS SECTION - Modernized styling */}
          <div 
            ref={statsContainerRef} 
            className="grid grid-cols-2 gap-4 mt-10 max-w-[540px]"
          >
            <div className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-5 text-center transition-all duration-300 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 group">
              <div className="text-[32px] font-bold text-[#2dd4bf] tracking-tight group-hover:scale-105 transition-transform duration-200">
                4
              </div>
              <div className="text-[#94a3b8] text-[13px] mt-1 font-mono font-medium tracking-wide uppercase transition-colors duration-300">
                Projects Built
              </div>
            </div>

            <div className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-5 text-center transition-all duration-300 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 group">
              <div className="text-[32px] font-bold text-[#2dd4bf] tracking-tight group-hover:scale-105 transition-transform duration-200">
                3mo
              </div>
              <div className="text-[#94a3b8] text-[13px] mt-1 font-mono font-medium tracking-wide uppercase transition-colors duration-300">
                Internship XP
              </div>
            </div>

            <div className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-5 text-center transition-all duration-300 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 group">
              <div className="text-[32px] font-bold text-[#2dd4bf] tracking-tight group-hover:scale-105 transition-transform duration-200">
                9+
              </div>
              <div className="text-[#94a3b8] text-[13px] mt-1 font-mono font-medium tracking-wide uppercase transition-colors duration-300">
                Technologies
              </div>
            </div>

            <div className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-5 text-center transition-all duration-300 hover:border-[#2dd4bf]/40 hover:shadow-xl hover:shadow-[#2dd4bf]/5 group">
              <div className="text-[32px] font-bold text-[#2dd4bf] tracking-tight group-hover:scale-105 transition-transform duration-200">
                2
              </div>
              <div className="text-[#94a3b8] text-[13px] mt-1 font-mono font-medium tracking-wide uppercase transition-colors duration-300">
                Platforms
              </div>
            </div>
          </div>

          <div className="text-[#64748b] italic mt-8 text-[14px]">
            Outside of coding, I love exploring the latest in AI and tech, collaborating with fellow developers 🤝, and turning ambitious ideas into real, working products.
          </div>
        </div>

        {/* Right Column - Transparent Profile Picture Layout with Background Glow */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end lg:sticky lg:top-24 mt-8 lg:mt-0">
          <div
            ref={imageWrapperRef}
            className="relative w-[300px] h-[380px] sm:w-[340px] sm:h-[420px] rounded-2xl border border-[#334155]/60 p-3 transition-all duration-500 hover:border-[#2dd4bf]/50 group overflow-hidden bg-[#0f172a]"
          >
            {/* Soft Ambient Vector Blur Behind transparent pic */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2dd4bf]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
           <img
  src="/my-pic.png"
  alt="Basma Hassan"
  className="w-full h-full object-cover object-top scale-110 opacity-90 group-hover:opacity-100 group-hover:scale-[1.13] transition-all duration-700 filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
/>
          </div>
        </div>

      </div>
    </section>
  );
}
