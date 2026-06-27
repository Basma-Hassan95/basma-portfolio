import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    type: "Mobile Application",
    emoji: "🍴",
    title: "FoodieHub — Restaurant Mobile App",
    desc: "A full-stack restaurant mobile application built with React Native & Expo Go. Features JWT authentication, category-based food browsing (Fast Food, Pizza, Chinese, Desi Food), cart management, secure payment processing, and order history tracking. Backend powered by Node.js, Express & MongoDB Atlas, deployed on Railway.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "https://github.com/Basma-Hassan95/foodieHub-frontend",
    driveLink: "https://drive.google.com/file/d/1B-6I2JMco2MGojx0SOq_rqLbj1KpLHaA/view?usp=sharing",
    liveLink: null,
    thumbnail: "/foodiehub-collage.png",
  },
    {
    id: 2,
    type: "Mobile Application",
    emoji: "🛍️",
    title: "ShopEase — E-Commerce Mobile App",
    desc: "A production-ready e-commerce mobile application built with React Native (Expo) and Node.js, styled with NativeWind (Tailwind CSS). Implements JWT-based authentication, Context API for state management, multi-step checkout flow, and a fully deployed backend on Railway with MongoDB Atlas — featuring real-time cart sync and order history tracking.",
    tech: ["React Native", "Expo", "Node.js", "MongoDB"],
    github: "https://github.com/Basma-Hassan95/EcommerceApp.git",
    driveLink: "https://drive.google.com/file/d/1UsA1alGvvWuKNaRRwK3MkrVfqAFcxhdv/view?usp=sharing", 
    liveLink: null,
    thumbnail: "shopease.png", // Apne computer ke public folder ke mutabiq image ka naam set karein
  },
    {
    id: 3,
    type: "Web Application",
    emoji: "🏋️",
    title: "FitnessZone — MERN Gym Management Platform",
    desc: "A full-stack gym management website built with the MERN stack. Features JWT-based role authentication, admin dashboard for managing members and inquiries, class enrollment, pricing plans, team showcase, and a contact system. Originally a static template — fully rebuilt into a production-grade React + Node.js application.",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/Basma-Hassan95/fitness-zone-frontend",
    driveLink: null,
    liveLink: "https://fitness-zone-frontend.vercel.app",
    thumbnail: "/Home.png",
  },
  {
  id: 4,
  type: "Web Application",
  emoji: "🍴",
  title: "FoodieHub — MERN Food Ordering Platform",
  desc: "A full-stack food ordering web application built with the MERN stack. Features JWT-based authentication, real-time food browsing with category filters and live search, food detail page with add-ons and quantity selector, cart management, secure card payment processing, order history tracking, and user profile. Includes a reusable modal system for success/error feedback throughout the app. Deployed on Vercel with backend hosted on Railway and MongoDB Atlas. Also available as a React Native mobile app.",
  tech: ["React JS", "Node.js", "Express.js", "MongoDB", "TailwindCSS"],
  github: "https://github.com/Basma-Hassan95/foodieHub-webApp",
  driveLink: null,
  liveLink: "https://foodie-hub-web-app-six.vercel.app/",
  thumbnail: "/foodie-Home.png",
},
];

const filters = ["All", "Web Application", "Mobile Application"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [videoModal, setVideoModal] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVideoModal(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 bg-[#0b0f19] relative border-t border-[#1e293b]"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Section Header */}
        <p className="text-[#2dd4bf] font-mono text-[13px] tracking-[3px] uppercase mb-2">
          What I've built
        </p>
        <h2 className="font-bold text-4xl tracking-tight text-[#f8fafc] mb-2">
          Featured <span className="text-[#2dd4bf]">Projects</span>
        </h2>
        <div className="w-10 h-0.5 bg-[#2dd4bf] rounded mb-10" />

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide uppercase font-mono transition-all duration-300 border ${
                active === f
                  ? "bg-[#2dd4bf] text-[#0f172a] border-[#2dd4bf] shadow-lg shadow-[#2dd4bf]/20 scale-[1.02]"
                  : "bg-[#1e293b]/60 border-[#334155] text-[#94a3b8] hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              className="bg-[#1e293b]/80 border border-[#334155] rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#2dd4bf]/50 hover:bg-[#1e293b] hover:shadow-2xl hover:shadow-[#2dd4bf]/10 group flex flex-col justify-between"
            >
              <div>
                {/* Card Thumbnail */}
                {project.thumbnail ? (
                  <button
                    onClick={() => {
                      if (project.liveLink) window.open(project.liveLink, "_blank");
                      else if (project.driveLink) window.open(project.driveLink, "_blank");
                    }}
                    className="w-full h-52 bg-[#0f172a] border-b border-[#334155] flex items-center justify-center relative overflow-hidden cursor-pointer"
                    aria-label={`Open ${project.title}`}
                  >
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-[1.02] transition-all duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent" />

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[10px] px-2.5 py-1 rounded-md border bg-[#0f172a] border-[#2dd4bf]/40 text-[#2dd4bf] font-semibold font-mono uppercase tracking-wider shadow-sm">
                        {project.type}
                      </span>
                    </div>
                  </button>
                ) : (
                  <div className="h-52 bg-gradient-to-b from-[#1e293b] to-[#0f172a] border-b border-[#334155] flex items-center justify-center text-5xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#2dd4bf]/[0.02] group-hover:bg-[#2dd4bf]/[0.06] transition-colors duration-500" />
                    <span className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2 inline-block z-10 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                      {/* Emoji display if no thumbnail */}
                    </span>
                    <div className="absolute top-4 right-4 z-10">
                      <span className="text-[10px] px-2.5 py-1 rounded-md border bg-[#0f172a] border-[#2dd4bf]/40 text-[#2dd4bf] font-semibold font-mono uppercase tracking-wider shadow-sm">
                        {project.type}
                      </span>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 pb-2">
                  <h3 className="font-bold text-xl text-[#f8fafc] mb-2.5 group-hover:text-[#2dd4bf] transition-colors duration-300 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[#cbd5e1] text-[14px] leading-relaxed mb-4 font-normal min-h-[84px]">
                    {project.desc}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-[#0f172a] text-[#e2e8f0] border border-[#334155] group-hover:border-[#2dd4bf]/30 transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="p-6 pt-0 mt-auto flex items-center gap-4 border-t border-[#334155]/20 pt-4">
                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wide uppercase px-4 py-2 rounded-md bg-[#0f172a] text-[#cbd5e1] border border-[#334155] hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-300"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                
                {(project.liveLink || project.driveLink) && (
                  <a
                    href={project.liveLink || project.driveLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wide uppercase px-4 py-2 rounded-md bg-[#2dd4bf] text-[#0f172a] border border-[#2dd4bf] hover:bg-transparent hover:text-[#2dd4bf] transition-all duration-300 shadow-md shadow-[#2dd4bf]/10"
                  >
                    <svg className="w-4 h-4 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    {project.liveLink ? "Live Demo" : "Watch Demo"}
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}