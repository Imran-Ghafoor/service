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
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    let frame: number
    const animate = () => {
      setOffset((prev) => (prev - 1) % (technologies.length * 200)) // 200px per item width
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className="relative w-full overflow-hidden h-[200px] flex items-center">
      <div
        className="flex"
        style={{
          transform: `translateX(${offset}px)`,
          transition: "transform 0.05s linear",
        }}
      >
        {[...technologies, ...technologies].map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center mx-10"
            style={{ minWidth: "100px" }}
          >
            <div className="w-24 h-24 bg-background rounded-2xl shadow-md flex items-center justify-center border border-border">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="w-16 h-16 object-contain"
              />
            </div>
            <span className="text-lg font-semibold text-muted-foreground mt-3">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
