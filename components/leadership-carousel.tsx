"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react"
import Image from "next/image"

const leaders = [
  {
    name: "John Anderson",
    role: "Chief Executive Officer",
    image: "/professional-ceo-headshot-business-suit-confident-.png",
    linkedin: "https://linkedin.com/in/johnanderson",
  },
  {
    name: "Sarah Mitchell",
    role: "Chief Technology Officer",
    image: "/professional-cto-woman-headshot-business-attire-te.png",
    linkedin: "https://linkedin.com/in/sarahmitchell",
  },
  {
    name: "David Kim",
    role: "Head of Cybersecurity",
    image: "/professional-cybersecurity-expert-headshot-busines.png",
    linkedin: "https://linkedin.com/in/davidkim",
  },
  {
    name: "Lisa Thompson",
    role: "VP of Cloud Solutions",
    image: "/professional-vp-woman-headshot-business-attire-clo.png",
    linkedin: "https://linkedin.com/in/lisathompson",
  },
  {
    name: "Robert Garcia",
    role: "Director of Development",
    image: "/professional-development-director-headshot-busines.png",
    linkedin: "https://linkedin.com/in/robertgarcia",
  },
  {
    name: "Amanda Wilson",
    role: "Head of Operations",
    image: "/professional-operations-head-woman-headshot-busine.png",
    linkedin: "https://linkedin.com/in/amandawilson",
  },
  {
    name: "James Brown",
    role: "Senior Solutions Architect",
    image: "/professional-architect-headshot-business-suit-tech.png",
    linkedin: "https://linkedin.com/in/jamesbrown",
  },
  {
    name: "Maria Rodriguez",
    role: "VP of Client Relations",
    image: "/professional-vp-client-relations-woman-headshot-bu.png",
    linkedin: "https://linkedin.com/in/mariarodriguez",
  },
]

export default function LeadershipCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const membersPerPage = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1
  const maxIndex = leaders.length - membersPerPage

  const nextMember = () => {
    setCurrentIndex((prev) => Math.min(prev + membersPerPage, maxIndex))
  }

  const prevMember = () => {
    setCurrentIndex((prev) => Math.max(prev - membersPerPage, 0))
  }

  const visibleLeaders = leaders.slice(currentIndex, currentIndex + membersPerPage)

  return (
    <div className="relative">
      <div className="absolute top-0 right-0 z-10 flex gap-2 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevMember}
          disabled={currentIndex === 0}
          className="hover:bg-primary hover:text-primary-foreground bg-background/80 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextMember}
          disabled={currentIndex >= maxIndex}
          className="hover:bg-primary hover:text-primary-foreground bg-background/80 backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-16">
        {visibleLeaders.map((leader, index) => (
          <div key={currentIndex + index} className="flex flex-col items-center group">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={leader.image || "/placeholder.svg"}
                alt={leader.name}
                width={280}
                height={280}
                className="w-70 h-70 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold text-foreground mb-2">{leader.name}</h3>
              <p className="text-muted-foreground mb-4">{leader.role}</p>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open(leader.linkedin, "_blank")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: Math.ceil(leaders.length / membersPerPage) }).map((_, pageIndex) => (
          <button
            key={pageIndex}
            onClick={() => setCurrentIndex(pageIndex * membersPerPage)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / membersPerPage) === pageIndex
                ? "bg-primary w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
