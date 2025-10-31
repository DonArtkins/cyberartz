import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight, Shield, Code, Terminal, Lock } from "lucide-react";

/**
 * Home Page
 * Landing page showcasing introduction, highlights, and call-to-actions
 */
export default function HomePage() {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />

      {/* Skills Highlight Section */}
      <AnimatedSection animation="slideUp" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              What I Do
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Combining development expertise with cybersecurity knowledge to
              build secure, innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Web Development */}
            <div className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Full-stack development with React, Next.js, and modern web
                technologies. Building responsive, performant applications.
              </p>
            </div>

            {/* Cybersecurity */}
            <div className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cybersecurity</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Learning ethical hacking, penetration testing, and security best
                practices. Solving CTF challenges and lab exercises.
              </p>
            </div>

            {/* Security Testing */}
            <div className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Security Testing</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Conducting vulnerability assessments and security audits. Using
                industry-standard tools for penetration testing.
              </p>
            </div>

            {/* Secure Coding */}
            <div className="group p-6 sm:p-8 bg-black border border-white/10 rounded-xl hover-lift">
              <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Coding</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Implementing security best practices in application development.
                Writing secure, maintainable code.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Work Section */}
      <AnimatedSection
        animation="slideUp"
        className="py-20 sm:py-32 bg-white/2"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Explore my latest projects and cybersecurity challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-5xl mx-auto">
            {/* Projects Card */}
            <Link
              href="/projects"
              className="group relative p-8 sm:p-10 bg-black border border-white/10 rounded-2xl hover-lift overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Code className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Projects</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  Web and mobile applications showcasing full-stack development
                  skills with modern technologies.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  View Projects
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Lab Challenges Card */}
            <Link
              href="/lab-challenges"
              className="group relative p-8 sm:p-10 bg-black border border-white/10 rounded-2xl hover-lift overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Lab Challenges</h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  CTF writeups and security lab solutions demonstrating
                  problem-solving and security analysis skills.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all">
                  View Challenges
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="slideUp" className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              I&apos;m always interested in new opportunities, collaborations,
              and projects. Feel free to reach out if you&apos;d like to
              connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/resume"
                className="px-8 py-4 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
