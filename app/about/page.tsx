import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, TrendingUp, ArrowRight, CheckCircle } from "lucide-react"
import { AnimatedCounter } from "@/components/animated-counter"

export default function AboutPage() {
  const stats = [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 150, suffix: "+", label: "Happy Clients" },
    { number: 10, suffix: "+", label: "Years Experience" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ]

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation First",
      description:
        "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.",
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Client-Centric",
      description:
        "Your success is our priority. We work closely with you to understand your needs and exceed expectations.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Continuous Growth",
      description: "We believe in continuous learning and improvement to provide you with the best possible solutions.",
    },
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "15+ years in enterprise IT solutions with expertise in digital transformation and strategic planning.",
      skills: ["Strategic Planning", "Digital Transformation", "Team Leadership"],
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "Full-stack architect specializing in cloud infrastructure and scalable system design.",
      skills: ["Cloud Architecture", "System Design", "DevOps"],
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Security",
      bio: "Cybersecurity expert with certifications in ethical hacking and security compliance.",
      skills: ["Cybersecurity", "Compliance", "Risk Assessment"],
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "Senior developer with expertise in modern web technologies and mobile application development.",
      skills: ["Full-Stack Development", "Mobile Apps", "API Design"],
    },
  ]

  const milestones = [
    { year: "2014", title: "Company Founded", description: "Started as a small IT consulting firm" },
    { year: "2017", title: "Cloud Specialization", description: "Expanded into cloud migration services" },
    { year: "2019", title: "Security Focus", description: "Added comprehensive cybersecurity solutions" },
    { year: "2021", title: "AI Integration", description: "Incorporated AI and machine learning services" },
    { year: "2024", title: "Market Leader", description: "Recognized as top IT services provider in region" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">TechFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              We're a passionate team of IT professionals dedicated to transforming businesses through innovative
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <AnimatedCounter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2500}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-300"
                />
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At TechFlow, we believe technology should empower businesses, not complicate them. Our mission is to
                bridge the gap between complex IT solutions and real business value.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                We partner with organizations of all sizes to design, implement, and maintain technology solutions that
                drive growth, enhance security, and improve operational efficiency.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver innovative solutions tailored to your needs",
                  "Provide exceptional customer service and support",
                  "Maintain the highest standards of security and reliability",
                  "Foster long-term partnerships built on trust",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <Target className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <p className="text-lg font-semibold text-foreground">Driving Innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and shape our approach to client relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="group-hover:animate-pulse-glow transition-all duration-300">{value.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals passionate about delivering exceptional IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground">Key milestones in our company's growth and evolution.</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:animate-pulse-glow transition-all duration-300">
                    <span className="text-sm font-bold text-primary-foreground">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && <div className="w-0.5 h-16 bg-border mt-4"></div>}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how our expertise can help transform your business.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
