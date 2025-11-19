import { CheckCircle2, ClipboardList, Handshake, MessageSquareMore } from 'lucide-react'

export default function Process() {
  const steps = [
    {
      icon: MessageSquareMore,
      title: 'Unverbindliche Beratung',
      desc: 'Wir klären gemeinsam Ihren Bedarf und die passenden Möglichkeiten.',
    },
    {
      icon: ClipboardList,
      title: 'Antragstellung',
      desc: 'Unterstützung bei allen Formularen und Nachweisen – verständlich erklärt.',
    },
    {
      icon: Handshake,
      title: 'Assistenz finden',
      desc: 'Wir stellen ein Team zusammen, das zu Ihnen passt – fachlich und menschlich.',
    },
    {
      icon: CheckCircle2,
      title: 'Start & Begleitung',
      desc: 'Begleitung im Alltag und regelmäßige Abstimmung – transparent und zuverlässig.',
    },
  ]

  return (
    <section id="ablauf" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">So läuft es ab</h2>
          <p className="mt-3 text-slate-600">Ein klarer, transparenter Prozess – Schritt für Schritt an Ihrer Seite.</p>
        </div>

        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 counter-reset">
          {steps.map(({ icon: Icon, title, desc }) => (
            <li key={title} className="rounded-2xl border bg-white border-amber-100 p-6 relative">
              <span className="absolute -top-3 -left-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-600 text-white text-sm font-semibold shadow">{steps.indexOf(steps.find(s=>s.title===title))+1}</span>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
