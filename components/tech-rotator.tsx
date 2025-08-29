"use client"

import { useEffect, useState } from "react"

const technologies = [
  { name: "React", logo: "/react-logo-blue.png" },
  { name: "Next.js", logo: "/nextjs-logo.png" },
  { name: "TypeScript", logo: "/typescript-logo-blue.png" },
  { name: "Node.js", logo: "/node-js-logo-green.png" },
  { name: "Python", logo: "/python-logo-yellow-and-blue.png" },
  { name: "AWS", logo: "/aws-logo-orange.png" },
  { name: "Docker", logo: "/docker-logo.png" },
  { name: "Kubernetes", logo: "/kubernetes-logo-blue-wheel.png" },
  { name: "MongoDB", logo: "/mongodb-logo-green.png" },
  { name: "PostgreSQL", logo: "/postgresql-logo-blue.png" },
]

export default function TechRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % technologies.length)
    }, 2000) // Rotate every 2 seconds

    return () => clearInterval(interval)
  }, [])

  const getVisibleTechs = () => {
    const visible = []
    for (let i = 0; i < 5; i++) {
      const index = (currentIndex + i) % technologies.length
      visible.push(technologies[index])
    }
    return visible
  }

  return (
    <div className="flex justify-center items-center space-x-8 overflow-hidden">
      {getVisibleTechs().map((tech, index) => (
        <div
          key={`${tech.name}-${currentIndex}-${index}`}
          className={`transition-all duration-500 transform ${
            index === 2
              ? "scale-110 opacity-100"
              : index === 1 || index === 3
                ? "scale-100 opacity-80"
                : "scale-90 opacity-60"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-background rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300 border border-border">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="w-10 h-10 object-contain"
              />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
