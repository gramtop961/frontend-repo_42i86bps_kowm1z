import { useState } from 'react'
import { Menu, X, Heart, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Über uns', href: '#vertrauen' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 rounded-full bg-amber-200/60 text-amber-700 items-center justify-center shadow-inner">
              <Heart className="h-5 w-5" />
            </span>
            <span className="font-semibold text-slate-800 text-lg">AssistenzPlus</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-700 hover:text-amber-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#kontakt" className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-md shadow hover:bg-amber-700 transition-colors">
              <Phone className="h-4 w-4" />
              Beratung
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-amber-50" onClick={() => setOpen((o) => !o)} aria-label="Menü">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 rounded-md hover:bg-amber-50 text-slate-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#kontakt" className="px-3 py-2 rounded-md bg-amber-600 text-white" onClick={() => setOpen(false)}>
                Jetzt beraten lassen
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
