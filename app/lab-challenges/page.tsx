"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Shield,
  Terminal,
  Code,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Award,
} from "lucide-react";
import { gsap } from "gsap";
import type { LabChallenge } from "@/types";
import Image from "next/image";

// Lab challenge data - add your actual CTF and lab challenges
const labChallenges: LabChallenge[] = [
  {
    id: "port-scanning-basics",
    title: "Network Port Scanning Fundamentals",
    difficulty: "Beginner",
    category: "Network Security",
    dateCompleted: "2024-10-15",
    problemStatement:
      "The objective of this lab challenge was to understand network reconnaissance techniques using port scanning tools. The task involved identifying open ports, services running on a target machine, and determining potential vulnerabilities based on the discovered information.",
    approach: [
      "Started with basic network discovery using ping to confirm host availability",
      "Used Nmap with different scan types (-sS for SYN scan, -sV for service version detection)",
      "Analyzed scan results to identify commonly exploited services",
      "Documented all open ports and their associated services",
      "Cross-referenced findings with CVE databases for known vulnerabilities",
    ],
    tools: ["Nmap", "Netcat", "Wireshark", "Linux Terminal"],
    screenshots: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop",
    ],
    codeSnippets: [
      {
        language: "bash",
        code: `# Basic Nmap scan for open ports
nmap -p- -T4 192.168.1.100

# Service version detection
nmap -sV -p 22,80,443 192.168.1.100

# Comprehensive scan with OS detection
nmap -A -T4 192.168.1.100

# Output results to file
nmap -oN scan_results.txt 192.168.1.100`,
        description:
          "Various Nmap scanning techniques used during the challenge",
      },
    ],
    keyLearnings: [
      "Understanding different types of port scans (TCP Connect, SYN, UDP) and their use cases",
      "Interpreting Nmap output to identify potential security weaknesses",
      "Importance of service versioning in vulnerability assessment",
      "Practical experience with network mapping and reconnaissance",
      "Ethical considerations when conducting port scans and importance of authorization",
    ],
  },
];

/**
 * Lab Challenges Page
 * CTF writeups and security lab solutions with detailed explanations
 * Features expandable challenge cards with code snippets and screenshots
 */
