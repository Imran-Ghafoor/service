"use client"

import { useEffect, useState } from "react"

// Modern IT Services Vector - Advanced Code Animation
export function ModernCodeVector({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="modernCodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#10b981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0.5" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagonal frame */}
      <path
        d="M60 10 L90 30 L90 70 L60 90 L30 70 L30 30 Z"
        stroke="url(#modernCodeGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,240;120,120;240,0;120,120;0,240"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Animated code brackets */}
      <path
        d="M35 25 L25 35 L25 60 L25 85 L35 95"
        stroke="#059669"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
      >
        <animate attributeName="stroke-dasharray" values="0,100;50,50;100,0" dur="2s" repeatCount="indefinite" />
      </path>

      <path
        d="M85 25 L95 35 L95 60 L95 85 L85 95"
        stroke="#059669"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,100;50,50;100,0"
          dur="2s"
          repeatCount="indefinite"
          begin="0.5s"
        />
      </path>

      {/* Dynamic code lines with typing effect */}
      <g opacity="0.8">
        <rect x="40" y="40" width="0" height="3" fill="#10b981" rx="1.5">
          <animate attributeName="width" values="0;25;0;35;0" dur="3s" repeatCount="indefinite" />
        </rect>
        <rect x="40" y="50" width="0" height="3" fill="#34d399" rx="1.5">
          <animate attributeName="width" values="0;30;0;20;0" dur="3.5s" repeatCount="indefinite" begin="0.5s" />
        </rect>
        <rect x="40" y="60" width="0" height="3" fill="#059669" rx="1.5">
          <animate attributeName="width" values="0;40;0;15;0" dur="2.8s" repeatCount="indefinite" begin="1s" />
        </rect>
        <rect x="40" y="70" width="0" height="3" fill="#10b981" rx="1.5">
          <animate attributeName="width" values="0;35;0;25;0" dur="3.2s" repeatCount="indefinite" begin="1.5s" />
        </rect>
      </g>

      {/* Central pulsing core */}
      <circle cx="60" cy="60" r="8" fill="#059669" opacity="0.3">
        <animate attributeName="r" values="8;15;8" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

// Design Portfolio Vector - Creative Palette
export function CreativeDesignVector({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a855f7" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#c084fc" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="paletteGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
          <stop offset="33%" stopColor="#f59e0b" stopOpacity="0.6" />
          <stop offset="66%" stopColor="#d97706" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#b45309" stopOpacity="0.2" />
        </radialGradient>
      </defs>

      {/* Artist palette shape */}
      <path
        d="M30 60 C30 40 45 25 65 25 C85 25 100 40 100 60 C100 70 95 75 85 75 L75 75 C70 75 65 70 65 65 C65 60 70 55 75 55 C80 55 85 60 85 65"
        fill="url(#designGradient)"
        opacity="0.8"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 60 60;5 60 60;0 60 60;-5 60 60;0 60 60"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      {/* Color dots on palette */}
      <circle cx="45" cy="45" r="4" fill="#ef4444">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="60" cy="40" r="4" fill="#3b82f6">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.3s" />
      </circle>
      <circle cx="75" cy="50" r="4" fill="#22c55e">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.6s" />
      </circle>
      <circle cx="50" cy="65" r="4" fill="#f59e0b">
        <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" begin="0.9s" />
      </circle>

      {/* Animated brush */}
      <g>
        <line x1="85" y1="35" x2="95" y2="25" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 90 30;15 90 30;0 90 30;-15 90 30;0 90 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </line>
        <circle cx="95" cy="25" r="3" fill="#a855f7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 90 30;15 90 30;0 90 30;-15 90 30;0 90 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Creative sparkles */}
      <g opacity="0.7">
        <path d="M25 25 L27 30 L32 28 L27 33 L25 38 L23 33 L18 28 L23 30 Z" fill="#fbbf24">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
        </path>
        <path d="M90 80 L92 85 L97 83 L92 88 L90 93 L88 88 L83 83 L88 85 Z" fill="#f59e0b">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="1.8s" repeatCount="indefinite" begin="0.5s" />
        </path>
      </g>
    </svg>
  )
}

