import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"

export function Hero() {
  return (
    <section className="relative border-b-4 border-foreground bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_1fr]">
          <div className="border-r-4 border-foreground py-16 pr-8 lg:py-24">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wider">Starter Kit Pembukuan Kolektif</span>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Pembukuan Transparan untuk Kolektif
            </h1>

            <div className="mt-8 space-y-4 text-lg leading-relaxed">
              <p>
                Semudah mengedit file teks biasa. Siap dalam hitungan menit, bangun akuntabilitas dan kepercayaan
                kolektif tanpa kompromi.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                asChild
                className="border-2 border-foreground bg-secondary text-secondary-foreground hover:bg-foreground"
              >
                <Link href="#install">
                  Mulai Sekarang
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-foreground bg-background text-foreground hover:bg-muted"
              >
                <Link href="https://github.com/your-org/beancount-starter-kit">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-primary py-16 px-8 lg:py-24">
            <h2 className="text-3xl font-bold text-primary-foreground">Starter Kit</h2>
            <div className="mt-8 space-y-4 text-primary-foreground">
              <p className="leading-relaxed">
                Template lengkap untuk memulai pembukuan kolektif dengan Beancount. Dirancang khusus untuk organisasi
                grassroots dan komunitas.
              </p>
              <p className="leading-relaxed">Plain text, version control friendly, dan 100% open source.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
