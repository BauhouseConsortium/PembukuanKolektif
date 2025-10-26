"use client"

import { Check, Copy, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const steps = [
  {
    number: "1",
    title: "Download Starter Kit",
    description: "Clone repository atau download ZIP dari GitHub.",
    code: "git clone https://github.com/your-org/beancount-starter-kit.git",
  },
  {
    number: "2",
    title: "Install Beancount",
    description: "Install Beancount menggunakan pip (Python package manager).",
    code: "pip install beancount fava",
  },
  {
    number: "3",
    title: "Mulai Pakai",
    description: "Edit file main.beancount dan jalankan Fava untuk web interface.",
    code: "fava main.beancount",
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
      <code className="font-mono text-sm text-secondary-foreground">{code}</code>
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
  return (
    <section className="border-b-4 border-foreground bg-background py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-4 border-foreground bg-primary p-8">
          <h1 className="text-balance text-3xl font-bold uppercase leading-tight tracking-tight text-primary-foreground sm:text-5xl">
            Cara Install
          </h1>
          <p className="mt-4 text-lg text-primary-foreground">
            Ikuti langkah-langkah berikut untuk menginstall dan mulai menggunakan Starter Kit Pembukuan Kolektif.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="border-4 border-foreground bg-muted p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center border-4 border-foreground bg-accent text-2xl font-bold text-foreground">
                  {step.number}
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-foreground">{step.title}</h3>
                  <p className="leading-relaxed text-foreground">{step.description}</p>
                  <CodeBlock code={step.code} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl border-4 border-foreground bg-accent p-8 sm:p-12">
          <div className="text-center">
            <h2 className="text-balance text-2xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
              Sudah Install?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground">
              Lanjutkan ke tutorial lengkap untuk mempelajari cara setup rekening bank dan mulai mencatat transaksi
              dengan Beancount.
            </p>
            <Link
              href="/tutorials"
              className="mt-6 inline-flex items-center gap-2 border-4 border-foreground bg-primary px-8 py-4 font-bold uppercase tracking-tight text-primary-foreground transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              Lihat Tutorial Lengkap
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
        {/* End of CTA section */}
      </div>
    </section>
  )
}
