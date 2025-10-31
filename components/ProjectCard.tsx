"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.from(cardRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.1,
        ease: "power2.out",
      });
    }
  }, [index]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div
      ref={cardRef}
      className="group bg-black border border-white/10 rounded-xl overflow-hidden hover-lift h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={600}
          className={`object-cover transition-all duration-700 ${
            isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
          } group-hover:scale-105`}
          onLoad={handleImageLoad}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />

        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink className="w-5 h-5 text-black" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              aria-label={`View ${project.title} source code`}
            >
              <Github className="w-5 h-5 text-black" />
            </a>
          )}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-white text-black text-xs font-medium rounded-full">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
            {project.title}
          </h3>
          <p className="text-white/70 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/50">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* View Details Link */}
        <Link
          href={`/projects/${project.id}`}
          className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
