import { PackageCheck, PackageOpen, ShieldCheck, Truck } from 'lucide-react';
import { orders } from '@/data/mock';
import { Badge, Card } from './ui';

const summary = [
  { label: 'Aktif siparis', value: '1,284', icon: PackageOpen, tone: 'text-indigo-600 bg-indigo-500/12' },
  { label: 'Tamamlanan', value: '8,916', icon: PackageCheck, tone: 'text-emerald-600 bg-emerald-500/12' },
  { label: 'Lojistik SLA', value: '97.8%', icon: Truck, tone: 'text-cyan-600 bg-cyan-500/12' },
  { label: 'Guvenli odeme', value: '99.9%', icon: ShieldCheck, tone: 'text-violet-600 bg-violet-500/12' }
];

export function OrdersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black sm:text-4xl">Urunler & Siparisler</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">Paketler, faturalar ve operasyon durumlari.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {summary.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="p-5">
              <div className="flex items-center justify-between">
                <span className={`rounded-lg p-3 ${item.tone}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-xs font-bold text-emerald-600">Canli</span>
              </div>
              <p className="mt-5 text-sm font-semibold text-[rgb(var(--muted))]">{item.label}</p>
              <p className="mt-1 text-3xl font-black">{item.value}</p>
            </Card>
          );
        })}
      </div>

      <Card className="overflow-hidden">
        <div className="flex flex-col justify-between gap-3 border-b border-[rgb(var(--border))] p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-lg font-black">Siparis akisi</h2>
            <p className="text-sm text-[rgb(var(--muted))]">Son urun ve abonelik hareketleri</p>
          </div>
          <div className="flex gap-2 text-sm font-bold">
            <button className="rounded-lg bg-slate-950 px-3 py-2 text-white">Tum siparisler</button>
            <button className="rounded-lg border border-[rgb(var(--border))] px-3 py-2 hover:border-indigo-300">Hazirlaniyor</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-900/70">
              <tr>
                <th className="px-5 py-3">Siparis</th>
                <th className="px-5 py-3">Urun</th>
                <th className="px-5 py-3">Musteri</th>
                <th className="px-5 py-3">Tarih</th>
                <th className="px-5 py-3">Tutar</th>
                <th className="px-5 py-3">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--border))]">
              {orders.map((order) => (
                <tr key={order.id} className="transition hover:bg-indigo-500/[0.04]">
                  <td className="px-5 py-4 font-black">{order.id}</td>
                  <td className="px-5 py-4 font-semibold">{order.product}</td>
                  <td className="px-5 py-4 text-[rgb(var(--muted))]">{order.customer}</td>
                  <td className="px-5 py-4 text-[rgb(var(--muted))]">{order.date}</td>
                  <td className="px-5 py-4 font-bold">{order.amount}</td>
                  <td className="px-5 py-4"><Badge value={order.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
