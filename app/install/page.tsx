import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Installation } from "@/components/installation"

export const metadata = {
  title: "Cara Install - Starter Kit Pembukuan Kolektif",
  description: "Panduan lengkap instalasi Beancount Starter Kit untuk pembukuan transparan kolektif Anda.",
}

export default function InstallPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Installation />
      </main>
      <Footer />
    </div>
  )
}
