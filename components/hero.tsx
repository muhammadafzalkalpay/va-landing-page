"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const handleContact = () => {
    const contactSection = document.getElementById("contact")
    contactSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleServices = () => {
    const servicesSection = document.getElementById("services")
    servicesSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
 <section className="relative bg-primary overflow-hidden">
  {/* Subtle GCC Skyline Decorative Element */}
  <div className="absolute bottom-0 left-0 right-0 h-20 opacity-10"> {/* reduced height */}
    <svg viewBox="0 0 1200 100" className="w-full h-full" preserveAspectRatio="none">
      <path
        d="M0,80 L50,80 L50,40 L80,40 L80,80 L120,80 L120,30 L160,30 L160,80 L200,80 L200,50 L240,50 L240,80 L300,80 L300,20 L350,20 L350,80 L400,80 L400,45 L440,45 L440,80 L500,80 L500,35 L550,35 L550,80 L600,80 L600,25 L650,25 L650,80 L700,80 L700,55 L740,55 L740,80 L800,80 L800,40 L850,40 L850,80 L900,80 L900,30 L950,30 L950,80 L1000,80 L1000,50 L1050,50 L1050,80 L1200,80 L1200,100 L0,100 Z"
        fill="currentColor"
        className="text-accent"
      />
    </svg>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-15"> {/* reduced vertical padding */}
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance mb-4 sm:mb-6">
        A Trusted Advisory Partner for the Middle East
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
        Providing relocation, corporate, tax advisory, international structuring and cross-border support for UHNW
        individuals, families and investors.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
        <Button
          onClick={handleServices}
          size="lg"
          variant="outline"
          className="w-full sm:w-auto border-2 border-accent text-accent hover:bg-accent hover:text-primary font-medium tracking-wide text-sm px-8 sm:px-10 py-2.5 sm:py-3.5 bg-transparent transition-colors"
        >
          Our Services
        </Button>

        <button
          onClick={handleContact}
          className="text-accent hover:text-accent/80 font-medium text-base sm:text-lg underline underline-offset-4 transition-colors"
        >
          Contact Us
        </button>
      </div>
    </div>
  </div>
</section>

  )
}
