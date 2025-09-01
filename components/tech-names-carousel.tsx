"use client"

export default function TechNamesCarousel() {
  const technologies = [
    "JavaScript", "Python", "Java", "C#", "PHP", "Go",
    "React", "Vue.js", "Angular", "Next.js", "Laravel", "Django",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform",
    "MongoDB", "PostgreSQL", "Redis", "GraphQL", "REST API", "Microservices",
  ]

  return (
    <div className="relative overflow-hidden bg-background/50 rounded-lg py-4">
      {/* apply pause-on-hover to the scrolling container */}
      <div className="flex animate-scroll-left-to-right pause-on-hover">
        {[...technologies, ...technologies].map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-4 px-6 py-3 bg-background rounded-full border border-border 
                       transition-all duration-300 hover-golden"
          >
            <span className="text-sm font-medium text-foreground whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
