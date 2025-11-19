import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="kontakt" className="py-20 bg-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Kostenlose Erstberatung</h2>
            <p className="mt-3 text-slate-600">Schreiben Sie uns kurz Ihr Anliegen. Wir melden uns zeitnah bei Ihnen.</p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p className="flex items-center gap-2"><Phone className="h-5 w-5 text-amber-600" /> 0800 000 000</p>
              <p className="flex items-center gap-2"><Mail className="h-5 w-5 text-amber-600" /> kontakt@assistenzplus.de</p>
              <p className="flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-600" /> Deutschlandweit</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-amber-100 p-6 shadow-sm">
            {sent ? (
              <div className="text-center py-12">
                <h3 className="text-2xl font-semibold text-slate-900">Vielen Dank!</h3>
                <p className="mt-2 text-slate-600">Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Ihr Name</label>
                  <input required type="text" className="mt-1 w-full rounded-md border-slate-200 focus:border-amber-400 focus:ring-amber-400" placeholder="Max Mustermann" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">E-Mail</label>
                    <input required type="email" className="mt-1 w-full rounded-md border-slate-200 focus:border-amber-400 focus:ring-amber-400" placeholder="name@email.de" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Telefon</label>
                    <input type="tel" className="mt-1 w-full rounded-md border-slate-200 focus:border-amber-400 focus:ring-amber-400" placeholder="Optional" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Ihr Anliegen</label>
                  <textarea required rows="4" className="mt-1 w-full rounded-md border-slate-200 focus:border-amber-400 focus:ring-amber-400" placeholder="Wobei dürfen wir Sie unterstützen?" />
                </div>
                <button type="submit" className="w-full bg-amber-600 text-white font-semibold py-3 rounded-md hover:bg-amber-700">Absenden</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
