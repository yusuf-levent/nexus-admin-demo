import Link from 'next/link';
import { ArrowRight, BarChart3, Lock, Mail, Sparkles } from 'lucide-react';

export function LoginScreen() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_34%),linear-gradient(135deg,#111827_0%,#312e81_48%,#0f172a_100%)] px-4 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="max-w-xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-glow">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xl font-extrabold">Nexus Admin</p>
                <p className="text-sm text-indigo-100/80">Modern SaaS yonetim paneli</p>
              </div>
            </div>
            <h1 className="max-w-lg text-4xl font-black leading-tight sm:text-5xl">Gelir, kullanici ve operasyonlari tek panelde yonet.</h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-indigo-50/80">
              Portfolio ve gig kapagi icin tasarlanmis, gercek bir SaaS urunu gibi duran premium admin deneyimi.
            </p>
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-3">
              {[
                ['128K', 'MRR'],
                ['24K', 'Kullanici'],
                ['98%', 'SLA']
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <p className="text-2xl font-black">{value}</p>
                  <p className="mt-1 text-xs font-semibold text-indigo-100/75">{label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/15 bg-white/12 p-3 shadow-2xl backdrop-blur-xl">
            <div className="rounded-lg bg-white p-6 text-slate-950 shadow-soft sm:p-8">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black">Tekrar hos geldin</h2>
                  <p className="mt-1 text-sm text-slate-500">Demo hesabi ile panele gir.</p>
                </div>
                <span className="rounded-lg bg-emerald-50 p-3 text-emerald-600">
                  <BarChart3 className="h-6 w-6" />
                </span>
              </div>
              <form className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">E-posta</span>
                  <span className="relative block">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="h-12 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="owner@nexus.io" />
                  </span>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Sifre</span>
                  <span className="relative block">
                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input className="h-12 w-full rounded-lg border border-slate-200 pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="nexus-demo" type="password" />
                  </span>
                </label>
                <Link href="/dashboard" className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-slate-950 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-indigo-600">
                  Dashboard&apos;a gir
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </form>
              <div className="mt-6 rounded-lg bg-slate-50 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-slate-800">Bugunku aktivite</span>
                  <span className="text-emerald-600">+18.2%</span>
                </div>
                <div className="mt-3 flex h-14 items-end gap-2">
                  {[36, 48, 42, 61, 55, 74, 68, 88, 82].map((height, index) => (
                    <span key={index} className="flex-1 rounded-t bg-gradient-to-t from-indigo-500 to-cyan-400" style={{ height }} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
