import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexus Admin',
  description: 'Premium SaaS admin dashboard demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
