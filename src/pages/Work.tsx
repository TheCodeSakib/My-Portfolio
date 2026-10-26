import { LucideGithub, ExternalLink } from "lucide-react";
import projectImage from "../assets/images/mobile.png"; // Placeholder image

// Static Data based on the screenshot
const projectData = {
  projectNumber: "PROJECT 01",
  title: "Tasker App 📝",
  description:
    "A modern task management application built to streamline daily task tracking and organization.   Core Features: Create, edit, delete, and organize tasks with custom tags, categories, and priority levels.Search & Filter: Easily find specific tasks using the built-in search functionality.Responsive Design: Fully optimized and tested for Desktop, Tablet, and Mobile devices.",
  technologies: ["React js", "Vite", "Tailwind CSS", "Context API"],
  imageUrl: projectImage,
  githubUrl: "https://github.com/TheCodeSakib/Tasker-app.git",
  liveUrl: "https://tasker-app-ivory.vercel.app/",
};

export const Work = () => {
  return (
    <section className="bg-[#08070B] text-white py-16 px-4 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center pt-25">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="w-8 h-[2px] bg-[#8B5CF6]"></span>
          <span className="text-[#8B5CF6] text-sm font-semibold tracking-widest uppercase">PORTFOLIO</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          My Recent <span className="text-[#8B5CF6]">Projects</span>
        </h2>
      </div>

      {/* Project Card Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side: Hover Scroll Image */}
        {/* Left Side: Hover Scroll Image Container */}
        {/* Left Side: Hover Smooth Slide Image */}
        <div className="project-image-wrapper rounded-2xl border border-white/10 bg-[#12111A] shadow-2xl h-[400px] sm:h-[450px]">
          <img src={projectData.imageUrl} alt={projectData.title} className="w-full object-cover cursor-pointer" />
        </div>

        {/* Right Side: Project Details */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Project Number */}
          <span className="text-[#8B5CF6] text-sm font-semibold uppercase tracking-wider">{projectData.projectNumber}</span>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{projectData.title}</h3>

          {/* Description */}
          <p className="text-gray-400 text-base leading-relaxed">{projectData.description}</p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {projectData.technologies.map((tech, index) => (
              <span key={index} className="px-4 py-1.5 rounded-md text-sm font-medium bg-[#170E2B] text-[#9333EA] border border-[#3B1E70]/50 hover:border-[#8B5CF6] transition-all duration-200">
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Source Code Button */}
            <a
              href={projectData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111019] border border-white/10 text-gray-200 font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <LucideGithub className="w-5 h-5" />
              <span>Source Code</span>
            </a>

            {/* Live Link Button */}
            <a
              href={projectData.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#111019] border border-white/10 text-gray-200 font-medium hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Link</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
