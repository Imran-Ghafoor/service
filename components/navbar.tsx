"use client"

import { useState,useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"


export default function Navbar() {
  const texts = ["TDX", "The DesignerX"] // cycle between these
  const [currentText, setCurrentText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

   // ⏳ toggle text every 3 seconds
  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 120
    const pauseTime = 1500 // pause after word is complete

    let timeout: NodeJS.Timeout

    if (!isDeleting && charIndex < texts[textIndex].length) {
      // ⌨️ typing forward
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev + texts[textIndex][charIndex])
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
    } else if (!isDeleting && charIndex === texts[textIndex].length) {
      // ✅ finished typing → pause → start deleting
      timeout = setTimeout(() => {
        setIsDeleting(true)
      }, pauseTime)
    } else if (isDeleting && charIndex > 0) {
      // ⬅️ deleting backwards
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
        setCharIndex((prev) => prev - 1)
      }, typingSpeed)
    } else if (isDeleting && charIndex === 0) {
      // word fully deleted → move to next word
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts])


  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}

        <Link href="/" className="flex items-center">
            <span
              className="block text-2xl md:text-3xl font-bold bg-gradient-to-r 
                from-[#F6F5E3] via-[#E1C688] to-[#D5BA7F] 
                bg-clip-text text-transparent tracking-wide 
                whitespace-nowrap"
              style={{ minWidth: "12ch" }} // keeps navbar stable
            >
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </Link>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="font-semibold px-6 hover:bg-[#2c2c2c] "  >
              <Link href="/consultation">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-slide-in-right">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 border border-border">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" asChild>
                  <Link href="/consultation">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
