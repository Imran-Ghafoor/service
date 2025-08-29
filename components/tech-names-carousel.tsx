"use client"

export default function TechNamesCarousel() {
  const technologies = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "PHP",
    "Go",
    "React",
    "Vue.js",
    "Angular",
    "Next.js",
    "Laravel",
    "Django",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Terraform",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "REST API",
    "Microservices",
  ]

  return (
    <div className="relative overflow-hidden bg-background/50 rounded-lg py-4">
      <div className="flex animate-scroll-left-to-right">
        {/* First set of technologies */}
        {technologies.map((tech, index) => (
          <div
            key={`first-${index}`}
            className="flex-shrink-0 mx-4 px-6 py-3 bg-background rounded-full shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {technologies.map((tech, index) => (
          <div
            key={`second-${index}`}
            className="flex-shrink-0 mx-4 px-6 py-3 bg-background rounded-full shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
          >
            <span className="text-sm font-medium text-foreground whitespace-nowrap">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
