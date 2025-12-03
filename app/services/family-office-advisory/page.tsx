import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FamilyOfficeAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal mb-8 leading-tight text-balance">
            Advisory for GCC Families & Family Offices
          </h1>
          <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            Bespoke wealth management and family office solutions for high-net-worth GCC families
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-foreground mb-8">About This Service</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            We partner with high-net-worth and ultra-high-net-worth families across the GCC to provide holistic advisory
            services covering wealth structuring, succession planning, governance, and cross-border compliance. Our
            approach integrates legal, tax, regulatory and operational considerations.
          </p>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl text-foreground mb-6 mt-16">Core Offerings</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Family office structuring and governance frameworks
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Wealth structuring and asset protection strategies
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Succession planning and generational wealth transfer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Trust and foundation advisory (onshore and offshore)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Multi-jurisdictional tax and regulatory compliance
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Next-generation advisory and family constitution development
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-foreground mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Contact our team to discuss your family office advisory needs
          </p>
          <Link href="/#contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-base">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