// Advanced Cloud Infrastructure Vector
export function AdvancedCloudVector({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#7dd3fc" stopOpacity="0.5" />
        </linearGradient>
        <filter id="cloudGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main cloud formation */}
      <path
        d="M25 65 C15 65 10 55 15 45 C20 35 35 30 45 40 C50 25 70 25 75 40 C85 35 95 45 90 55 C95 65 85 75 75 70 L25 70 Z"
        fill="url(#cloudGradient)"
        filter="url(#cloudGlow)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;3,-2;0,0;-3,2;0,0"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>

      {/* Data streams */}
      <g opacity="0.8">
        <circle cx="30" cy="50" r="2" fill="#0ea5e9">
          <animate attributeName="cy" values="50;45;50" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="45" cy="55" r="1.5" fill="#38bdf8">
          <animate attributeName="cy" values="55;50;55" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="65" cy="53" r="2" fill="#7dd3fc">
          <animate attributeName="cy" values="53;48;53" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.3;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Server connections */}
      <g stroke="#0ea5e9" strokeWidth="2" opacity="0.6">
        <line x1="60" y1="80" x2="60" y2="90">
          <animate attributeName="stroke-dasharray" values="0,20;10,10;20,0" dur="3s" repeatCount="indefinite" />
        </line>
        <rect x="55" y="90" width="10" height="6" fill="#0ea5e9" opacity="0.4" rx="1" />

        <line x1="40" y1="80" x2="35" y2="90">
          <animate
            attributeName="stroke-dasharray"
            values="0,20;10,10;20,0"
            dur="3s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </line>
        <rect x="30" y="90" width="10" height="6" fill="#38bdf8" opacity="0.4" rx="1" />

        <line x1="80" y1="80" x2="85" y2="90">
          <animate
            attributeName="stroke-dasharray"
            values="0,20;10,10;20,0"
            dur="3s"
            repeatCount="indefinite"
            begin="1s"
          />
        </line>
        <rect x="80" y="90" width="10" height="6" fill="#7dd3fc" opacity="0.4" rx="1" />
      </g>
    </svg>
  )
}

// Cybersecurity Shield Vector
export function CyberSecurityVector({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="securityGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#ef4444" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#f87171" stopOpacity="0.5" />
        </linearGradient>
        <filter id="securityGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main shield */}
      <path
        d="M60 15 C45 20 30 25 30 40 C30 65 45 85 60 95 C75 85 90 65 90 40 C90 25 75 20 60 15 Z"
        fill="url(#securityGradient)"
        filter="url(#securityGlow)"
        opacity="0.8"
      />

      {/* Animated security layers */}
      <path
        d="M60 25 C50 28 42 32 42 42 C42 58 50 70 60 75 C70 70 78 58 78 42 C78 32 70 28 60 25 Z"
        stroke="#dc2626"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      >
        <animate attributeName="stroke-dasharray" values="0,200;100,100;200,0" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Lock mechanism */}
      <rect x="52" y="50" width="16" height="12" rx="2" fill="#dc2626" opacity="0.8" />
      <path
        d="M56 50 C56 46 58 44 60 44 C62 44 64 46 64 50"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="60" cy="56" r="2" fill="#ffffff" />

      {/* Security scan lines */}
      <g opacity="0.4">
        <line x1="30" y1="35" x2="90" y2="35" stroke="#ef4444" strokeWidth="1">
          <animate attributeName="y1" values="35;85;35" dur="4s" repeatCount="indefinite" />
          <animate attributeName="y2" values="35;85;35" dur="4s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Threat detection points */}
      <g>
        <circle cx="45" cy="45" r="2" fill="#ef4444">
          <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
        </circle>
        <circle cx="75" cy="55" r="2" fill="#f87171">
          <animate attributeName="opacity" values="1;0.3;1" dur="1.2s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        <circle cx="60" cy="75" r="2" fill="#dc2626">
          <animate attributeName="opacity" values="1;0.3;1" dur="0.8s" repeatCount="indefinite" begin="0.6s" />
        </circle>
      </g>
    </svg>
  )
}

