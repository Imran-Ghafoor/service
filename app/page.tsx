import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Zap, Users, CheckCircle, Award, Clock, Shield, Lightbulb } from "lucide-react"
import TechRotator from "@/components/tech-rotator"
import TechNamesCarousel from "@/components/tech-names-carousel"
import Testimonials from "@/components/testimonials"
import LeadershipCarousel from "@/components/leadership-carousel"
import { TestimonialVectors } from "@/components/testimonial-vectors"
import {
  ModernCodeVector,
  CreativeDesignVector,
  AdvancedCloudVector,
  CyberSecurityVector,
  ModernDatabaseVector,
  EnhancedFloatingElements,
} from "@/components/enhanced-vectors"
import Link from "next/link"
import InteractiveVideoSection from "@/components/interactive-video-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <EnhancedFloatingElements />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Transform Your Business with
              <span className="text-primary"> Cutting-Edge</span> IT Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              We deliver innovative technology solutions that drive growth, enhance security, and streamline operations
              for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8" asChild>
                <Link href="/consultation">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>

          <div className="mt-16 flex justify-center">
            <div className="relative">
              <ModernCodeVector className="w-40 h-40 text-primary" />
              <div className="absolute -top-6 -right-6">
                <CreativeDesignVector className="w-20 h-20 text-accent" />
              </div>
              <div className="absolute -bottom-6 -left-6">
                <CyberSecurityVector className="w-24 h-24 text-primary" />
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
        <div
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to meet your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <CyberSecurityVector className="w-16 h-16 text-primary" />,
                title: "Cybersecurity",
                description: "Protect your business with advanced security solutions and threat monitoring.",
              },
              {
                icon: <AdvancedCloudVector className="w-16 h-16 text-primary" />,
                title: "Cloud Solutions",
                description: "Scalable cloud infrastructure and migration services for modern businesses.",
              },
              {
                icon: <ModernCodeVector className="w-16 h-16 text-primary" />,
                title: "Custom Development",
                description: "Bespoke software solutions built to your exact specifications and requirements.",
              },
              {
                icon: <ModernDatabaseVector className="w-16 h-16 text-primary" />,
                title: "Data Management",
                description: "Efficient data storage, backup, and analytics solutions for informed decisions.",
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "IT Consulting",
                description: "Strategic technology guidance to optimize your IT infrastructure and processes.",
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "24/7 Support",
                description: "Round-the-clock technical support to keep your systems running smoothly.",
              },
            ].map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:animate-pulse-glow transition-all duration-300">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We stand out from the competition with our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-primary" />,
                title: "10+ Years Experience",
                description:
                  "Proven track record with over a decade of delivering successful IT solutions across various industries.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-primary" />,
                title: "99.9% Uptime Guarantee",
                description:
                  "Reliable infrastructure and proactive monitoring ensure your systems stay online when you need them most.",
              },
              {
                icon: <Clock className="w-8 h-8 text-primary" />,
                title: "24/7 Expert Support",
                description:
                  "Round-the-clock technical assistance from certified professionals who understand your business needs.",
              },
              {
                icon: <Shield className="w-8 h-8 text-primary" />,
                title: "Enterprise-Grade Security",
                description:
                  "Advanced security protocols and compliance standards to protect your valuable data and systems.",
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-primary" />,
                title: "Innovative Solutions",
                description:
                  "Cutting-edge technology implementations that give you a competitive advantage in your market.",
              },
            ].map((point, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
              >
                <CardContent className="p-6">
                  <div className="mb-4 group-hover:animate-pulse-glow transition-all duration-300">{point.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{point.title}</h3>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology We Use section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies We Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build robust solutions
            </p>
          </div>

          <div className="mb-12">
            <TechRotator />
          </div>

          <TechNamesCarousel />
        </div>
      </section>

      {/* Leadership Members section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Leadership Members!</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the experienced professionals leading TechFlow to deliver exceptional IT solutions.
            </p>
          </div>
          <LeadershipCarousel />
        </div>
      </section>

      {/* Interactive Video Section */}
      <InteractiveVideoSection />

      {/* Testimonials section */}
      <section className="py-20 bg-background relative">
        <TestimonialVectors />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Let's discuss how our IT solutions can drive your success forward.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8" asChild>
            <Link href="/consultation">
              Schedule a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
