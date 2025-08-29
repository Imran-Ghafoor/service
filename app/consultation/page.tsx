"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Cloud,
  Shield,
  Database,
  Smartphone,
  Globe,
  Users,
  Calendar,
  DollarSign,
  Clock,
  Star,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react"

interface FormData {
  // Step 1: Project Details
  projectName: string
  projectDescription: string
  industry: string
  companySize: string

  // Step 2: Service Selection
  services: string[]

  // Step 3: Timeline & Budget
  timeline: string
  budget: string
  urgency: string

  // Step 4: Contact Information
  name: string
  email: string
  phone: string
  company: string
}

const services = [
  {
    id: "web-dev",
    name: "Web Development",
    icon: <Globe className="w-5 h-5" />,
    description: "Custom websites and web applications",
  },
  {
    id: "mobile-dev",
    name: "Mobile Development",
    icon: <Smartphone className="w-5 h-5" />,
    description: "iOS and Android applications",
  },
  {
    id: "cloud",
    name: "Cloud Solutions",
    icon: <Cloud className="w-5 h-5" />,
    description: "Cloud migration and infrastructure",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    icon: <Shield className="w-5 h-5" />,
    description: "Security audits and protection",
  },
  {
    id: "data",
    name: "Data Management",
    icon: <Database className="w-5 h-5" />,
    description: "Database design and analytics",
  },
  {
    id: "consulting",
    name: "IT Consulting",
    icon: <Users className="w-5 h-5" />,
    description: "Strategic technology guidance",
  },
]

const industries = [
  "Healthcare",
  "Finance",
  "E-commerce",
  "Education",
  "Manufacturing",
  "Real Estate",
  "Technology",
  "Non-profit",
  "Government",
  "Other",
]

const companySizes = ["1-10 employees", "11-50 employees", "51-200 employees", "201-1000 employees", "1000+ employees"]

const timelines = [
  { value: "1-2 months", label: "1-2 months", icon: <Zap className="w-4 h-4" /> },
  { value: "3-6 months", label: "3-6 months", icon: <Target className="w-4 h-4" /> },
  { value: "6-12 months", label: "6-12 months", icon: <Calendar className="w-4 h-4" /> },
  { value: "12+ months", label: "12+ months", icon: <Lightbulb className="w-4 h-4" /> },
]

const budgets = ["$10K - $25K", "$25K - $50K", "$50K - $100K", "$100K - $250K", "$250K+"]

