"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "TechFlow transformed our entire IT infrastructure. Their expertise and 24/7 support have been invaluable to our growth.",
    rating: 5,
    company: "TechStart Inc.",
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Solutions",
    content:
      "Outstanding cybersecurity implementation. We've had zero security incidents since partnering with TechFlow.",
    rating: 5,
    company: "DataFlow Solutions",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, CloudCorp",
    content:
      "Their cloud migration service was seamless. We saw 40% cost reduction and improved performance immediately.",
    rating: 5,
    company: "CloudCorp",
  },
  {
    name: "David Thompson",
    role: "IT Manager, FinanceHub",
    content:
      "Exceptional database management and optimization. Our system performance improved by 60% after their intervention.",
    rating: 5,
    company: "FinanceHub",
  },
  {
    name: "Lisa Wang",
    role: "Founder, StartupLab",
    content:
      "TechFlow's web development team delivered beyond expectations. Our new platform has increased user engagement by 85%.",
    rating: 5,
    company: "StartupLab",
  },
  {
    name: "Robert Martinez",
    role: "VP Technology, RetailMax",
    content:
      "Their DevOps solutions streamlined our deployment process. We now deploy 10x faster with zero downtime.",
    rating: 5,
    company: "RetailMax",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  // Helper to get correct index for circular rotation
  const getIndex = (index: number) => {
    return (index + testimonials.length) % testimonials.length
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto perspective-[1200px]">
      <div className="flex items-center justify-center space-x-4 overflow-hidden">
        {[currentIndex - 1, currentIndex, currentIndex + 1].map((i, position) => {
          const testimonial = testimonials[getIndex(i)]
          const isCenter = position === 1

          return (
            <div
              key={i}
              className={`
                w-1/3 flex-shrink-0 transition-all duration-700 ease-in-out transform-gpu
                ${isCenter ? "scale-100 opacity-100 z-10 translate-x-0 rotate-y-0" : "scale-90 opacity-50 z-0"}
                ${position === 0 ? "-translate-x-6 -rotate-y-10" : ""}
                ${position === 2 ? "translate-x-6 rotate-y-10" : ""}
              `}
            >
              <Card
                className={`
                  relative overflow-hidden transition-all duration-500 mx-auto
                  ${isCenter ? "hover:scale-105 hover:shadow-2xl" : "pointer-events-none"}
                `}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-30">
                    <Quote className="w-12 h-12 text-primary" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary mx-0.5" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground mb-4 italic text-center text-base leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t pt-4 text-center">
                    <h4 className="font-semibold text-foreground text-lg">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                    <p className="text-primary font-medium text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )
        })}
      </div>

    {/* Controls */}
<button
  onClick={prevSlide}
  className="absolute -left-12 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-3 hover:bg-background transition-all duration-200 shadow-md"
  aria-label="Previous testimonial"
>
  <ChevronLeft className="w-6 h-6 text-foreground" />
</button>

<button
  onClick={nextSlide}
  className="absolute -right-12 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-3 hover:bg-background transition-all duration-200 shadow-md" 
  aria-label="Next testimonial"
>
  <ChevronRight className="w-6 h-6 text-foreground" />
</button>

    </div>
  )
}
