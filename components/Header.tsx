"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";
import { gsap } from "gsap";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Lab Challenges", href: "/lab-challenges" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Header animation on mount
    gsap.from(".header-element", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.1,
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="header-element flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-white/90 transition-colors">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div>
              <div className="font-bold text-lg leading-none">Opiyo Don</div>
              <div className="text-xs text-white/60 leading-none">
                Cybersecurity
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`header-element px-3 py-2 text-sm font-medium transition-all duration-300 ${
                  pathname === item.href
                    ? "text-white border-b-2 border-white"
                    : "text-white/70 hover:text-white hover:border-b-2 hover:border-white/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="header-element md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? "text-white bg-white/10 rounded-md"
                      : "text-white/70 hover:text-white hover:bg-white/5 rounded-md"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
