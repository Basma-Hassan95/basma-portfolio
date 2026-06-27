import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Github, Linkedin, Twitter } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import ParticleWave from "./ParticleWave";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    })
      .to(
        nameRef.current,
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.35"
      )
      .to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.5"
      )
      .to(
        descRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.45"
      )
      .to(
        buttonsRef.current,
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      )
      .to(
        socialsRef.current,
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.35"
      )
      .to(
        scrollIndicatorRef.current,
        { opacity: 1, duration: 0.5, ease: "power3.out" },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center bg-[#0b0f19] overflow-hidden" // Updated dark theme matching project panels
    >
      <ParticleWave />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="max-w-[640px]"> {/* Slightly wider constraint for rich summary display */}
          <span
            ref={labelRef}
            className="font-mono text-[14px] text-[#2dd4bf] opacity-0 translate-y-5 block tracking-[2px] uppercase"
          >
            Hello, I'm
          </span>

          <h1
            ref={nameRef}
            className="text-[56px] md:text-[72px] font-bold text-[#f8fafc] leading-[1.1] tracking-[-2px] mt-2 opacity-0 translate-y-8"
          >
           Basma Hassan
          </h1>

          {/* Dynamic Looping Typewriter Text */}
          <h2
            ref={subtitleRef}
            className="text-[20px] md:text-[24px] font-medium text-[#94a3b8] mt-3 h-[32px] opacity-0 translate-y-5"
          >
            I am a{" "}
            <span className="text-[#2dd4bf] font-bold">
              <Typewriter
            words={[
  "AI-Enabled Full Stack Developer",
  "AI-Enabled React JS Developer",
  "AI-Enabled React Native Developer",
  "Tech Enthusiast",
  "Quick Learner",
]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          <p
            ref={descRef}
            className="text-[15px] md:text-[16px] text-[#cbd5e1] leading-[1.75] mt-6 font-normal opacity-0 translate-y-5"
          >
            Full-stack developer with hands-on experience building{" "}
            <span className="text-[#2dd4bf] font-semibold">MERN web and mobile applications</span>, trained at{" "}
            <span className="text-[#2dd4bf] font-semibold">Saylani Mass IT Training</span>. Experienced in React Native development and leveraging AI productivity tools. Actively expanding expertise in{" "}
            <span className="text-[#2dd4bf] font-semibold">Python and Agentic AI</span> to build intelligent, automation-driven systems. Quick learner focused on delivering impactful, user-facing solutions.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-4 mt-8 opacity-0 translate-y-5"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-7 py-3.5 bg-[#2dd4bf] text-[#0f172a] font-semibold text-[14px] rounded-lg transition-all duration-300 hover:bg-[#5eead4] hover:scale-[1.02] shadow-lg shadow-[#2dd4bf]/10"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-7 py-3.5 border border-[#334155] text-[#f8fafc] font-medium text-[14px] rounded-lg transition-all duration-300 hover:border-[#2dd4bf] hover:text-[#2dd4bf]"
            >
              Contact Me
            </a>
          </div>

          <div
            ref={socialsRef}
            className="flex items-center gap-5 mt-8 opacity-0 translate-y-3"
          >
            <a
              href="https://github.com/Basma-Hassan95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] transition-colors duration-300 hover:text-[#2dd4bf]"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/basmahassanwebdev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] transition-colors duration-300 hover:text-[#2dd4bf]"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] transition-colors duration-300 hover:text-[#2dd4bf]"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 z-10"
      >
        <div className="relative w-[2px] h-[40px] bg-[#334155] rounded-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[6px] bg-[#2dd4bf] rounded-full animate-scroll-indicator" />
        </div>
        <span className="font-mono text-[12px] text-[#64748b] uppercase tracking-wider">
          Scroll
        </span>
      </div>
    </section>
  );
}
