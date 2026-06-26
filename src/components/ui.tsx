import { clsx } from 'clsx';

export function Card({
  children,
  className = ''
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={clsx('glass-panel rounded-lg', className)}>{children}</section>;
}

export function Badge({ value }: { value: string }) {
  const tone =
    value.includes('Aktif') || value.includes('Odendi') || value.includes('Tamamlandi')
      ? 'bg-emerald-500/12 text-emerald-700 ring-emerald-500/20 dark:text-emerald-300'
      : value.includes('Bek') || value.includes('Hazir') || value.includes('Davetli')
        ? 'bg-amber-500/12 text-amber-700 ring-amber-500/20 dark:text-amber-300'
        : value.includes('Askida') || value.includes('Iptal')
          ? 'bg-rose-500/12 text-rose-700 ring-rose-500/20 dark:text-rose-300'
          : 'bg-indigo-500/12 text-indigo-700 ring-indigo-500/20 dark:text-indigo-300';

  return (
    <span className={clsx('inline-flex items-center rounded-md px-2 py-1 text-xs font-semibold ring-1', tone)}>
      {value}
    </span>
  );
}

export function Avatar({ label, className = '' }: { label: string; className?: string }) {
  return (
    <span
      className={clsx(
        'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-500 text-xs font-bold text-white shadow-sm',
        className
      )}
    >
      {label}
    </span>
  );
}
