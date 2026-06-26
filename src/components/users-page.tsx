'use client';

import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Filter, Search } from 'lucide-react';
import { users } from '@/data/mock';
import { Avatar, Badge, Card } from './ui';

export function UsersPage() {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('Tum durumlar');

  const filtered = useMemo(() => {
    return users.filter((user) => {
      const matchQuery = `${user.name} ${user.email} ${user.role}`.toLowerCase().includes(query.toLowerCase());
      const matchStatus = status === 'Tum durumlar' || user.status === status;
      return matchQuery && matchStatus;
    });
  }, [query, status]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div>
          <h1 className="text-3xl font-black sm:text-4xl">Kullanicilar</h1>
          <p className="mt-2 text-sm text-[rgb(var(--muted))]">Ekip, musteri ve hesap durumlarini tek tabloda takip et.</p>
        </div>
        <button className="h-11 rounded-lg bg-indigo-600 px-4 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5">Yeni kullanici</button>
      </div>

      <Card className="overflow-hidden">
        <div className="grid gap-3 border-b border-[rgb(var(--border))] p-5 lg:grid-cols-[1fr_220px]">
          <label className="relative block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--muted))]" />
            <input
              className="h-11 w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] pl-10 pr-3 text-sm outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
              placeholder="Kullanici ara"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          <label className="relative block">
            <Filter className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--muted))]" />
            <select
              className="h-11 w-full appearance-none rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] pl-10 pr-3 text-sm font-semibold outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            >
              {['Tum durumlar', 'Aktif', 'Davetli', 'Askida'].map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-slate-900/70">
              <tr>
                <th className="px-5 py-3">Kullanici</th>
                <th className="px-5 py-3">Rol</th>
                <th className="px-5 py-3">Durum</th>
                <th className="px-5 py-3">Harcama</th>
                <th className="px-5 py-3">Segment</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--border))]">
              {filtered.map((user) => (
                <tr key={user.email} className="transition hover:bg-indigo-500/[0.04]">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar label={user.avatar} />
                      <div>
                        <p className="font-bold">{user.name}</p>
                        <p className="text-xs text-[rgb(var(--muted))]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-semibold">{user.role}</td>
                  <td className="px-5 py-4"><Badge value={user.status} /></td>
                  <td className="px-5 py-4 font-bold">{user.spend}</td>
                  <td className="px-5 py-4 text-[rgb(var(--muted))]">B2B SaaS</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-[rgb(var(--border))] p-5 text-sm text-[rgb(var(--muted))] sm:flex-row sm:items-center">
          <span>{filtered.length} kayit listeleniyor</span>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border border-[rgb(var(--border))] p-2 hover:border-indigo-300" aria-label="Onceki sayfa">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="rounded-lg bg-indigo-600 px-3 py-2 font-bold text-white">1</span>
            <span className="rounded-lg px-3 py-2 font-bold">2</span>
            <button className="rounded-lg border border-[rgb(var(--border))] p-2 hover:border-indigo-300" aria-label="Sonraki sayfa">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
