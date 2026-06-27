import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="bg-[#080808] border-t border-[#262626] py-10"
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-bold text-[#f5f5f5] tracking-[0.1em]">
            HASSAN
          </span>
          <span className="text-[14px] text-[#525252]">
            &copy; 2025 All Rights Reserved
          </span>
        </div>

        <div className="flex items-center gap-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#737373] transition-colors duration-300 hover:text-[#2dd4bf] flex items-center gap-1.5"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#737373] transition-colors duration-300 hover:text-[#2dd4bf] flex items-center gap-1.5"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] text-[#737373] transition-colors duration-300 hover:text-[#2dd4bf] flex items-center gap-1.5"
          >
            <Twitter size={16} />
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
