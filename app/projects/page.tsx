"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import { Filter } from "lucide-react";
import { gsap } from "gsap";
import type { Project } from "@/types";

// Project data - replace with your actual projects
const projects: Project[] = [
  {
    id: "trikl3",
    title: "Trikl3",
    description:
      "Attachment Finder Web Application. A modern web app designed to help users find and manage file attachments efficiently with an intuitive interface.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/opiyodon/trikl3",
    liveUrl: "https://trikl3.vercel.app",
    category: "web",
    featured: true,
  },
  {
    id: "synctours",
    title: "SyncTours",
    description:
      "Travel Guide Mobile Application. Flutter-based travel companion app providing curated tour guides, itineraries, and location-based recommendations.",
    tags: ["Flutter", "Firebase", "Dart", "Mobile"],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    liveUrl:
      "https://www.mediafire.com/file/1zuvmv68v1mpj0o/SyncTours.apk/file",
    category: "mobile",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Opiyo Don Portfolio",
    description:
      "Personal Portfolio Website. Modern, responsive portfolio showcasing full-stack development projects with smooth animations and intuitive navigation.",
    tags: ["Next.js", "React", "Tailwind CSS", "GSAP"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/opiyodon",
    liveUrl: "https://opiyodon.vercel.app",
    category: "web",
    featured: true,
  },
  {
    id: "traucitie",
    title: "Traucitie",
    description:
      "Furniture E-commerce Platform. Modern furniture shopping web app with product catalog, shopping cart, and responsive design for seamless user experience.",
    tags: ["React", "TypeScript", "E-commerce", "Responsive"],
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
    githubUrl: "https://github.com/opiyodon/traucitie",
    liveUrl: "https://traucitie.vercel.app",
    category: "web",
  },
  {
    id: "mint",
    title: "M.I.N.T",
    description:
      "Todo List Web Application. Minimalist task management app with clean interface for organizing daily tasks and boosting productivity. Currently under maintenance.",
    tags: ["Next.js", "React", "Productivity", "UI/UX"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
    liveUrl: "https://todomint.vercel.app",
    category: "web",
  },
  {
    id: "emma",
    title: "E.M.M.A",
    description:
      "Mental Health Chatbot. AI-powered conversational assistant providing mental health support, resources, and coping strategies through natural language interaction.",
    tags: ["AI", "Chatbot", "Mental Health", "NLP"],
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
    category: "web",
  },
];

/**
 * Projects Page
 * Showcase of all development projects with filtering capabilities
 * Features animated grid layout and category filtering
 */
export default function ProjectsPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("all");

  // Use useMemo to compute filtered projects without useEffect
  const filteredProjects = useMemo(() => {
    if (filter === "all") {
      return projects;
    } else {
      return projects.filter((p) => p.category === filter);
    }
  }, [filter]);

  /**
   * Animate header on mount
   */
  useEffect(() => {
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
    }
  }, []);

  /**
   * Animate project cards when filter changes
   */
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.from(".project-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [filteredProjects]);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "cybersec", label: "Cybersecurity" },
  ];

  return (
    <div className="page-transition min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Projects
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of web and mobile applications showcasing my
            development skills and problem-solving capabilities
          </p>
        </div>

        {/* Filter buttons */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium transition-all duration-300 ${
                  filter === category.id
                    ? "bg-white text-black"
                    : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects count */}
        <div className="mb-8 text-center">
          <p className="text-white/60 text-sm">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 && "s"}
          </p>
        </div>

        {/* Projects grid */}
        <AnimatedSection animation="fadeIn">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="project-card">
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Filter className="w-12 h-12 mx-auto mb-4 text-white/30" />
              <p className="text-white/60">
                No projects found in this category
              </p>
            </div>
          )}
        </AnimatedSection>

        {/* Additional info */}
        <AnimatedSection animation="slideUp" className="mt-20">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 bg-black border border-white/10 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              More Projects Coming Soon
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              I&apos;m constantly working on new projects and learning new
              technologies. Check back regularly or follow me on GitHub to stay
              updated with my latest work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/opiyodon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors"
              >
                View GitHub Profile
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
