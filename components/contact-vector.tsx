export function ContactVector() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <svg viewBox="0 0 400 400" className="w-full h-full animate-float" xmlns="http://www.w3.org/2000/svg">
        {/* Background Circle */}
        <circle cx="200" cy="200" r="180" fill="url(#contactGradient)" className="animate-pulse-glow" />

        {/* Phone Icon */}
        <g transform="translate(120, 80)">
          <rect
            x="0"
            y="0"
            width="60"
            height="100"
            rx="12"
            fill="currentColor"
            className="text-primary animate-float"
          />
          <rect x="5" y="10" width="50" height="70" rx="4" fill="white" />
          <circle cx="30" cy="90" r="4" fill="currentColor" className="text-primary" />
          <line
            x1="15"
            y1="20"
            x2="45"
            y2="20"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground"
          />
          <line
            x1="15"
            y1="30"
            x2="45"
            y2="30"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground"
          />
        </g>

        {/* Email Icon */}
        <g transform="translate(220, 120)">
          <rect
            x="0"
            y="0"
            width="80"
            height="60"
            rx="8"
            fill="currentColor"
            className="text-primary animate-float"
            style={{ animationDelay: "0.5s" }}
          />
          <path d="M0 10 L40 35 L80 10" stroke="white" strokeWidth="3" fill="none" />
          <circle cx="70" cy="15" r="8" fill="currentColor" className="text-accent animate-pulse" />
        </g>

        {/* Location Pin */}
        <g transform="translate(160, 220)">
          <path
            d="M40 0 C55 0 70 15 70 30 C70 45 40 80 40 80 S10 45 10 30 C10 15 25 0 40 0 Z"
            fill="currentColor"
            className="text-primary animate-float"
            style={{ animationDelay: "1s" }}
          />
          <circle cx="40" cy="30" r="12" fill="white" />
          <circle cx="40" cy="30" r="6" fill="currentColor" className="text-primary" />
        </g>

        {/* Chat Bubbles */}
        <g transform="translate(80, 160)">
          <ellipse
            cx="30"
            cy="20"
            rx="25"
            ry="15"
            fill="currentColor"
            className="text-accent animate-float"
            style={{ animationDelay: "1.5s" }}
          />
          <path d="M15 30 L20 40 L25 30" fill="currentColor" className="text-accent" />
          <circle cx="20" cy="20" r="2" fill="white" />
          <circle cx="30" cy="20" r="2" fill="white" />
          <circle cx="40" cy="20" r="2" fill="white" />
        </g>

        {/* Floating Elements */}
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="currentColor"
          className="text-accent/50 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <circle
          cx="320"
          cy="150"
          r="6"
          fill="currentColor"
          className="text-primary/50 animate-float"
          style={{ animationDelay: "2.5s" }}
        />
        <circle
          cx="350"
          cy="280"
          r="10"
          fill="currentColor"
          className="text-accent/50 animate-float"
          style={{ animationDelay: "3s" }}
        />

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="contactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