export default function ConsultationPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    projectName: "",
    projectDescription: "",
    industry: "",
    companySize: "",
    services: [],
    timeline: "",
    budget: "",
    urgency: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }))
  }

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    // Handle form submission
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Tell Us About Your Project</h2>
              <p className="text-muted-foreground">Let's start with the basics of what you're looking to build</p>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="projectName" className="text-base font-medium">
                  Project Name
                </Label>
                <Input
                  id="projectName"
                  placeholder="e.g., E-commerce Platform, Mobile App, etc."
                  value={formData.projectName}
                  onChange={(e) => setFormData((prev) => ({ ...prev, projectName: e.target.value }))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="projectDescription" className="text-base font-medium">
                  Project Description
                </Label>
                <Textarea
                  id="projectDescription"
                  placeholder="Describe your project goals, key features, and what success looks like..."
                  value={formData.projectDescription}
                  onChange={(e) => setFormData((prev) => ({ ...prev, projectDescription: e.target.value }))}
                  className="mt-2 min-h-[120px]"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label className="text-base font-medium">Industry</Label>
                  <RadioGroup
                    value={formData.industry}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, industry: value }))}
                    className="mt-2"
                  >
                    {industries.map((industry) => (
                      <div key={industry} className="flex items-center space-x-2">
                        <RadioGroupItem value={industry} id={industry} />
                        <Label htmlFor={industry} className="text-sm">
                          {industry}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base font-medium">Company Size</Label>
                  <RadioGroup
                    value={formData.companySize}
                    onValueChange={(value) => setFormData((prev) => ({ ...prev, companySize: value }))}
                    className="mt-2"
                  >
                    {companySizes.map((size) => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={size} />
                        <Label htmlFor={size} className="text-sm">
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Select Your Services</h2>
              <p className="text-muted-foreground">Choose the services that best match your project needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                    formData.services.includes(service.id) ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg ${
                          formData.services.includes(service.id)
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                      {formData.services.includes(service.id) && (
                        <CheckCircle className="w-5 h-5 text-primary animate-bounce-in" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {formData.services.length > 0 && (
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <h4 className="font-medium text-foreground mb-2">Selected Services:</h4>
                <div className="flex flex-wrap gap-2">
                  {formData.services.map((serviceId) => {
                    const service = services.find((s) => s.id === serviceId)
                    return (
                      <Badge key={serviceId} className="bg-primary text-primary-foreground">
                        {service?.name}
                      </Badge>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-6 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Timeline & Budget</h2>
              <p className="text-muted-foreground">Help us understand your project timeline and investment range</p>
            </div>

            <div className="space-y-6">
              <div>
                <Label className="text-base font-medium mb-4 block">Project Timeline</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  {timelines.map((timeline) => (
                    <Card
                      key={timeline.value}
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        formData.timeline === timeline.value ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setFormData((prev) => ({ ...prev, timeline: timeline.value }))}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg ${
                              formData.timeline === timeline.value
                                ? "bg-primary text-primary-foreground"
                                : "bg-muted text-muted-foreground"
                            }`}
                          >
                            {timeline.icon}
                          </div>
                          <span className="font-medium">{timeline.label}</span>
                          {formData.timeline === timeline.value && (
                            <CheckCircle className="w-5 h-5 text-primary ml-auto animate-bounce-in" />
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Budget Range</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}
                  className="mt-4 grid md:grid-cols-2 gap-4"
                >
                  {budgets.map((budget) => (
                    <div key={budget} className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value={budget} id={budget} />
                      <Label htmlFor={budget} className="flex items-center gap-2 cursor-pointer">
                        <DollarSign className="w-4 h-4 text-primary" />
                        {budget}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="text-base font-medium">Project Urgency</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                  className="mt-4"
                >
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="low" id="low" />
                    <Label htmlFor="low" className="flex items-center gap-2 cursor-pointer">
                      <Clock className="w-4 h-4 text-green-500" />
                      Low - We can wait for the right timeline
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium" className="flex items-center gap-2 cursor-pointer">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      Medium - Would like to start within 2-3 months
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="high" id="high" />
                    <Label htmlFor="high" className="flex items-center gap-2 cursor-pointer">
                      <Clock className="w-4 h-4 text-red-500" />
                      High - Need to start ASAP
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">Almost done! Let us know how to reach you</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-base font-medium">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-base font-medium">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-base font-medium">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-base font-medium">
                  Company Name
                </Label>
                <Input
                  id="company"
                  placeholder="Your Company Inc."
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="mt-2"
                />
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-4">Project Summary</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong>Project:</strong> {formData.projectName || "Not specified"}
                </div>
                <div>
                  <strong>Industry:</strong> {formData.industry || "Not specified"}
                </div>
                <div>
                  <strong>Services:</strong>{" "}
                  {formData.services.length > 0
                    ? formData.services.map((id) => services.find((s) => s.id === id)?.name).join(", ")
                    : "None selected"}
                </div>
                <div>
                  <strong>Timeline:</strong> {formData.timeline || "Not specified"}
                </div>
                <div>
                  <strong>Budget:</strong> {formData.budget || "Not specified"}
                </div>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20">
        <div className="absolute inset-0 bg-[url('/abstract-tech-pattern.png')] opacity-5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Free Consultation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Start Your <span className="text-primary">Dream Project</span> Today
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Tell us about your vision and we'll create a custom solution that transforms your business. Get a detailed
              proposal in 24 hours.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-primary">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div
                className="bg-primary h-2 rounded-full transition-all duration-500 animate-progress-fill"
                style={{ "--progress-width": `${progress}%` } as React.CSSProperties}
              ></div>
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

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              {renderStep()}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="px-6 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                    Next Step
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                  >
                    Submit Project Request
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose TechFlow?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">24-Hour Response</h3>
              <p className="text-muted-foreground">Get your detailed project proposal within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Work with certified professionals and industry experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">100% Satisfaction</h3>
              <p className="text-muted-foreground">Money-back guarantee if you're not completely satisfied</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
