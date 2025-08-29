export function TestimonialVectors() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Quote Bubbles */}
      <div className="absolute top-10 left-10 opacity-10">
        <svg width="60" height="60" viewBox="0 0 60 60" className="text-primary animate-float">
          <path
            fill="currentColor"
            d="M25 20c0-8.284-6.716-15-15-15S-5 11.716-5 20s6.716 15 15 15c1.657 0 3-.672 3-1.5 0-.828-1.343-1.5-3-1.5-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12c0 3.314-1.343 6-3 6s-3-2.686-3-6z"
          />
          <path
            fill="currentColor"
            d="M55 20c0-8.284-6.716-15-15-15s-15 6.716-15 15 6.716 15 15 15c1.657 0 3-.672 3-1.5 0-.828-1.343-1.5-3-1.5-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12c0 3.314-1.343 6-3 6s-3-2.686-3-6z"
          />
        </svg>
      </div>

      {/* Animated Stars */}
      <div className="absolute top-20 right-20 opacity-20">
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-accent animate-pulse">
          <path
            fill="currentColor"
            d="M20 2l4.944 10.056L35 14.472l-7.528 7.334L29.888 32 20 27.056 10.112 32l2.416-10.194L5 14.472l10.056-2.416L20 2z"
          />
        </svg>
      </div>

      {/* Floating Circles */}
      <div
        className="absolute bottom-10 left-1/4 w-16 h-16 bg-primary/5 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/3 right-10 w-12 h-12 bg-accent/5 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
