import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"
import { ContactVector } from "@/components/contact-vector"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Office Location",
      details: ["123 Tech Street", "Innovation District", "San Francisco, CA 94105"],
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone Numbers",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Toll-free: 1-800-TECHFLOW"],
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Addresses",
      details: ["hello@techflow.com", "support@techflow.com", "careers@techflow.com"],
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Support Only"],
    },
  ]

  const services = [
    "Cybersecurity Solutions",
    "Cloud Migration",
    "Custom Development",
    "Data Management",
    "Infrastructure Management",
    "IT Support & Consulting",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
                Get in <span className="text-primary">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl text-pretty">
                Ready to transform your business with cutting-edge IT solutions? Let's start the conversation.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <ContactVector />
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

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interest</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service.toLowerCase().replace(/\s+/g, "-")}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="budget">Project Budget</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-10k">Under $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="over-100k">Over $100,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing..."
                    rows={5}
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </Button>

                <p className="text-sm text-muted-foreground">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="group hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="group-hover:animate-pulse-glow transition-all duration-300">{info.icon}</div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 mx-auto mb-4 animate-pulse-glow" />
                  <h3 className="text-xl font-semibold mb-2">Quick Response Guarantee</h3>
                  <p className="text-primary-foreground/90">
                    We respond to all inquiries within 24 hours during business days. For urgent matters, call our
                    emergency line.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Our Office</h2>
            <p className="text-lg text-muted-foreground">Located in the heart of San Francisco's Innovation District</p>
          </div>

          <Card className="overflow-hidden">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  123 Tech Street, Innovation District
                  <br />
                  San Francisco, CA 94105
                </p>
                <Button className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">Get Directions</Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
