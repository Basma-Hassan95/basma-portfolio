import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

const experience = [
  {
    role: "React Native Developer",
    company: "Internship · Karachi, Pakistan",
    period: "Aug 2025 — Nov 2025",
    description:
      "Developed and maintained cross-platform mobile features using React Native. Worked on component architecture and seamless REST API integration. Collaborated on improving application performance, code quality, and user experience.",
  },
  {
    role: "Full-Stack Web & App Student",
    company: "Saylani Mass IT Training (SMIT)",
    period: "2024 — 2026",
    description:
      "Underwent rigorous technical training building production-grade MERN web architectures and native mobile apps. Engineered state management solutions, clean asynchronous servers, secure backend routes, and deployed end-to-end cloud platforms.",
  },
];

const education = [
  {
    degree: "Web & App Development",
    institution: "Saylani Mass IT Training (SMIT)",
    period: "2024 — 2026",
  },
  {
    degree: "M.A. Mass Communication",
    institution: "University of Karachi",
    period: "Completed",
  },
  {
    degree: "B.A. English Literature",
    institution: "Jinnah University For Women",
    period: "Completed",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "TypeScript", "React.js", "React Native", "Redux", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git / GitHub", "Expo", "Vercel", "Railway"],
  },
  {
    category: "AI Tools & Workflows",
    items: ["GitHub Copilot", "Cursor", "ChatGPT", "Claude AI"],
  },
];

const certificates = [
  {
    title: "React Native Developer",
    issuer: "LinkedIn Certification",
    link: "https://www.linkedin.com/posts/basmahassanwebdev_reactnative-mobileappdevelopment-learningjourney-share-7414321395083595776-gsJj/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD707DwBDaKWR-WnnFc_W1W68jXDkmOzOtc",
  },
];

export default function Resume() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    toast.success("Downloading Basma's Resume...");
    window.open("./public/Basma-FullStackDeveloper.pdf", "_blank");
  };

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const exp = expRef.current;
    const edu = eduRef.current;
    const skillsEl = skillsRef.current;
    const certEl = certRef.current;
    if (!section || !header || !exp || !edu || !skillsEl || !certEl) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 70%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        exp.querySelectorAll(".timeline-item"),
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: exp, start: "top 75%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        edu.querySelectorAll(".timeline-item"),
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: edu, start: "top 80%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        skillsEl.querySelectorAll(".skill-card"),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: skillsEl, start: "top 80%", toggleActions: "play none none none" },
        }
      );
      gsap.fromTo(
        certEl.querySelectorAll(".cert-item"),
        { opacity: 0, y: 20 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: certEl, start: "top 85%", toggleActions: "play none none none" },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="resume"
      ref={sectionRef}
      className="bg-[#0b0f19] py-[100px] border-t border-[#1e293b]"
    >
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="flex flex-wrap items-end justify-between gap-4 mb-12 opacity-0"
        >
          <div>
            <span className="font-mono text-[12px] uppercase text-[#2dd4bf] tracking-[0.1em]">
              JOURNEY & BACKGROUND
            </span>
            <h2 className="text-[36px] md:text-[48px] font-semibold text-[#f8fafc] leading-[1.2] tracking-[-1px] mt-3">
              Resume
            </h2>
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-[#2dd4bf] text-[#2dd4bf] text-[14px] font-semibold rounded-lg transition-all duration-300 hover:bg-[#2dd4bf] hover:text-[#0b0f19] shadow-lg shadow-[#2dd4bf]/5"
          >
            <Download size={16} />
            Download CV
          </button>
        </div>

        {/* Experience + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div ref={expRef} className="lg:col-span-2">
            <h3 className="text-[26px] font-bold text-[#f8fafc] mb-8 tracking-tight">
              Work Experience
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#1e293b]" />
              {experience.map((item, index) => (
                <TimelineItem
                  key={index}
                  role={item.role}
                  org={item.company}
                  period={item.period}
                  description={item.description}
                />
              ))}
            </div>
          </div>

          <div ref={eduRef}>
            <h3 className="text-[26px] font-bold text-[#f8fafc] mb-8 tracking-tight">
              Education
            </h3>
            <div className="relative pl-6">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#1e293b]" />
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  role={item.degree}
                  org={item.institution}
                  period={item.period}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div ref={skillsRef} className="mb-16">
          <h3 className="text-[26px] font-bold text-[#f8fafc] mb-8 tracking-tight">
            Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-card opacity-0 bg-[#0f172a] border border-[#1e293b] rounded-xl p-5 hover:border-[#2dd4bf]/40 transition-all duration-300"
              >
                <h4 className="text-[13px] font-mono uppercase text-[#2dd4bf] tracking-widest mb-3">
                  {skill.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-[13px] text-[#cbd5e1] bg-[#1e293b] px-2 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certificates */}
        <div ref={certRef}>
          <h3 className="text-[26px] font-bold text-[#f8fafc] mb-8 tracking-tight">
            Certificates
          </h3>
          <div className="flex flex-wrap gap-4">
            {certificates.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-item opacity-0 flex items-center gap-3 bg-[#0f172a] border border-[#1e293b] rounded-xl px-5 py-4 hover:border-[#2dd4bf]/40 transition-all duration-300 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#2dd4bf] group-hover:shadow-[0_0_8px_#2dd4bf] transition-all duration-300" />
                <div>
                  <p className="text-[15px] font-semibold text-[#f8fafc] group-hover:text-[#2dd4bf] transition-colors duration-300">
                    {cert.title}
                  </p>
                  <p className="text-[13px] text-[#64748b]">{cert.issuer}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function TimelineItem({
  role,
  org,
  period,
  description,
}: {
  role: string;
  org: string;
  period: string;
  description?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="timeline-item relative pb-10 last:pb-0 opacity-0 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`absolute -left-[23px] top-2 w-2.5 h-2.5 rounded-full border-2 border-[#2dd4bf] bg-[#0b0f19] transition-all duration-300 ${
          isHovered ? "scale-125 shadow-[0_0_8px_#2dd4bf]" : "scale-100"
        }`}
      />
      <div className="ml-4">
        <h4 className="text-[19px] font-bold text-[#f8fafc] tracking-tight transition-colors duration-300 group-hover:text-[#2dd4bf]">
          {role}
        </h4>
        <p className="text-[15px] text-[#2dd4bf] font-medium mt-0.5">{org}</p>
        <span className="font-mono text-[13px] text-[#64748b] mt-1 block">
          {period}
        </span>
        {description && (
          <p className="text-[14px] text-[#cbd5e1] leading-[1.6] mt-3 max-w-[640px] font-normal">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}