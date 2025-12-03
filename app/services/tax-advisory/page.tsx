import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TaxAdvisoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-32 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-6">OUR SERVICES</p>
          <h1 className="font-serif text-5xl md:text-6xl font-normal mb-8 leading-tight text-balance">
            Tax Advisory & International Structuring
          </h1>
          <p className="text-xl leading-relaxed text-white/80 max-w-3xl mx-auto">
            Strategic tax planning, international structuring, and cross-border compliance solutions for businesses and
            families
          </p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl text-foreground mb-8">About This Service</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            Our tax advisory practice supports international families, entrepreneurs and businesses navigating the
            evolving GCC tax landscape and cross-border compliance obligations. We provide strategic tax planning,
            entity structuring advice, and compliance support across the UAE, KSA and UK.
          </p>

          {/* Core Offerings */}
          <h3 className="font-serif text-2xl text-foreground mb-6 mt-16">Core Offerings</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                UAE Corporate Tax compliance and advisory (CT301 registration, transfer pricing)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                KSA Zakat, VAT and Corporate Income Tax advisory
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                International tax planning and treaty optimization
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Cross-border structuring for holding companies and family offices
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                Tax residency planning and certificate applications
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1 flex-shrink-0 font-serif">—</span>
              <span className="leading-relaxed text-muted-foreground">
                UK-GCC tax coordination and dual residency planning
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
            Contact our team to discuss your tax advisory and structuring needs
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
