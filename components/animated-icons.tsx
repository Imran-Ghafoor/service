"use client"

import { useEffect, useState } from "react"

export function AnimatedCode({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Animated brackets */}
      <path
        d="M25 20 L15 30 L15 50 L15 70 L25 80"
        stroke="url(#codeGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,100;50,50;100,0;50,50;0,100"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      <path
        d="M75 20 L85 30 L85 50 L85 70 L75 80"
        stroke="url(#codeGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,100;50,50;100,0;50,50;0,100"
          dur="3s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </path>

      {/* Animated code lines */}
      <rect x="30" y="35" width="20" height="3" fill="currentColor" opacity="0.6">
        <animate attributeName="width" values="20;35;20" dur="2s" repeatCount="indefinite" />
      </rect>
      <rect x="30" y="45" width="25" height="3" fill="currentColor" opacity="0.4">
        <animate attributeName="width" values="25;40;25" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <rect x="30" y="55" width="15" height="3" fill="currentColor" opacity="0.8">
        <animate attributeName="width" values="15;30;15" dur="1.8s" repeatCount="indefinite" />
      </rect>
      <rect x="30" y="65" width="30" height="3" fill="currentColor" opacity="0.5">
        <animate attributeName="width" values="30;45;30" dur="2.2s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}

export function AnimatedCloud({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Main cloud shape */}
      <path
        d="M25 60 C15 60 10 50 15 40 C20 30 35 25 45 35 C50 20 70 20 75 35 C85 30 95 40 90 50 C95 60 85 70 75 65 L25 65 Z"
        fill="url(#cloudGradient)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;2,-1;0,0;-2,1;0,0"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Animated data points */}
      <circle cx="30" cy="45" r="2" fill="currentColor" opacity="0.8">
        <animate attributeName="cy" values="45;40;45" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="50" r="1.5" fill="currentColor" opacity="0.6">
        <animate attributeName="cy" values="50;45;50" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.3;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="48" r="2" fill="currentColor" opacity="0.7">
        <animate attributeName="cy" values="48;43;48" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.4;0.7" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function AnimatedShield({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Shield outline */}
      <path
        d="M50 10 C35 15 20 20 20 35 C20 60 35 80 50 90 C65 80 80 60 80 35 C80 20 65 15 50 10 Z"
        stroke="url(#shieldGradient)"
        strokeWidth="3"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,300;150,150;300,0;150,150;0,300"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Checkmark */}
      <path
        d="M35 45 L45 55 L65 35"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,50;25,25;50,0"
          dur="2s"
          repeatCount="indefinite"
          begin="1s"
        />
      </path>

      {/* Pulsing center */}
      <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.3">
        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function AnimatedDatabase({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Database cylinders */}
      <ellipse cx="50" cy="25" rx="25" ry="8" fill="url(#dbGradient)" />
      <rect x="25" y="25" width="50" height="15" fill="url(#dbGradient)" />
      <ellipse cx="50" cy="40" rx="25" ry="8" fill="url(#dbGradient)" />

      <ellipse cx="50" cy="50" rx="25" ry="8" fill="url(#dbGradient)" />
      <rect x="25" y="50" width="50" height="15" fill="url(#dbGradient)" />
      <ellipse cx="50" cy="65" rx="25" ry="8" fill="url(#dbGradient)" />

      <ellipse cx="50" cy="75" rx="25" ry="8" fill="url(#dbGradient)" />
      <rect x="25" y="75" width="50" height="10" fill="url(#dbGradient)" />
      <ellipse cx="50" cy="85" rx="25" ry="8" fill="url(#dbGradient)" />

      {/* Animated data flow */}
      <circle cx="35" cy="32" r="1.5" fill="currentColor">
        <animate attributeName="cy" values="32;57;82;32" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="32" r="1.5" fill="currentColor">
        <animate attributeName="cy" values="32;57;82;32" dur="3s" repeatCount="indefinite" begin="0.5s" />
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" begin="0.5s" />
      </circle>
      <circle cx="65" cy="32" r="1.5" fill="currentColor">
        <animate attributeName="cy" values="32;57;82;32" dur="3s" repeatCount="indefinite" begin="1s" />
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" begin="1s" />
      </circle>
    </svg>
  )
}

export function AnimatedNetwork({ className = "w-32 h-32" }: { className?: string }) {
  const [activeNode, setActiveNode] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      <line x1="60" y1="20" x2="60" y2="60" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="60" y1="60" x2="20" y2="100" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="60" y1="60" x2="100" y2="100" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="20" y1="100" x2="100" y2="100" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.6" />
      <line x1="60" y1="20" x2="20" y2="100" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.4" />
      <line x1="60" y1="20" x2="100" y2="100" stroke="url(#networkGradient)" strokeWidth="2" opacity="0.4" />

      {/* Network nodes */}
      <circle cx="60" cy="20" r="8" fill="currentColor" opacity={activeNode === 0 ? 1 : 0.6}>
        <animate
          attributeName="r"
          values="8;12;8"
          dur="1s"
          repeatCount="indefinite"
          begin={activeNode === 0 ? "0s" : "never"}
        />
      </circle>
      <circle cx="60" cy="60" r="8" fill="currentColor" opacity={activeNode === 1 ? 1 : 0.6}>
        <animate
          attributeName="r"
          values="8;12;8"
          dur="1s"
          repeatCount="indefinite"
          begin={activeNode === 1 ? "0s" : "never"}
        />
      </circle>
      <circle cx="20" cy="100" r="8" fill="currentColor" opacity={activeNode === 2 ? 1 : 0.6}>
        <animate
          attributeName="r"
          values="8;12;8"
          dur="1s"
          repeatCount="indefinite"
          begin={activeNode === 2 ? "0s" : "never"}
        />
      </circle>
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity={activeNode === 3 ? 1 : 0.6}>
        <animate
          attributeName="r"
          values="8;12;8"
          dur="1s"
          repeatCount="indefinite"
          begin={activeNode === 3 ? "0s" : "never"}
        />
      </circle>

      {/* Data packets */}
      <circle cx="60" cy="20" r="2" fill="currentColor" opacity="0.8">
        <animateMotion dur="2s" repeatCount="indefinite">
          <path d="M0,0 L0,40 L-40,40 L40,0 Z" />
        </animateMotion>
      </circle>
    </svg>
  )
}

export function FloatingTechElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-primary/30 rotate-45 animate-float"></div>
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-1/4 w-3 h-3 bg-primary/40 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/3 w-5 h-5 border border-accent/40 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.3" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1">
          <animate attributeName="stroke-dasharray" values="0,1000;500,500;1000,0" dur="8s" repeatCount="indefinite" />
        </line>
        <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#lineGradient)" strokeWidth="1">
          <animate attributeName="stroke-dasharray" values="0,1000;500,500;1000,0" dur="10s" repeatCount="indefinite" />
        </line>
      </svg>
    </div>
  )
}
