"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ExternalLink,
  Github,
  Play,
  X,
  Code,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
} from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  features: string[]
  results: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Revolution",
    category: "Web Development",
    description: "Modern e-commerce solution with AI-powered recommendations",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and advanced AI algorithms for personalized shopping experiences. Features include real-time inventory management, secure payment processing, and intelligent product recommendations.",
    image: "/modern-ecommerce-dashboard-with-charts-and-analyti.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Redis", "AI/ML"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["AI-Powered Recommendations", "Real-time Inventory", "Multi-payment Gateway", "Advanced Analytics"],
    results: ["300% increase in conversion rate", "50% reduction in cart abandonment", "99.9% uptime achieved"],
  },
  {
    id: 2,
    title: "Healthcare Management System",
    category: "Healthcare Tech",
    description: "Comprehensive patient management and telemedicine platform",
    longDescription:
      "A HIPAA-compliant healthcare management system that streamlines patient care, appointment scheduling, and telemedicine consultations. Built with security and scalability as top priorities.",
    image: "/healthcare-management-system-dashboard-with-patien.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "AWS", "Docker"],
    liveUrl: "https://example.com",
    features: ["HIPAA Compliance", "Telemedicine Integration", "Electronic Health Records", "Appointment Scheduling"],
    results: [
      "40% improvement in patient satisfaction",
      "60% reduction in administrative tasks",
      "100% HIPAA compliance",
    ],
  },
  {
    id: 3,
    title: "FinTech Mobile Application",
    category: "Mobile Development",
    description: "Secure banking app with biometric authentication",
    longDescription:
      "A cutting-edge mobile banking application featuring advanced security measures, real-time transactions, and intuitive user experience. Supports multiple currencies and international transfers.",
    image: "/fintech-mobile-banking-app-interface-with-security.png",
    technologies: ["React Native", "Node.js", "PostgreSQL", "Blockchain", "Biometrics"],
    liveUrl: "https://example.com",
    features: ["Biometric Authentication", "Real-time Transactions", "Multi-currency Support", "Blockchain Security"],
    results: ["2M+ active users", "99.99% transaction success rate", "Bank-grade security certified"],
  },
  {
    id: 4,
    title: "AI-Powered Analytics Dashboard",
    category: "Data Analytics",
    description: "Real-time business intelligence and predictive analytics",
    longDescription:
      "An advanced analytics platform that provides real-time insights and predictive analytics for enterprise clients. Features machine learning algorithms for trend prediction and automated reporting.",
    image: "/ai-analytics-dashboard-with-charts-graphs-and-data.png",
    technologies: ["Python", "TensorFlow", "React", "D3.js", "Apache Kafka", "Elasticsearch"],
    features: ["Predictive Analytics", "Real-time Processing", "Custom Dashboards", "Automated Reporting"],
    results: ["85% accuracy in predictions", "70% faster decision making", "500% ROI for clients"],
  },
  {
    id: 5,
    title: "Smart IoT Infrastructure",
    category: "IoT Solutions",
    description: "Connected device management for smart cities",
    longDescription:
      "A comprehensive IoT platform for managing smart city infrastructure including traffic lights, environmental sensors, and public utilities. Features real-time monitoring and automated responses.",
    image: "/smart-city-iot-dashboard-with-sensors-and-monitori.png",
    technologies: ["Python", "MQTT", "InfluxDB", "Grafana", "Kubernetes", "Edge Computing"],
    features: ["Real-time Monitoring", "Automated Responses", "Scalable Architecture", "Edge Computing"],
    results: ["30% reduction in energy consumption", "50% improvement in traffic flow", "24/7 monitoring coverage"],
  },
  {
    id: 6,
    title: "Cybersecurity Command Center",
    category: "Cybersecurity",
    description: "Advanced threat detection and response system",
    longDescription:
      "A state-of-the-art cybersecurity platform that provides real-time threat detection, automated incident response, and comprehensive security analytics for enterprise environments.",
    image: "/cybersecurity-command-center-with-threat-monitorin.png",
    technologies: ["Python", "Elasticsearch", "Kibana", "Machine Learning", "SIEM", "Threat Intelligence"],
    features: ["Real-time Threat Detection", "Automated Response", "Threat Intelligence", "Compliance Reporting"],
    results: ["99.9% threat detection rate", "80% faster incident response", "Zero successful breaches"],
  },
]

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Healthcare Tech",
  "Data Analytics",
  "IoT Solutions",
  "Cybersecurity",
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Development":
        return <Globe className="w-4 h-4" />
      case "Mobile Development":
        return <Smartphone className="w-4 h-4" />
      case "Healthcare Tech":
        return <Users className="w-4 h-4" />
      case "Data Analytics":
        return <TrendingUp className="w-4 h-4" />
      case "IoT Solutions":
        return <Zap className="w-4 h-4" />
      case "Cybersecurity":
        return <Shield className="w-4 h-4" />
      default:
        return <Code className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Award-Winning Projects
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Our <span className="golden-gradient-text">Creative</span> Portfolio
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Discover our innovative solutions that have transformed businesses across industries. Each project
              represents our commitment to excellence and cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 animate-glow-pulse">
                Explore Projects
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 bg-transparent border-accent text-accent hover:bg-accent hover:text-white"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 animate-slide-in-left">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "hover:bg-accent/10 hover:text-accent hover:border-accent border-accent/50 text-foreground"
                } transition-all duration-300`}
              >
                {getCategoryIcon(category)}
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-scale-in border-0 metallic-card backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Play className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">{project.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:golden-gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-accent/10 text-accent">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs bg-accent/10 text-accent">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="metallic-gradient rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in border border-accent/20">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>
              <Badge className="absolute bottom-4 left-4 bg-accent text-accent-foreground">
                {selectedProject.category}
              </Badge>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold golden-gradient-text mb-4">{selectedProject.title}</h2>
              <p className="text-muted-foreground mb-6 text-lg">{selectedProject.longDescription}</p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Code className="w-5 h-5 text-accent" />
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-accent" />
                    Results Achieved
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} className="bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.liveUrl && (
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Site
                  </Button>
                )}
                {selectedProject.githubUrl && (
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-white bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent via-accent to-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Next Project?</h2>
          <p className="text-xl text-white/90 mb-8">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-accent px-8" asChild>
            <Link href="/consultation">
              Start Your Project
              <ExternalLink className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
