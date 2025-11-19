import { HandHeart, CalendarCheck2, Users, FileCheck2 } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: HandHeart,
      title: 'Persönliche Assistenz',
      desc: 'Unterstützung im Alltag, bei Arbeit, Studium und Freizeit – individuell und selbstbestimmt.',
    },
    {
      icon: FileCheck2,
      title: 'Antrag & Budget',
      desc: 'Begleitung beim Persönlichen Budget und der Eingliederungshilfe – von der Idee bis zur Bewilligung.',
    },
    {
      icon: CalendarCheck2,
      title: 'Zuverlässige Planung',
      desc: 'Verlässliche Einsatzplanung, Vertretungen und transparente Kommunikation.',
    },
    {
      icon: Users,
      title: 'Passende Teams',
      desc: 'Sorgfältig ausgewählte Assistenzen, die zu Ihnen und Ihrem Alltag passen.',
    },
  ]

  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Unsere Leistungen</h2>
          <p className="mt-3 text-slate-600">Klar strukturiert, transparent und immer mit Blick auf Ihre Ziele.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-amber-100 bg-amber-50/40 p-6 hover:shadow-md transition-shadow">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