export default function LabChallengesPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [expandedChallenge, setExpandedChallenge] = useState<string | null>(
    null
  );

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
   * Toggle challenge expansion
   */
  const toggleChallenge = (id: string) => {
    if (expandedChallenge === id) {
      setExpandedChallenge(null);
    } else {
      setExpandedChallenge(id);

      // Animate expansion
      setTimeout(() => {
        const element = document.getElementById(`challenge-${id}`);
        if (element) {
          gsap.from(element.querySelectorAll(".challenge-content > *"), {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
          });
        }
      }, 100);
    }
  };

  /**
   * Get difficulty badge color
   */
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Advanced":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Expert":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-white/10 text-white/70 border-white/20";
    }
  };

  return (
    <div className="page-transition min-h-screen pt-24 sm:pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="w-10 h-10 sm:w-12 sm:h-12" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Lab Challenges
            </h1>
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            CTF writeups and security lab solutions documenting my learning
            journey in cybersecurity
          </p>
        </div>

        {/* Stats Overview */}
        <AnimatedSection animation="slideUp" className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="p-4 sm:p-6 bg-black border border-white/10 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                {labChallenges.length}
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Challenges Completed
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-black border border-white/10 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                {
                  labChallenges.filter((c) => c.difficulty === "Beginner")
                    .length
                }
              </div>
              <div className="text-xs sm:text-sm text-white/60">Beginner</div>
            </div>
            <div className="p-4 sm:p-6 bg-black border border-white/10 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                {
                  labChallenges.filter((c) => c.difficulty === "Intermediate")
                    .length
                }
              </div>
              <div className="text-xs sm:text-sm text-white/60">
                Intermediate
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-black border border-white/10 rounded-xl text-center">
              <div className="text-2xl sm:text-3xl font-bold mb-1">
                {
                  labChallenges.filter((c) => c.difficulty === "Advanced")
                    .length
                }
              </div>
              <div className="text-xs sm:text-sm text-white/60">Advanced</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lab Challenges List */}
        <AnimatedSection animation="fadeIn">
          <div className="space-y-6 max-w-5xl mx-auto">
            {labChallenges.map((challenge) => (
              <div
                key={challenge.id}
                id={`challenge-${challenge.id}`}
                className="bg-black border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Challenge Header - Always Visible */}
                <button
                  onClick={() => toggleChallenge(challenge.id)}
                  className="w-full p-6 sm:p-8 text-left hover:bg-white/2 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      {/* Title and meta */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold">
                          {challenge.title}
                        </h3>
                        <span
                          className={`px-3 py-1 text-xs font-medium border rounded-full ${getDifficultyColor(
                            challenge.difficulty
                          )}`}
                        >
                          {challenge.difficulty}
                        </span>
                      </div>

                      {/* Category and date */}
                      <div className="flex flex-wrap gap-4 text-sm text-white/60 mb-3">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          {challenge.category}
                        </span>
                        <span>
                          Completed:{" "}
                          {new Date(challenge.dateCompleted).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>

                      {/* Problem statement preview */}
                      <p className="text-white/70 text-sm sm:text-base">
                        {challenge.problemStatement.substring(0, 150)}...
                      </p>
                    </div>

                    {/* Expand button */}
                    <div className="shrink-0">
                      {expandedChallenge === challenge.id ? (
                        <ChevronUp className="w-6 h-6 text-white/60" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-white/60" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Challenge Details - Expanded Content */}
                {expandedChallenge === challenge.id && (
                  <div className="challenge-content border-t border-white/10 p-6 sm:p-8 space-y-8">
                    {/* Full Problem Statement */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Problem Statement
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {challenge.problemStatement}
                      </p>
                    </div>

                    {/* Approach */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Terminal className="w-5 h-5" />
                        Approach & Methodology
                      </h4>
                      <ol className="space-y-2">
                        {challenge.approach.map((step, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-white/70 text-sm sm:text-base"
                          >
                            <span className="shrink-0 w-6 h-6 bg-white/5 rounded-full flex items-center justify-center text-xs font-medium">
                              {index + 1}
                            </span>
                            <span className="flex-1">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tools Used */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {challenge.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Code Snippets */}
                    {challenge.codeSnippets &&
                      challenge.codeSnippets.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                            <Code className="w-5 h-5" />
                            Code Snippets
                          </h4>
                          <div className="space-y-4">
                            {challenge.codeSnippets.map((snippet, index) => (
                              <div key={index}>
                                {snippet.description && (
                                  <p className="text-white/60 text-sm mb-2">
                                    {snippet.description}
                                  </p>
                                )}
                                <div className="bg-black border border-white/10 rounded-lg overflow-hidden">
                                  <div className="px-4 py-2 bg-white/5 border-b border-white/10 flex items-center justify-between">
                                    <span className="text-xs text-white/60 font-mono">
                                      {snippet.language}
                                    </span>
                                  </div>
                                  <pre className="p-4 overflow-x-auto">
                                    <code className="text-sm text-white/80 font-mono">
                                      {snippet.code}
                                    </code>
                                  </pre>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Screenshots */}
                    {challenge.screenshots &&
                      challenge.screenshots.length > 0 && (
                        <div>
                          <h4 className="text-lg font-semibold mb-3">
                            Screenshots
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {challenge.screenshots.map((screenshot, index) => (
                              <div
                                key={index}
                                className="aspect-video bg-white/5 rounded-lg overflow-hidden border border-white/10"
                              >
                                <Image
                                  src={screenshot}
                                  alt={`Screenshot ${index + 1}`}
                                  width={800}
                                  height={500}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                    {/* Key Learnings */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Key Learnings
                      </h4>
                      <ul className="space-y-2">
                        {challenge.keyLearnings.map((learning, index) => (
                          <li
                            key={index}
                            className="flex gap-3 text-white/70 text-sm sm:text-base"
                          >
                            <span className="text-white/50 mt-1.5">•</span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Writeup Link */}
                    {challenge.writeupUrl && (
                      <div>
                        <a
                          href={challenge.writeupUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors"
                        >
                          Read Full Writeup
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Additional Info */}
        <AnimatedSection animation="slideUp" className="mt-20">
          <div className="max-w-3xl mx-auto text-center p-8 sm:p-10 bg-black border border-white/10 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Learning Journey Continues
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              This section showcases my cybersecurity learning journey. As I
              complete more challenges and CTFs, I&apos;ll document my
              approaches, tools used, and key takeaways. Stay tuned for more
              writeups!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-6 py-3 bg-white text-black rounded-md font-medium hover:bg-white/90 transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-6 py-3 border border-white/20 rounded-md font-medium hover:bg-white/5 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
