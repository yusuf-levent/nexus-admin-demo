'use client';

import { useState } from 'react';
import { Check, Shield, Smartphone, Zap } from 'lucide-react';
import { Card } from './ui';

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      className={`flex h-7 w-12 items-center rounded-full p-1 transition ${checked ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'}`}
      onClick={onChange}
      aria-pressed={checked}
    >
      <span className={`h-5 w-5 rounded-full bg-white shadow transition ${checked ? 'translate-x-5' : 'translate-x-0'}`} />
    </button>
  );
}

export function SettingsPage() {
  const [security, setSecurity] = useState(true);
  const [reports, setReports] = useState(true);
  const [mobile, setMobile] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black sm:text-4xl">Ayarlar</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">Demo organizasyon profili, bildirimleri ve guvenlik tercihleri.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <Card className="p-5">
          <h2 className="text-lg font-black">Organizasyon profili</h2>
          <p className="mt-1 text-sm text-[rgb(var(--muted))]">Nexus hesabinin gorunen demo bilgileri.</p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold">Sirket adi</span>
              <input className="h-11 w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="Nexus Cloud Systems" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold">Plan</span>
              <select className="h-11 w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="Enterprise">
                <option>Growth</option>
                <option>Scale</option>
                <option>Enterprise</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold">Fatura e-postasi</span>
              <input className="h-11 w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] px-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="finance@nexus.io" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-bold">Not</span>
              <textarea className="min-h-28 w-full resize-none rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10" defaultValue="Q3 hedefi: enterprise musterilerde daha yuksek aktivasyon ve otomasyon kullanimi." />
            </label>
            <button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-slate-950 px-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 sm:w-fit">
              <Check className="h-4 w-4" />
              Degisiklikleri kaydet
            </button>
          </form>
        </Card>

        <div className="space-y-4">
          {[
            { title: 'Guvenlik uyarilari', text: 'Riskli oturum ve odeme denemelerinde aninda bildirim.', icon: Shield, checked: security, set: () => setSecurity((v) => !v) },
            { title: 'Haftalik rapor', text: 'Gelir, churn ve kanal raporlarini pazartesi gonder.', icon: Zap, checked: reports, set: () => setReports((v) => !v) },
            { title: 'Mobil push', text: 'Yuksek tutarli islemler icin mobil bildirimleri ac.', icon: Smartphone, checked: mobile, set: () => setMobile((v) => !v) }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex gap-3">
                    <span className="rounded-lg bg-indigo-500/12 p-3 text-indigo-600">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-black">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-[rgb(var(--muted))]">{item.text}</p>
                    </div>
                  </div>
                  <Toggle checked={item.checked} onChange={item.set} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
