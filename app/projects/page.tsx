"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedNetwork, AnimatedCode, AnimatedCloud, AnimatedShield } from "@/components/animated-icons"
import { Calendar, Users, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Enterprise Cloud Migration",
      client: "TechCorp Industries",
      category: "Cloud Solutions",
      duration: "6 months",
      team: "8 specialists",
      description: "Complete migration of legacy systems to AWS cloud infrastructure with 99.9% uptime maintained.",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      results: ["40% cost reduction", "3x faster deployment", "Enhanced security"],
      icon: <AnimatedCloud className="w-16 h-16 text-primary" />,
    },
    {
      title: "Cybersecurity Overhaul",
      client: "Financial Services Inc",
      category: "Security",
      duration: "4 months",
      team: "6 specialists",
      description: "Comprehensive security audit and implementation of advanced threat protection systems.",
      technologies: ["SIEM", "Zero Trust", "Multi-Factor Auth", "Endpoint Protection"],
      results: ["100% compliance achieved", "Zero security incidents", "SOC 2 certification"],
      icon: <AnimatedShield className="w-16 h-16 text-primary" />,
    },
    {
      title: "Custom ERP Development",
      client: "Manufacturing Solutions",
      category: "Custom Development",
      duration: "8 months",
      team: "12 specialists",
      description: "Built from scratch ERP system tailored to manufacturing workflows and inventory management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis"],
      results: ["50% efficiency increase", "Real-time inventory", "Automated reporting"],
      icon: <AnimatedCode className="w-16 h-16 text-primary" />,
    },
    {
      title: "Network Infrastructure Redesign",
      client: "Healthcare Network",
      category: "Infrastructure",
      duration: "5 months",
      team: "10 specialists",
      description: "Complete network redesign for multi-location healthcare provider with HIPAA compliance.",
      technologies: ["Cisco", "VMware", "VPN", "Load Balancers"],
      results: ["99.99% uptime", "HIPAA compliant", "30% faster connectivity"],
      icon: <AnimatedNetwork className="w-16 h-16 text-primary" />,
    },
  ]

  const categories = ["All Projects", "Cloud Solutions", "Security", "Custom Development", "Infrastructure"]
  const [activeCategory, setActiveCategory] = useState("All Projects")

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Success Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore our portfolio of successful IT transformations and see how we've helped businesses achieve their goals.
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="flex flex-row items-center gap-4">
                  {project.icon}
                  <div>
                    <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{project.client}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex items-center gap-6 text-sm">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" /> {project.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" /> {project.team}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i}>{result}</li>
                    ))}
                  </ul>

                  <Button variant="link" asChild className="p-0">
                    <Link href="/case-study">
                      View Case Study <ExternalLink className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button
            size="lg"
            className="hover:bg-transparent bg-[#d3af37] px-8"
            asChild
          >
            <Link href="/consultation">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
