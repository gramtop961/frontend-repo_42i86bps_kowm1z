import { Shield, ThumbsUp, Award, Quote } from 'lucide-react'

export default function Trust() {
  return (
    <section id="vertrauen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Warum AssistenzPlus?</h2>
            <p className="mt-4 text-slate-600">Wir stehen für Verlässlichkeit, Transparenz und ein herzliches Miteinander. Unsere Arbeit ist getragen von Respekt und echter Teilhabe.</p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3"><Shield className="h-5 w-5 text-amber-600 mt-0.5" /><span><strong>Qualität und Sicherheit:</strong> Geprüfte Prozesse, Schulungen und klare Standards.</span></li>
              <li className="flex items-start gap-3"><ThumbsUp className="h-5 w-5 text-amber-600 mt-0.5" /><span><strong>Hohe Zufriedenheit:</strong> Persönliche Betreuung und schnelle Erreichbarkeit.</span></li>
              <li className="flex items-start gap-3"><Award className="h-5 w-5 text-amber-600 mt-0.5" /><span><strong>Erfahrung:</strong> Teams mit Herz und Kompetenz – bundesweit vernetzt.</span></li>
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-amber-100 bg-amber-50/40 p-6">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <Quote className="h-6 w-6 text-amber-600" />
                <p className="mt-4 text-slate-800 text-lg leading-relaxed">Durch AssistenzPlus konnte ich mein Studium fortsetzen. Die Unterstützung ist flexibel und zuverlässig – und immer auf Augenhöhe.</p>
                <p className="mt-4 text-slate-500">– Klientin aus NRW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
