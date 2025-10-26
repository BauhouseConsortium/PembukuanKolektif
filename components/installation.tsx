"use client"

import { Check, Copy, ArrowRight, Terminal, Download, Rocket, AlertCircle, CheckCircle, ExternalLink } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

type OS = "macos" | "linux" | "windows"

const quickStartData: Record<OS, { icon: string; label: string; description: string; command: string; app: string }> = {
  macos: {
    icon: "🍎",
    label: "macOS",
    description: "Untuk pengguna macOS",
    command: "curl -fsSL https://raw.githubusercontent.com/your-org/beancount-starter-kit/main/install.sh | bash",
    app: "Terminal",
  },
  linux: {
    icon: "🐧",
    label: "Linux",
    description: "Untuk pengguna Linux (Ubuntu, Debian, Fedora, etc)",
    command: "curl -fsSL https://raw.githubusercontent.com/your-org/beancount-starter-kit/main/install.sh | bash",
    app: "Terminal",
  },
  windows: {
    icon: "🪟",
    label: "Windows",
    description: "Untuk pengguna Windows 10/11",
    command: "irm https://raw.githubusercontent.com/your-org/beancount-starter-kit/main/install.ps1 | iex",
    app: "PowerShell",
  },
}

const steps = [
  {
    number: "1",
    title: "Download Starter Kit",
    description: "Clone repository atau download ZIP dari GitHub. Starter kit ini sudah include struktur folder dan template siap pakai untuk kolektif kebudayaan.",
    code: "git clone https://github.com/your-org/beancount-starter-kit.git\ncd beancount-starter-kit",
    note: "Alternatif: Download ZIP dari GitHub dan extract ke folder pilihan kamu.",
  },
  {
    number: "2",
    title: "Install Beancount & Fava",
    description: "Install Beancount untuk accounting engine dan Fava untuk web interface yang user-friendly.",
    code: "pip install beancount fava",
    note: "Fava adalah web UI untuk Beancount yang memudahkan visualisasi dan navigasi data keuangan.",
  },
  {
    number: "3",
    title: "Jalankan Fava Server",
    description: "Start Fava server untuk akses web interface. Buka browser dan akses http://localhost:5000",
    code: "fava main.beancount",
    note: "Server akan running di localhost:5000. Biarkan terminal tetap terbuka selama pakai Fava.",
  },
  {
    number: "4",
    title: "Setup Account Structure",
    description: "Edit main.beancount dan sesuaikan struktur akun dengan kebutuhan kolektif kamu. Mulai dengan template yang sudah disediakan.",
    code: "# Edit file main.beancount\n# Tambahkan akun bank, kas, dan expense categories",
    note: "Template sudah include contoh struktur untuk honorarium, dana produksi, dan operasional.",
  },
]

const troubleshooting = [
  {
    issue: "Python tidak terinstall",
    solution: "Download Python dari python.org dan install. Pastikan centang 'Add to PATH' saat instalasi.",
  },
  {
    issue: "pip command not found",
    solution: "Gunakan pip3 atau python3 -m pip sebagai alternatif. Atau reinstall Python dengan pip included.",
  },
  {
    issue: "Fava tidak bisa diakses",
    solution: "Pastikan terminal masih running. Check port 5000 tidak dipakai aplikasi lain. Coba port alternatif: fava -p 5001 main.beancount",
  },
]

function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative border-4 border-foreground bg-secondary p-4">
      <pre className="overflow-x-auto">
        <code className="font-mono text-sm text-secondary-foreground">{code}</code>
      </pre>
      <button
        className="absolute right-2 top-2 h-8 w-8 border-2 border-foreground bg-background hover:bg-muted"
        onClick={handleCopy}
        aria-label="Copy code"
      >
        {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  )
}

