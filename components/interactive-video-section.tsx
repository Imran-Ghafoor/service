"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Pause } from "lucide-react"
import Link from "next/link"

export default function InteractiveVideoSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMountedRef = useRef(true)

  useEffect(() => {
    isMountedRef.current = true
    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)))
      setIsScrolled(scrollProgress > 0.4)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      isMountedRef.current = false
      window.removeEventListener("scroll", handleScroll)
      videoRef.current?.pause()
    }
  }, [])

  // const togglePlay = async () => {
  //   if (!videoRef.current || !isMountedRef.current) return
  //   try {
  //     if (isPlaying) {
  //       videoRef.current.pause()
  //       setIsPlaying(false)
  //     } else {
  //       const p = videoRef.current.play()
  //       if (p !== undefined) await p
  //       if (isMountedRef.current) setIsPlaying(true)
  //     }
  //   } catch {
  //     if (isMountedRef.current) setIsPlaying(false)
  //   }
  // }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-800 via-zinc-900 to-slate-700 overflow-hidden"
    >
      {/* floating dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-500/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-amber-400/10 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-amber-600/10 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* ✅ Mobile: stack vertically; Desktop: side-by-side */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Video (full width on mobile) */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover"
                autoPlay
                muted
                loop
                playsInline
                // onPlay={() => setIsPlaying(true)}
                // onPause={() => setIsPlaying(false)}
              >
                <source
                  src="/video/meeting2.mp4"
                  type="video/mp4"
                />
              </video>

              {/* play/pause only (no CTA inside video) */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <button
                  // onClick={togglePlay}
                  className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
                >
                  {isPlaying ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white ml-0.5" />}
                </button> */}
              </div>
            </div>
          </div>

          {/* Content (single block for all breakpoints) */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } flex flex-col justify-center text-center lg:text-left`}
          >
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mb-6 mx-auto lg:mx-0" />
            <blockquote className="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">
              "Success is not just about technology, it's about transforming possibilities into reality."
            </blockquote>
            <p className="text-lg text-gray-300 mb-8">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative IT solutions.
            </p>

            {/* ✅ Only CTA lives here */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-semibold px-8 self-center lg:self-start"
              asChild
            >
              <Link href="/consultation">
                Join Our Success Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            {/* optional metrics */}
            <div className="mt-8 grid grid-cols-2 gap-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">500+</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Projects</p>
                  <p className="text-sm text-gray-400">Across industries</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <span className="text-amber-400 font-bold text-lg">98%</span>
                </div>
                <div>
                  <p className="font-semibold text-white">Satisfaction</p>
                  <p className="text-sm text-gray-400">Consistently high</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