// Modern Database Vector
export function ModernDatabaseVector({ className = "w-32 h-32" }: { className?: string }) {
  const [activeLayer, setActiveLayer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % 3)
    }, 1500)
    return () => clearInterval(interval)
  }, [])

  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
        </linearGradient>
        <filter id="dbGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Database layers with active highlighting */}
      <g filter="url(#dbGlow)">
        <ellipse
          cx="60"
          cy="30"
          rx="30"
          ry="10"
          fill={activeLayer === 0 ? "#7c3aed" : "url(#dbGradient)"}
          opacity={activeLayer === 0 ? 1 : 0.6}
        />
        <rect
          x="30"
          y="30"
          width="60"
          height="15"
          fill={activeLayer === 0 ? "#7c3aed" : "url(#dbGradient)"}
          opacity={activeLayer === 0 ? 1 : 0.6}
        />
        <ellipse
          cx="60"
          cy="45"
          rx="30"
          ry="10"
          fill={activeLayer === 0 ? "#7c3aed" : "url(#dbGradient)"}
          opacity={activeLayer === 0 ? 1 : 0.6}
        />

        <ellipse
          cx="60"
          cy="55"
          rx="30"
          ry="10"
          fill={activeLayer === 1 ? "#8b5cf6" : "url(#dbGradient)"}
          opacity={activeLayer === 1 ? 1 : 0.6}
        />
        <rect
          x="30"
          y="55"
          width="60"
          height="15"
          fill={activeLayer === 1 ? "#8b5cf6" : "url(#dbGradient)"}
          opacity={activeLayer === 1 ? 1 : 0.6}
        />
        <ellipse
          cx="60"
          cy="70"
          rx="30"
          ry="10"
          fill={activeLayer === 1 ? "#8b5cf6" : "url(#dbGradient)"}
          opacity={activeLayer === 1 ? 1 : 0.6}
        />

        <ellipse
          cx="60"
          cy="80"
          rx="30"
          ry="10"
          fill={activeLayer === 2 ? "#a855f7" : "url(#dbGradient)"}
          opacity={activeLayer === 2 ? 1 : 0.6}
        />
        <rect
          x="30"
          y="80"
          width="60"
          height="10"
          fill={activeLayer === 2 ? "#a855f7" : "url(#dbGradient)"}
          opacity={activeLayer === 2 ? 1 : 0.6}
        />
        <ellipse
          cx="60"
          cy="90"
          rx="30"
          ry="10"
          fill={activeLayer === 2 ? "#a855f7" : "url(#dbGradient)"}
          opacity={activeLayer === 2 ? 1 : 0.6}
        />
      </g>

      {/* Data flow indicators */}
      <g opacity="0.8">
        <circle cx="40" cy="37" r="1.5" fill="#ffffff">
          <animate attributeName="cy" values="37;62;87;37" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="37" r="1.5" fill="#ffffff">
          <animate attributeName="cy" values="37;62;87;37" dur="4s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="80" cy="37" r="1.5" fill="#ffffff">
          <animate attributeName="cy" values="37;62;87;37" dur="4s" repeatCount="indefinite" begin="1s" />
        </circle>
      </g>

      {/* Query indicators */}
      <g opacity="0.6">
        <rect x="35" y="25" width="8" height="2" fill="#ffffff" rx="1">
          <animate attributeName="width" values="8;20;8" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="35" y="50" width="8" height="2" fill="#ffffff" rx="1">
          <animate attributeName="width" values="8;25;8" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </rect>
        <rect x="35" y="75" width="8" height="2" fill="#ffffff" rx="1">
          <animate attributeName="width" values="8;15;8" dur="1.8s" repeatCount="indefinite" begin="1s" />
        </rect>
      </g>
    </svg>
  )
}

// Floating Background Elements
export function EnhancedFloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Modern geometric shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 border-2 border-primary/20 rotate-45 animate-float">
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 animate-pulse"></div>
      </div>

      <div
        className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-full h-full rounded-full border border-accent/30 animate-spin-slow"></div>
      </div>

      <div
        className="absolute bottom-40 left-1/4 w-4 h-4 bg-gradient-to-r from-primary/30 to-secondary/30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div
        className="absolute top-1/3 right-1/3 w-10 h-10 border-2 border-accent/30 rounded-full animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/10 to-primary/10 animate-pulse"></div>
      </div>

      {/* Advanced connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="enhancedLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="50%" stopColor="currentColor" stopOpacity="0.4" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <line x1="10%" y1="20%" x2="90%" y2="80%" stroke="url(#enhancedLineGradient)" strokeWidth="2">
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;300,700;600,400;1000,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </line>

        <line x1="90%" y1="20%" x2="10%" y2="80%" stroke="url(#enhancedLineGradient)" strokeWidth="2">
          <animate
            attributeName="stroke-dasharray"
            values="0,1000;400,600;800,200;1000,0"
            dur="15s"
            repeatCount="indefinite"
          />
        </line>

        <circle cx="20%" cy="30%" r="2" fill="currentColor" opacity="0.3">
          <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>

        <circle cx="80%" cy="70%" r="2" fill="currentColor" opacity="0.3">
          <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" begin="1s" />
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" begin="1s" />
        </circle>
      </svg>
    </div>
  )
}
