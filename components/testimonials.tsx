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
    content: "Their DevOps solutions streamlined our deployment process. We now deploy 10x faster with zero downtime.",
    rating: 5,
    company: "RetailMax",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 mx-auto max-w-2xl">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-primary" />
                  </div>

                  {/* Rating Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary mx-1" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-muted-foreground mb-8 italic text-lg text-center leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="border-t pt-6 text-center">
                    <h4 className="font-semibold text-foreground text-xl">{testimonial.name}</h4>
                    <p className="text-muted-foreground mt-1">{testimonial.role}</p>
                    <p className="text-primary font-medium mt-1">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-3 hover:bg-background transition-all duration-200 shadow-lg"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border rounded-full p-3 hover:bg-background transition-all duration-200 shadow-lg"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? "bg-primary scale-110" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
