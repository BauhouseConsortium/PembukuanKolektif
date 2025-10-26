import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-b-4 border-foreground bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-0 lg:grid-cols-2">
          {/* Left side - Coral red background */}
          <div className="flex items-center border-4 border-foreground bg-primary p-12 sm:p-16">
            <h2 className="font-mono text-4xl font-black uppercase leading-none tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Berani
              <br />
              Transparan?
            </h2>
          </div>

          {/* Right side - Yellow background */}
          <div className="border-4 border-l-0 border-foreground bg-accent p-12 sm:p-16 lg:border-l-4">
            <p className="font-mono text-xl font-bold leading-tight text-accent-foreground sm:text-2xl">
              Terapkan sistem keuangan transparan untuk kerja-kerja kebudayaan yang berkelanjutan. Dari fee hingga funding, semua dikelola dengan sehat dan adil.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                asChild
                className="w-full border-4 border-foreground bg-foreground font-mono text-base font-bold uppercase tracking-wider text-background shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-foreground/90 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] sm:w-auto"
              >
                <Link href="/tutorials" className="flex items-center">
                  Lihat Tutorial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
