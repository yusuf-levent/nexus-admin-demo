'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Bell,
  Boxes,
  ChevronDown,
  LayoutDashboard,
  Menu,
  Moon,
  Search,
  Settings,
  Sparkles,
  Sun,
  Users,
  X
} from 'lucide-react';
import { clsx } from 'clsx';
import { Avatar } from './ui';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/users', label: 'Kullanicilar', icon: Users },
  { href: '/orders', label: 'Urunler & Siparisler', icon: Boxes },
  { href: '/settings', label: 'Ayarlar', icon: Settings }
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  return (
    <main className={clsx('min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--ink))]', dark && 'dark-shell')}>
      <div className="flex min-h-screen">
        <aside
          className={clsx(
            'fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200/80 bg-slate-950 text-white transition-transform duration-300 dark:border-slate-800 lg:static lg:translate-x-0',
            open ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <div className="flex h-full flex-col">
            <div className="flex h-20 items-center justify-between px-5">
              <Link href="/dashboard" className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-400 to-cyan-300 shadow-glow">
                  <Sparkles className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-lg font-extrabold tracking-normal">Nexus Admin</span>
                  <span className="block text-xs font-medium text-slate-400">SaaS Control Center</span>
                </span>
              </Link>
              <button className="rounded-lg p-2 text-slate-300 hover:bg-white/10 lg:hidden" onClick={() => setOpen(false)} aria-label="Menuyu kapat">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="space-y-1 px-3">
              {navItems.map((item) => {
                const active = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      'flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm font-semibold transition',
                      active ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    )}
                  >
                    <Icon className={clsx('h-5 w-5', active ? 'text-indigo-600' : 'text-slate-400')} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mx-4 mt-6 rounded-lg border border-white/10 bg-white/[0.06] p-4">
              <p className="text-sm font-bold">AI Revenue Pulse</p>
              <p className="mt-1 text-xs leading-5 text-slate-400">Haziran hedefinin yuzde 84&apos;u tamamlandi. En guclu kanal organic traffic.</p>
              <div className="mt-4 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[84%] rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300" />
              </div>
            </div>

            <div className="mt-auto border-t border-white/10 p-4">
              <div className="flex items-center gap-3 rounded-lg bg-white/[0.06] p-3">
                <Avatar label="YA" className="h-9 w-9" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold">Yusuf Admin</p>
                  <p className="truncate text-xs text-slate-400">owner@nexus.io</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {open ? <button className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)} aria-label="Menuyu kapat" /> : null}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-20 border-b border-[rgba(var(--border),0.75)] bg-[rgba(var(--bg),0.82)] px-4 py-4 backdrop-blur-xl sm:px-6">
            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2 lg:hidden" onClick={() => setOpen(true)} aria-label="Menuyu ac">
                <Menu className="h-5 w-5" />
              </button>
              <div className="relative max-w-xl flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--muted))]" />
                <input
                  className="h-11 w-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] pl-10 pr-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10"
                  placeholder="Musteri, siparis veya metrik ara"
                />
              </div>
              <button
                className="hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2.5 transition hover:border-indigo-300 sm:inline-flex"
                onClick={() => setDark((value) => !value)}
                aria-label="Koyu modu degistir"
              >
                {dark ? <Sun className="h-5 w-5 text-amber-400" /> : <Moon className="h-5 w-5 text-slate-600" />}
              </button>
              <button className="relative rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-2.5 transition hover:border-indigo-300" aria-label="Bildirimler">
                <Bell className="h-5 w-5 text-[rgb(var(--muted))]" />
                <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))] p-1.5 pr-2 transition hover:border-indigo-300">
                <Avatar label="YA" className="h-8 w-8" />
                <ChevronDown className="hidden h-4 w-4 text-[rgb(var(--muted))] sm:block" />
              </button>
            </div>
          </header>
          <div className="flex-1 p-4 sm:p-6 lg:p-8">{children}</div>
        </div>
      </div>
    </main>
  );
}
