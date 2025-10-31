"use client";

import { useEffect, useRef } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Download,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { gsap } from "gsap";
import type { Metadata } from "next";

/**
 * Resume Page
 * Complete CV/Resume with education, experience, skills, and certifications
 * Features downloadable PDF option and responsive timeline layout
 */
export default function ResumePage() {
  const headerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="page-transition min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Resume
          </h1>
          <p className="text-white/70 text-lg mb-8">
            My professional journey and qualifications
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-white/70 mb-8">
            <a
              href="mailto:opiyodon9@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              opiyodon9@gmail.com
            </a>
            <a
              href="tel:+254714230692"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              +254-714-230692
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Kabarak, Nakuru, Kenya
            </span>
          </div>

          {/* Download CV Button */}
          <button className="group px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-all duration-300 flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            Download CV
          </button>
        </div>

        {/* Professional Summary */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <div className="p-6 sm:p-8 bg-black border border-white/10 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-8 bg-white rounded-full" />
              Professional Summary
            </h2>
            <p className="text-white/70 leading-relaxed">
              Versatile tech professional with expertise in web development,
              software engineering, UI/UX design, and AI prompt engineering.
              Driven by a passion for innovation and cybersecurity, committed to
              continuous learning and delivering high-quality solutions that
              exceed expectations. Strong problem-solving skills, adaptability,
              and dedication make me a valuable asset to any organization.
            </p>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8" />
            Education
          </h2>

          <div className="space-y-6">
            {/* University */}
            <div className="relative pl-8 border-l-2 border-white/10">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full" />
              <div className="p-6 bg-black border border-white/10 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Bachelor of Science in Information Technology
                    </h3>
                    <p className="text-white/70">Kabarak University</p>
                  </div>
                  <span className="text-sm text-white/50 whitespace-nowrap">
                    2021 - 2025
                  </span>
                </div>
                <p className="text-white/60 text-sm">
                  Comprehensive IT program covering software development,
                  database systems, networking, cybersecurity fundamentals, and
                  project management.
                </p>
              </div>
            </div>

            {/* Secondary School */}
            <div className="relative pl-8 border-l-2 border-white/10">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white/50 rounded-full" />
              <div className="p-6 bg-black border border-white/10 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Kenya Certificate of Secondary Education
                    </h3>
                    <p className="text-white/70">St. Mary&apos;s School Yala</p>
                  </div>
                  <span className="text-sm text-white/50 whitespace-nowrap">
                    2017 - 2021
                  </span>
                </div>
              </div>
            </div>

            {/* Primary School */}
            <div className="relative pl-8">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white/30 rounded-full" />
              <div className="p-6 bg-black border border-white/10 rounded-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Kenya Certificate of Primary Education
                    </h3>
                    <p className="text-white/70">
                      Siaya Central Primary School
                    </p>
                  </div>
                  <span className="text-sm text-white/50 whitespace-nowrap">
                    2009 - 2016
                  </span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Work Experience */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8" />
            Work Experience
          </h2>

          <div className="relative pl-8 border-l-2 border-white/10">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full" />
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold">IT Consultant</h3>
                  <p className="text-white/70">Neydave Cybercafe</p>
                </div>
                <span className="text-sm text-white/50 whitespace-nowrap">
                  2021
                </span>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex gap-3">
                  <span className="text-white/50 mt-1.5">•</span>
                  <span>
                    Provided comprehensive IT support and consulting services to
                    cybercafe customers
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/50 mt-1.5">•</span>
                  <span>
                    Troubleshot hardware and software issues, ensuring minimal
                    downtime
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/50 mt-1.5">•</span>
                  <span>
                    Maintained IT infrastructure and ensured smooth daily
                    operations
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/50 mt-1.5">•</span>
                  <span>
                    Assisted customers with document printing, scanning, and
                    basic computer tasks
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* Technical Skills */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Code className="w-8 h-8" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Development */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "MongoDB",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Software Development */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">
                Software Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Flutter", "Firebase", "Firestore", "Dart"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">UI/UX Design</h3>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Uizard", "Visily"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Programming Languages */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C", "Visual Basic.NET", "Flask"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cybersecurity Tools */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Cybersecurity</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Network Security",
                  "Web Security",
                  "Vulnerability Assessment",
                  "Security Best Practices",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI Prompt Engineering",
                  "Freelancing",
                  "IT Consulting",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-white/5 border border-white/10 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Languages */}
        <AnimatedSection animation="slideUp" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8" />
            Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">English</h3>
              <p className="text-white/70 text-sm">
                Fluent - Native proficiency
              </p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Kiswahili</h3>
              <p className="text-white/70 text-sm">
                Fluent - Native proficiency
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* References */}
        <AnimatedSection animation="slideUp">
          <h2 className="text-3xl font-bold mb-8">References</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-1">
                Dr. Andrew Kipkebut
              </h3>
              <p className="text-white/70 text-sm mb-3">
                Lecturer, Kabarak University
              </p>
              <a
                href="tel:0717940308"
                className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0717940308
              </a>
            </div>

            <div className="p-6 bg-black border border-white/10 rounded-xl">
              <h3 className="text-lg font-semibold mb-1">Mrs. Mercy Gachoka</h3>
              <p className="text-white/70 text-sm mb-3">
                Lecturer, Kabarak University
              </p>
              <a
                href="tel:0719499615"
                className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                0719499615
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
