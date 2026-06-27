import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Humne main skills array mein Python aur Agentic AI ko behtreen sub-labels ke sath shamil kar diya hai
const skills = [
  { name: "React JS", icon: "⚛️", level: "Frontend" },
  { name: "React Native", icon: "📱", level: "Mobile" },
  { name: "JavaScript", icon: "🟨", level: "Core Language" },
  { name: "TypeScript", icon: "🔷", level: "Typed JS" },
  { name: "Python", icon: "🐍", level: "AI & Scripting" }, // Naya Added
  { name: "Agentic AI", icon: "🤖", level: "AI Agents (Learning)" }, // Naya Added
  { name: "HTML / CSS", icon: "🎨", level: "Markup & Style" },
  { name: "Node.js", icon: "🌿", level: "Backend" },
  { name: "Express.js", icon: "🚂", level: "Backend" },
  { name: "MongoDB", icon: "🍃", level: "Database" },
  { name: "Firebase", icon: "🔥", level: "BaaS" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const toolsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Skills Grid Cards stagger effect
      gsap.fromTo(
        cardsContainerRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsContainerRef.current,
            start: "top 80%",
          },
        }
      );

      // Tools footer entrance effect
      gsap.fromTo(
        toolsContainerRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: toolsContainerRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="skills" 
      ref={sectionRef} 
      className="py-24 px-6 bg-[#080808] relative border-t border-[#121212]"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header Labels */}
        <p className="text-[#2dd4bf] font-mono text-[13px] tracking-[3px] uppercase mb-2">
          What I know
        </p>
        <h2 className="font-bold text-4xl tracking-tight text-[#f5f5f5] mb-2">
          My <span className="text-[#2dd4bf]">Skills</span>
        </h2>
        <div className="w-10 h-0.5 bg-[#2dd4bf] rounded mb-12" />

        {/* Skills Cards Grid Wrapper */}
        <div 
          ref={cardsContainerRef} 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-[#121212]/40 border border-[#232323] rounded-xl p-5 text-center opacity-0 transition-all duration-300 hover:border-[#2dd4bf]/40 hover:bg-[#121212] group cursor-default shadow-lg hover:shadow-[#2dd4bf]/5"
            >
              {/* Icon Animation layout wrapper */}
              <div className="text-3xl mb-3 transform transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1 inline-block">
                {skill.icon}
              </div>
              <div className="font-medium text-sm text-[#f5f5f5] mb-1">
                {skill.name}
              </div>
              <div className="text-[#737373] text-xs font-mono group-hover:text-[#a3a3a3] transition-colors duration-300">
                {skill.level}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Familiar Tools Framework Wrapper */}
        <div 
          ref={toolsContainerRef} 
          className="mt-12 p-6 bg-[#0d0d0d]/80 border border-[#1a1a1a] rounded-2xl opacity-0"
        >
          <p className="text-[#737373] font-mono text-xs uppercase tracking-widest mb-4">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Git & GitHub",
              "REST APIs",
              "Expo",
              "Tailwind CSS",
              "Redux",
              "Context API",
              "Axios",
              "Postman",
              "VS Code",
            ].map((tool) => (
              <span
                key={tool}
                className="bg-[#121212] border border-[#232323] text-[#a3a3a3] text-xs px-3.5 py-1.5 rounded-full hover:border-[#2dd4bf]/40 hover:text-[#2dd4bf] transition-all duration-300 cursor-default font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
