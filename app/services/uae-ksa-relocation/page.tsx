import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UaeKsaRelocationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal mb-8 leading-tight text-balance">
            UAE and KSA Relocation and Corporate Services
          </h1>
          <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            Comprehensive relocation support and corporate formation services for families, entrepreneurs, and
            businesses entering the Gulf region
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-foreground mb-8">About This Service</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            We deliver an integrated suite of relocation, corporate set-up and regulatory support services for families,
            founders, investors and businesses entering the GCC. Our team provides end-to-end guidance across visa
            applications, company formation, PRO services, and compliance requirements.
          </p>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl text-foreground mb-6 mt-16">Core Offerings</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                UAE Golden Visa and residency advisory for investors, entrepreneurs and talent
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                KSA residency programs including Premium Residency and Special Iqama routes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Free Zone and mainland company formation (UAE and KSA)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Corporate structuring, licensing and regulatory approvals
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                PRO services and government relations support
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Family relocation planning and settlement services
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
            Contact our team to discuss your relocation and corporate services requirements
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
