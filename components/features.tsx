import { Zap, FileText, Package, Code } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Zap,
    title: "Setup Cepat",
    description:
      "Install dalam hitungan menit. Tidak perlu konfigurasi rumit. Langsung siap pakai untuk kolektif kamu.",
  },
  {
    icon: FileText,
    title: "Plain Text",
    description:
      "Data kamu dalam format teks biasa. Mudah dibaca, mudah di-backup, mudah diversion control dengan Git.",
  },
  {
    icon: Package,
    title: "Lengkap & Siap Pakai",
    description:
      "Template account, contoh transaksi, dan dokumentasi lengkap. Tinggal sesuaikan dengan kebutuhan kolektif.",
  },
  {
    icon: Code,
    title: "Open Source",
    description:
      "100% gratis dan open source. Modify sesukamu. Tidak ada vendor lock-in. Accounting tools untuk rakyat.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b-4 border-foreground bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-4 border-foreground bg-muted p-8">
          <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
            Kenapa Starter Kit Ini?
          </h2>

          <p className="mt-6 text-base leading-relaxed text-foreground">
            Kami memahami betapa sulitnya mengelola keuangan kolektif dengan transparan. Banyak kolektif yang kesulitan
            karena <strong>tidak ada sistem yang jelas, mudah digunakan, dan terjangkau</strong>. Tanpa sistem yang
            baik, muncul risiko <strong>penggelapan dana atau penyalahgunaan keuangan</strong> yang dapat merusak
            kepercayaan dalam tim. Starter kit ini adalah hasil dari pembelajaran dan praktik terbaik kami selama
            bertahun-tahun, yang kami harap bisa membantu kolektif lain untuk fokus berkarya tanpa khawatir soal
            pembukuan.
          </p>

          <p className="mt-6 text-base leading-relaxed text-foreground">
            Kami menggunakan kombinasi <strong>Bank Jago</strong> dan <strong>bank utama</strong> (seperti CIMB Niaga).
            Dengan fitur <strong>pocket</strong> Bank Jago, audit keuangan menjadi sangat{" "}
            <strong>transparan dan mudah</strong> - setiap sub-akun bisa dikelola oleh PIC masing-masing dan diakses
            secara <strong>real-time</strong>.
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground">
            Ditambah dengan <strong>Beancount</strong>, laporan finansial menjadi semakin jelas dan ter-manage dengan
            sistem <strong>double-entry bookkeeping</strong> yang profesional. Hasilnya?{" "}
            <strong>Tidak perlu hire akuntan</strong> untuk kolektif yang baru memulai.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground">
            Sistem ini mempromosikan <strong>transparansi penuh</strong> sejak awal, sehingga kolektif bisa{" "}
            <strong>fokus ke berkarya</strong> - bukan terjebak dalam kerepotan bookkeeping yang rumit.
          </p>

          <div className="mt-8">
            <Link
              href="/tutorials"
              className="inline-block border-4 border-foreground bg-accent px-8 py-4 font-bold uppercase tracking-tight text-accent-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              Pelajari Cara Menggunakannya →
            </Link>
          </div>
        </div>

        <div className="grid gap-0 border-4 border-foreground sm:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`border-foreground p-8 ${index === 1 || index === 3 ? "sm:border-l-4" : ""} ${
                index === 2 || index === 3 ? "border-t-4" : ""
              } ${index === 1 ? "bg-primary text-primary-foreground" : "bg-background"}`}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center border-2 border-current">
                <feature.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
              <p className="mt-4 leading-relaxed opacity-90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
