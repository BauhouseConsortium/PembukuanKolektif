import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialHero } from "@/components/tutorial/tutorial-hero"
import { TutorialSteps } from "@/components/tutorial/tutorial-steps"

export default function TutorialPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <TutorialHero />
        <TutorialSteps />
      </main>
      <Footer />
    </div>
  )
}
