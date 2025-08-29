"use client"

export function LoadingSpinner({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={`${className} animate-spin`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="60 40"
        opacity="0.3"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="15 85"
        strokeDashoffset="0"
      >
        <animate attributeName="stroke-dashoffset" values="0;-100" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export function PulseLoader({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <div className="flex space-x-1">
        <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
        <div className="w-2 h-2 bg-current rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
      </div>
    </div>
  )
}

export function TechLoader({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.8" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      {/* Outer ring */}
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="url(#techGradient)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="31.416"
        strokeDashoffset="31.416"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 31.416;15.708 15.708;0 31.416"
          dur="2s"
          repeatCount="indefinite"
        />
        <animate attributeName="stroke-dashoffset" values="0;-31.416" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Inner elements */}
      <rect x="22" y="22" width="6" height="6" fill="currentColor" opacity="0.6">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 25 25;360 25 25"
          dur="1s"
          repeatCount="indefinite"
        />
      </rect>

      <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.8">
        <animate attributeName="r" values="3;5;3" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0.4;0.8" dur="1s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}
