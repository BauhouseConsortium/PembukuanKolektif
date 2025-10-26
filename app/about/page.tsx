import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="border-b-4 border-foreground bg-primary py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
              Tentang Bauhouse Concortium
            </h1>
          </div>
        </section>

        {/* Main Content */}
        <section className="border-b-4 border-foreground py-16 sm:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {/* Image - Full Width */}
              <div className="border-4 border-foreground">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2018-02-11.7EUoqab0_Z1UftrI-JO3etr6vYk0orO9DTUirj2FPax8kYo.webp"
                  alt="Bauhouse Concortium - Rumah Kolektif"
                  width={1200}
                  height={800}
                  className="w-full"
                />
              </div>

              {/* Content Sections */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="border-4 border-foreground bg-muted p-6">
                  <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">Siapa Kami?</h2>
                  <p className="leading-relaxed text-foreground">
                    Bauhouse Concortium adalah kolektif yang fokus pada pengembangan seni, budaya, dan praktik
                    kolaboratif. Kami percaya pada transparansi, akuntabilitas, dan pemberdayaan komunitas melalui kerja
                    kolektif.
                  </p>
                </div>

                <div className="border-4 border-foreground bg-accent/10 p-6">
                  <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">Pengalaman Kami</h2>
                  <p className="leading-relaxed text-foreground">
                    Dari pengalaman mengelola kolektif, kami telah menghadapi berbagai tantangan dalam pengelolaan
                    keuangan dan transparansi. Dari pengalaman inilah kami mengembangkan sistem pembukuan yang
                    transparan dan mudah diaudit, yang kini kami bagikan melalui Starter Kit Pembukuan Kolektif ini.
                  </p>
                </div>

                <div className="border-4 border-foreground bg-secondary p-6">
                  <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-secondary-foreground">
                    Kenapa Kami Membuat Ini?
                  </h2>
                  <p className="leading-relaxed text-secondary-foreground">
                    Kami memahami betapa sulitnya mengelola keuangan kolektif dengan transparan. Banyak kolektif yang
                    kesulitan karena tidak ada sistem yang jelas, mudah digunakan, dan terjangkau. Starter kit ini
                    adalah hasil dari pembelajaran dan praktik terbaik kami selama bertahun-tahun, yang kami harap bisa
                    membantu kolektif lain untuk fokus berkarya tanpa khawatir soal pembukuan.
                  </p>
                </div>

                <div className="border-4 border-foreground bg-accent p-6">
                  <h2 className="mb-4 text-2xl font-bold uppercase tracking-tight text-foreground">Nilai-Nilai Kami</h2>
                  <ul className="space-y-3 leading-relaxed text-foreground">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-foreground" />
                      <span>
                        <strong>Transparansi:</strong> Setiap transaksi harus jelas dan bisa diaudit oleh semua anggota
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-foreground" />
                      <span>
                        <strong>Akuntabilitas:</strong> Setiap orang bertanggung jawab atas dana yang dikelola
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-foreground" />
                      <span>
                        <strong>Kolaborasi:</strong> Sistem yang memudahkan kerja bersama dan pembagian tanggung jawab
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 bg-foreground" />
                      <span>
                        <strong>Aksesibilitas:</strong> Solusi yang terjangkau dan bisa digunakan oleh semua kolektif
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
