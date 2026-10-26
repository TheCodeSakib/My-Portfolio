import SocialLink from "@/components/SocialLink";
import Statistics from "@/components/Statistics";
import resume from "../assets/resume.pdf";
import { Download } from "lucide-react";
import Photo from "../components/Photo";

import TypingText from "@/components/TypingEffect";
import TypingEffect from "@/components/TypingEffect";

export default function Home() {
  return (
    <>
      <section className="hero-section min-h-screen w-full relative bg-pattern-grid pt-15 ">
        <div className="container">
          <div className="py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center md:items-start text-center md:text-start gap-5 ">
              <div>
                <h3 className="font-semibold text-white/70 mb-1 tracking-wide">Software Engineer</h3>
                <h2 className="text-3xl md:text-4xl mb-4">Hello I&apos;m</h2>
                <h1 className="text-sky/80 text-4xl md:text-5xl ">
                  <TypingEffect text="Sakib Ahmed" delay={0.2} />
                </h1>
              </div>
              {/* As a Software Engineer, I design and build scalable and user-friendly web applications, combining frontend expertise with backend skills to deliver efficient, problem-solving solutions with clean design, optimal performance, and impactful digital experiences." */}
              <div>
                <div>
                  <TypingText
                    text="As a Software Engineer, I design and build scalable and user-friendly web applications, combining frontend expertise with backend skills to deliver efficient, problem-solving solutions with clean design, optimal performance, and impactful digital experiences."
                    className="w-full text-lg md:text-xl font-medium leading-relaxed text-white/80"
                    delay={0.03}
                  />
                </div>
              </div>
              {/* Button Animation */}
              <button className="relative px-[1px] py-[1px] overflow-hidden group mt-5 mb-3">
                {/* Border layer */}
                <span className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-borderSpin"></span>

                {/* Inner background */}
                <a className=" text-sky/80 tracking-wide text-sm " href={"/resume.pdf"} download>
                  <span className="relative flex items-center gap-3 rounded-full bg-bg px-3.5 py-1.5 transition">
                    Download cv <Download className="w-4 h-4" />
                  </span>
                </a>
              </button>
              {/* Social Link */}
              <SocialLink />
              <Statistics />
            </div>
            <Photo />
          </div>
        </div>
      </section>
    </>
  );
}