export function Installation() {
  const [selectedOS, setSelectedOS] = useState<OS>("macos")
  const currentOS = quickStartData[selectedOS]

  return (
    <section className="border-b-4 border-foreground bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 border-4 border-foreground bg-primary p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold uppercase leading-tight tracking-tight text-primary-foreground sm:text-6xl">
              Cara Install
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground sm:text-xl">
              Setup sistem akuntansi transparan untuk kolektif kebudayaan kamu. Ikuti panduan step-by-step ini, dari install sampai siap digunakan.
            </p>
          </div>
        </div>

        {/* Quick Start Section */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              ⚡ Quick Start
            </h2>
            <p className="text-lg text-foreground/80">
              Pilih sistem operasi kamu, copy command, dan jalankan di terminal. Selesai!
            </p>
          </div>

          {/* OS Tabs */}
          <div className="border-4 border-foreground bg-background">
            <div className="flex border-b-4 border-foreground">
              {(Object.keys(quickStartData) as OS[]).map((os) => {
                const data = quickStartData[os]
                const isActive = selectedOS === os
                return (
                  <button
                    key={os}
                    onClick={() => setSelectedOS(os)}
                    className={`flex flex-1 items-center justify-center gap-2 border-r-4 border-foreground px-4 py-4 font-bold uppercase tracking-tight transition-all last:border-r-0 sm:gap-3 sm:px-6 ${
                      isActive
                        ? "bg-accent text-foreground"
                        : "bg-muted text-foreground/60 hover:bg-muted/80 hover:text-foreground"
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl">{data.icon}</span>
                    <span className="text-sm sm:text-base">{data.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="p-6 sm:p-8">
              <div className="mb-4">
                <p className="text-lg text-foreground">
                  {currentOS.description}
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  Buka <strong>{currentOS.app}</strong> dan jalankan command ini:
                </p>
              </div>
              <CodeBlock code={currentOS.command} />
            </div>
          </div>
        </div>

        {/* Manual Installation Steps */}
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold uppercase tracking-tight text-foreground sm:text-3xl">
              📋 Install Manual (Step-by-Step)
            </h2>
            <p className="text-lg text-foreground/80">
              Jika ingin install manual atau ingin lebih memahami prosesnya, ikuti panduan lengkap di bawah ini.
            </p>
          </div>
          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={step.number} className="border-4 border-foreground bg-background">
                <div className="flex flex-col gap-6 p-6 sm:flex-row sm:p-8">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border-4 border-foreground bg-accent text-3xl font-bold text-foreground">
                    {step.number}
                  </div>
                  <div className="flex-1 space-y-4">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-foreground sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-foreground">{step.description}</p>
                    <CodeBlock code={step.code} />
                    {step.note && (
                      <div className="flex gap-2 border-l-4 border-primary bg-muted p-3">
                        <AlertCircle className="h-5 w-5 shrink-0 text-primary" />
                        <p className="text-sm leading-relaxed text-foreground">{step.note}</p>
                      </div>
                    )}
                  </div>
                </div>
                {idx < steps.length - 1 && (
                  <div className="flex justify-center border-t-4 border-foreground bg-accent py-2">
                    <ArrowRight className="h-6 w-6 rotate-90 text-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-0 border-4 border-foreground md:grid-cols-2">
            {/* Left: Primary CTA */}
            <div className="flex flex-col justify-between border-b-4 border-foreground bg-primary p-8 md:border-b-0 md:border-r-4 sm:p-10">
              <div>
                <h2 className="mb-4 text-3xl font-bold uppercase leading-tight tracking-tight text-primary-foreground sm:text-4xl">
                  Lanjut ke Tutorial
                </h2>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  Pelajari cara setup akun, catat transaksi, dan kelola keuangan kolektif dengan transparan.
                </p>
              </div>
              <Link
                href="/tutorials"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 border-4 border-foreground bg-accent px-6 py-4 font-bold uppercase tracking-tight text-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:w-auto"
              >
                Mulai Belajar
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {/* Right: Secondary Info */}
            <div className="flex flex-col justify-between bg-muted p-8 sm:p-10">
              <div>
                <h3 className="mb-4 text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-3xl">
                  Sudah Install?
                </h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent">✓</span>
                    <span>Script berjalan lancar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent">✓</span>
                    <span>Fava server sudah aktif</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-accent">✓</span>
                    <span>Siap mulai setup kolektif</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/about"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 border-4 border-foreground bg-background px-6 py-4 font-bold uppercase tracking-tight text-foreground transition-all hover:bg-background/80 sm:w-auto"
              >
                Tentang Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
