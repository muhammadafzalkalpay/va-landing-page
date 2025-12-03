"use client"

import type React from "react"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Booking() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your inquiry. Our team will contact you within 24 hours.")
  }

  return (
    <section id="contact" className="bg-card py-20 sm:py-24 md:py-32 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-primary mb-6">Contact Us</h2>
          <p className="text-lg sm:text-xl text-primary/70 max-w-2xl mx-auto leading-relaxed px-4">
            Reach out to discuss how we can support your business needs across the GCC and UK
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16 sm:mb-20">
          {/* Map Placeholder */}
          <div className="space-y-6 sm:space-y-8">
            <div className="aspect-[4/3] bg-secondary border border-primary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-10 h-10 sm:w-12 sm:h-12 text-accent mx-auto mb-3" />
                <p className="text-primary/60 font-light text-sm sm:text-base">Interactive Map</p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Dubai Office */}
              <div className="border-l-2 border-accent pl-5 sm:pl-6 py-2">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">Dubai Office</h3>
                <p className="text-primary/70 mb-2 text-sm sm:text-base">Boulevard Plaza</p>
                <div className="flex items-center gap-2 text-primary/60 text-xs sm:text-sm mb-1">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+971 XX XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-primary/60 text-xs sm:text-sm">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>dubai@meag.ae</span>
                </div>
              </div>

              {/* London Office */}
              <div className="border-l-2 border-accent pl-5 sm:pl-6 py-2">
                <h3 className="text-lg sm:text-xl font-serif font-bold text-primary mb-3">London Office</h3>
                <p className="text-primary/70 mb-2 text-sm sm:text-base">Mayfair</p>
                <div className="flex items-center gap-2 text-primary/60 text-xs sm:text-sm mb-1">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>+44 XX XXXX XXXX</span>
                </div>
                <div className="flex items-center gap-2 text-primary/60 text-xs sm:text-sm">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>london@meag.ae</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-primary tracking-wide">Name</label>
                <input
                  type="text"
                  required
                  className="w-full border border-primary/20 bg-background px-4 sm:px-5 py-3 sm:py-4 text-primary focus:outline-none focus:border-accent transition text-sm sm:text-base"
                  placeholder="Your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-primary tracking-wide">Email</label>
                <input
                  type="email"
                  required
                  className="w-full border border-primary/20 bg-background px-4 sm:px-5 py-3 sm:py-4 text-primary focus:outline-none focus:border-accent transition text-sm sm:text-base"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-primary tracking-wide">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full border border-primary/20 bg-background px-4 sm:px-5 py-3 sm:py-4 text-primary focus:outline-none focus:border-accent transition text-sm sm:text-base"
                  placeholder="+971 XX XXX XXXX"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs sm:text-sm font-medium text-primary tracking-wide">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full border border-primary/20 bg-background px-4 sm:px-5 py-3 sm:py-4 text-primary focus:outline-none focus:border-accent transition resize-none text-sm sm:text-base"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-white text-sm sm:text-base font-medium tracking-wide px-10 sm:px-12 py-5 sm:py-6 transition"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
