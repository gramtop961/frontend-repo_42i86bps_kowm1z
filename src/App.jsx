import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Process from './components/Process'
import Trust from './components/Trust'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Trust />
        <Contact />
      </main>
      <footer className="border-t border-amber-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between">
            <p className="text-slate-600">© {new Date().getFullYear()} AssistenzPlus – Gemeinsam selbstbestimmt.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-600 hover:text-amber-700">Datenschutz</a>
              <a href="#" className="text-slate-600 hover:text-amber-700">Impressum</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
