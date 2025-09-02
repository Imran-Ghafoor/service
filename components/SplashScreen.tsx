"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const pathname = usePathname() // detect route change

  useEffect(() => {
    // 🔄 Reset states on every route change
    setLoading(true)
    setFadeOut(false)
    setShowContent(false)

    const timer = setTimeout(() => {
      setFadeOut(true) // start splash fade-out
      setTimeout(() => {
        setLoading(false)
        setShowContent(true) // then show page content
      }, 1000) // splash fade-out duration
    }, 2000) // splash visible for 2 seconds

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <>
      {/* Splash Screen */}
      {loading && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#0f0f0f] to-[#161616] transition-opacity duration-1000 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Glow behind text */}
          <div
            className={`absolute w-72 h-72 rounded-full bg-gradient-radial from-[#d3af37]/40 via-[#d3af37]/20 to-transparent blur-3xl transition-all duration-1000 ${
              fadeOut ? "opacity-0 scale-110" : "opacity-100 scale-100"
            }`}
          />

          {/* Logo/Text */}
          <h1
            className={`relative text-5xl font-bold bg-gradient-to-r from-white to-[#d3af37] bg-clip-text text-transparent animate-pulse transition-transform duration-1000 ${
              fadeOut ? "scale-105 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            The DesignerX
          </h1>
        </div>
      )}

      {/* Portfolio Content */}
      <div
        className={`transition-all duration-1000 ease-out ${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {children}
      </div>
    </>
  )
}
