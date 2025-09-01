"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const texts = ["TDX", "The DesignerX"] // cycle between these
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing Effect Logic (same as Navbar)
  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120
    const pauseTime = 1500 // pause after word is complete

    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < texts[textIndex].length) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
        setCharIndex((prev) => prev - 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])

  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-zinc-900 to-slate-700 text-white overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="absolute top-10 left-10 w-32 h-32 animate-pulse text-yellow-400"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <polygon points="50,10 90,90 10,90" className="animate-spin-slow" />
        </svg>
        <svg
          className="absolute top-20 right-20 w-24 h-24 animate-bounce text-yellow-300"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
        <svg
          className="absolute bottom-20 left-1/4 w-28 h-28 animate-pulse text-amber-400"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <rect x="20" y="20" width="60" height="60" rx="10" className="animate-spin-slow" />
        </svg>
        <svg
          className="absolute bottom-10 right-1/3 w-20 h-20 animate-bounce text-yellow-400"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <path d="M50,10 L90,50 L50,90 L10,50 Z" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Logo + Socials */}
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <Link href="/" className="flex items-center">
              <span
                className="block text-2xl md:text-3xl font-bold bg-gradient-to-r 
                  from-[#F6F5E3] via-[#E1C688] to-[#D5BA7F] 
                  bg-clip-text text-transparent tracking-wide 
                  whitespace-nowrap"
                style={{ minWidth: "12ch" }}
              >
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </Link>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-slate-700 hover:bg-gradient-to-r hover:from-yellow-600 hover:to-amber-600 rounded-full transition-all duration-300 group shadow-lg hover:shadow-yellow-500/25"
                >
                  <Icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6 text-yellow-400" />
                <span className="text-slate-300">123 Tech Street, Lahore, Pakistan</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6 text-yellow-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-yellow-300 bg-clip-text text-transparent">
                  contact@tdx.com
                </span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="w-6 h-6 text-yellow-400" />
                <span className="text-slate-300">+92 300 1234567</span>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="flex flex-col items-center lg:items-end space-y-4">
            <div className="space-y-3 text-center lg:text-right">
              <Link
                href="/terms"
                className="block text-slate-300 hover:bg-gradient-to-r hover:from-white hover:to-yellow-300 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-lg font-medium"
              >
                Terms and Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-slate-300 hover:bg-gradient-to-r hover:from-white hover:to-yellow-300 hover:bg-clip-text hover:text-transparent transition-all duration-300 text-lg font-medium"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 pt-4 border-t border-slate-600 text-center">
          <p className="text-slate-400">© 2024 TDX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
