import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { toast } from "sonner";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const orSectionRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const form = formRef.current;
    const orSection = orSectionRef.current;
    if (!section || !content || !form) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        content.querySelectorAll(".animate-in"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        form,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );

      if (orSection) {
        gsap.fromTo(
          orSection,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#0b0f19] py-[120px] border-t border-[#1e293b]" // Updated to matching layout color
    >
      <div className="max-w-[800px] mx-auto px-6 text-center">
        <div ref={contentRef}>
          <span className="animate-in font-mono text-[13px] uppercase text-[#2dd4bf] tracking-[3px] opacity-0 block">
            GET IN TOUCH
          </span>
          <h2 className="animate-in text-[36px] md:text-[48px] font-bold text-[#f8fafc] leading-[1.2] tracking-[-1px] mt-3 opacity-0">
            Let's Work Together
          </h2>
          <p className="animate-in text-[16px] text-[#cbd5e1] max-w-[500px] mx-auto mt-4 leading-[1.65] font-normal opacity-0">
            Have a project in mind? I'd love to hear about it. Drop me a message
            and let's create something amazing.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-10 max-w-[500px] mx-auto opacity-0"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="h-[52px] bg-[#1e293b]/50 border border-[#334155] rounded-xl px-4 text-[#f8fafc] text-[15px] placeholder:text-[#64748b] outline-none transition-all duration-300 focus:border-[#2dd4bf] focus:bg-[#1e293b] focus:shadow-md focus:shadow-[#2dd4bf]/5 font-normal"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="h-[52px] bg-[#1e293b]/50 border border-[#334155] rounded-xl px-4 text-[#f8fafc] text-[15px] placeholder:text-[#64748b] outline-none transition-all duration-300 focus:border-[#2dd4bf] focus:bg-[#1e293b] focus:shadow-md focus:shadow-[#2dd4bf]/5 font-normal"
          />
          <textarea
            placeholder="Your Message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            className="bg-[#1e293b]/50 border border-[#334155] rounded-xl p-4 text-[#f8fafc] text-[15px] placeholder:text-[#64748b] outline-none resize-y transition-all duration-300 focus:border-[#2dd4bf] focus:bg-[#1e293b] focus:shadow-md focus:shadow-[#2dd4bf]/5 font-normal"
          />
          <button
            type="submit"
            className="h-[52px] bg-[#2dd4bf] text-[#0f172a] font-bold text-[15px] rounded-xl transition-all duration-300 hover:bg-[#5eead4] hover:scale-[1.01] shadow-lg shadow-[#2dd4bf]/10"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 opacity-0" ref={orSectionRef}>
          <span className="font-mono text-[13px] text-[#64748b] uppercase tracking-wider">&mdash; or direct mail &mdash;</span>
          <p className="mt-4">
            <a
              href="mailto:hassanbasma001@gmail.com"
              className="text-[22px] md:text-[26px] font-bold text-[#f8fafc] transition-colors duration-300 hover:text-[#2dd4bf] hover:underline tracking-tight"
            >
              hassanbasma001@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
