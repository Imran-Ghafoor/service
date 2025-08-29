import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedNetwork, AnimatedCode, AnimatedCloud, AnimatedShield } from "@/components/animated-icons"
import { ExternalLink, Calendar, Users, ArrowRight } from "lucide-react"
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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Our <span className="text-primary">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              Explore our portfolio of successful IT transformations and see how we've helped businesses achieve their
              goals.
            </p>
          </div>
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
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Projects" ? "default" : "outline"}
                className={category === "All Projects" ? "bg-primary text-primary-foreground" : ""}
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
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="group-hover:animate-pulse-glow transition-all duration-300">{project.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                        <Badge variant="secondary">{project.category}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-2">{project.client}</p>
                      <p className="text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div className="flex gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.team}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Results:</h4>
                      <ul className="space-y-1">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8" asChild>
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
