import { ArrowUpRight, CreditCard, ShoppingBag, TrendingUp, Users } from 'lucide-react';
import { kpis, transactions } from '@/data/mock';
import { Badge, Card } from './ui';
import { ChannelPieChart, RevenueChart, SalesBarChart } from './charts';

const icons = [CreditCard, Users, ShoppingBag, TrendingUp];
const toneMap: Record<string, string> = {
  emerald: 'bg-emerald-500/12 text-emerald-600',
  indigo: 'bg-indigo-500/12 text-indigo-600',
  cyan: 'bg-cyan-500/12 text-cyan-600',
  violet: 'bg-violet-500/12 text-violet-600'
};

export function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-3xl font-black tracking-normal sm:text-4xl">Dashboard</h1>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">Gelir, operasyon ve musteri buyumesi icin canli demo gorunumu.</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-1 text-sm font-semibold">
          <button className="rounded-md bg-slate-950 px-3 py-2 text-white">30 gun</button>
          <button className="rounded-md px-3 py-2 text-[rgb(var(--muted))] hover:bg-slate-100 dark:hover:bg-slate-800">90 gun</button>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((item, index) => {
          const Icon = icons[index];
          return (
            <Card key={item.label} className="p-5 transition hover:-translate-y-1 hover:shadow-glow">
              <div className="flex items-start justify-between gap-3">
                <span className={`rounded-lg p-3 ${toneMap[item.tone]}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="flex items-center gap-1 rounded-md bg-emerald-500/12 px-2 py-1 text-xs font-bold text-emerald-600">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {item.trend}
                </span>
              </div>
              <p className="mt-5 text-sm font-semibold text-[rgb(var(--muted))]">{item.label}</p>
              <p className="mt-1 text-3xl font-black">{item.value}</p>
              <p className="mt-2 text-xs text-[rgb(var(--muted))]">{item.note}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <Card className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black">Gelir trendi</h2>
              <p className="text-sm text-[rgb(var(--muted))]">Aylik gelir ve hedef karsilastirmasi</p>
            </div>
            <Badge value="Hedef ustu" />
          </div>
          <RevenueChart />
        </Card>
        <Card className="p-5">
          <h2 className="text-lg font-black">Kanal dagilimi</h2>
          <p className="mb-2 text-sm text-[rgb(var(--muted))]">Yeni musterilerin kaynak payi</p>
          <ChannelPieChart />
        </Card>
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <Card className="p-5">
          <h2 className="text-lg font-black">Haftalik siparis</h2>
          <p className="mb-2 text-sm text-[rgb(var(--muted))]">Siparis ve iade hacmi</p>
          <SalesBarChart />
        </Card>
        <Card className="overflow-hidden">
          <div className="flex items-center justify-between border-b border-[rgb(var(--border))] p-5">
            <div>
              <h2 className="text-lg font-black">Son islemler</h2>
              <p className="text-sm text-[rgb(var(--muted))]">Guncel odeme ve fatura akisi</p>
            </div>
            <button className="rounded-lg border border-[rgb(var(--border))] px-3 py-2 text-sm font-bold hover:border-indigo-300">Tumunu gor</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-900/70">
                <tr>
                  <th className="px-5 py-3">ID</th>
                  <th className="px-5 py-3">Musteri</th>
                  <th className="px-5 py-3">Plan</th>
                  <th className="px-5 py-3">Tutar</th>
                  <th className="px-5 py-3">Durum</th>
                  <th className="px-5 py-3">Zaman</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[rgb(var(--border))]">
                {transactions.map((item) => (
                  <tr key={item.id} className="transition hover:bg-indigo-500/[0.04]">
                    <td className="px-5 py-4 font-bold">{item.id}</td>
                    <td className="px-5 py-4">{item.customer}</td>
                    <td className="px-5 py-4 text-[rgb(var(--muted))]">{item.plan}</td>
                    <td className="px-5 py-4 font-bold">{item.amount}</td>
                    <td className="px-5 py-4"><Badge value={item.status} /></td>
                    <td className="px-5 py-4 text-[rgb(var(--muted))]">{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
