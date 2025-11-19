import { ArrowRight, ShieldCheck, Smile } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(105%_75%_at_50%_-10%,#fff,rgba(253,230,138,0.25),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-amber-700 bg-amber-100 rounded-full px-3 py-1 text-sm font-medium">
              <ShieldCheck className="h-4 w-4" />
              Persönliche Assistenz in ganz Deutschland
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Selbstbestimmt leben mit AssistenzPlus
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Wir begleiten Menschen mit Behinderung auf ihrem Weg zu mehr Autonomie –
              zuverlässig, einfühlsam und auf Augenhöhe. Ob Persönliches Budget oder
              Eingliederungshilfe: Wir sind an Ihrer Seite.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-amber-700">
                Kostenlose Erstberatung
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#leistungen" className="inline-flex items-center justify-center rounded-md px-5 py-3 font-semibold text-amber-700 hover:text-amber-800">
                Leistungen entdecken
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Smile className="h-4 w-4 text-amber-600" /> 96% Weiterempfehlung</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-600" /> TÜV-geprüfte Prozesse</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-100 shadow-inner p-6">
              <div className="h-full w-full rounded-xl bg-white/70 flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-amber-700 font-medium">Ihre Wünsche im Mittelpunkt</p>
                  <h3 className="mt-2 text-2xl font-semibold text-slate-900">Individuelle Assistenzlösungen</h3>
                  <p className="mt-2 text-slate-600">Gemeinsam planen wir die passende Unterstützung für Ihren Alltag – flexibel, verlässlich und herzlich.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
