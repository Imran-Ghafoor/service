import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight, CheckCircle, Server } from "lucide-react"
import {
  CyberSecurityVector,
  AdvancedCloudVector,
  ModernCodeVector,
  ModernDatabaseVector,
  EnhancedFloatingElements,
} from "@/components/enhanced-vectors"

export default function ServicesPage() {
  const services = [
    {
      icon: <CyberSecurityVector className="w-16 h-16 text-primary" />,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from evolving cyber threats.",
      features: [
        "24/7 Security Monitoring",
        "Vulnerability Assessments",
        "Incident Response",
        "Security Training",
        "Compliance Management",
      ],
      technologies: ["Firewall Management", "SIEM", "Endpoint Protection", "Multi-Factor Authentication"],
    },
    {
      icon: <AdvancedCloudVector className="w-16 h-16 text-primary" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "Cloud Migration Strategy",
        "Infrastructure as Code",
        "Auto-scaling Solutions",
        "Disaster Recovery",
        "Cost Optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker"],
    },
    {
      icon: <ModernCodeVector className="w-16 h-16 text-primary" />,
      title: "Custom Development",
      description: "Bespoke software solutions built to your exact specifications and requirements.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration", "Legacy Modernization"],
      technologies: ["React", "Node.js", "Python", "Java", "Flutter"],
    },
    {
      icon: <ModernDatabaseVector className="w-16 h-16 text-primary" />,
      title: "Data Management",
      description: "Efficient data storage, backup, and analytics solutions for informed decisions.",
      features: [
        "Database Design",
        "Data Migration",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Governance",
      ],
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Tableau"],
    },
    {
      icon: <Server className="w-12 h-12 text-primary" />,
      title: "Infrastructure Management",
      description: "Reliable IT infrastructure setup, monitoring, and maintenance services.",
      features: [
        "Server Management",
        "Network Configuration",
        "Performance Monitoring",
        "Backup Solutions",
        "Hardware Procurement",
      ],
      technologies: ["VMware", "Hyper-V", "Linux", "Windows Server", "Nagios"],
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "IT Support & Consulting",
      description: "Strategic technology guidance and round-the-clock support services.",
      features: ["24/7 Help Desk", "Remote Support", "IT Strategy Planning", "Technology Audits", "Staff Training"],
      technologies: ["ITIL Framework", "ServiceNow", "Remote Desktop", "Documentation"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We analyze your current IT infrastructure and business requirements to identify opportunities and challenges.",
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description:
        "Our experts develop a comprehensive strategy tailored to your specific needs and budget constraints.",
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "We execute the plan with minimal disruption to your operations, ensuring smooth deployment and integration.",
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Ongoing monitoring, support, and optimization to ensure your systems perform at their best.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <EnhancedFloatingElements />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Comprehensive <span className="text-primary">IT Services</span> for Modern Business
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              From cybersecurity to cloud solutions, we provide end-to-end IT services that drive innovation and growth.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative">
              <AdvancedCloudVector className="w-32 h-32 text-primary" />
              <div className="absolute -top-4 -right-8">
                <CyberSecurityVector className="w-20 h-20 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-8">
                <ModernCodeVector className="w-24 h-24 text-secondary" />
              </div>
              <div className="absolute top-8 -left-12">
                <ModernDatabaseVector className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Service Portfolio</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of IT services designed to transform your business operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="group-hover:animate-pulse-glow transition-all duration-300">{service.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-foreground mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto group-hover:animate-pulse-glow transition-all duration-300">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Elevate Your IT Infrastructure?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how our services can transform your business operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8"
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
