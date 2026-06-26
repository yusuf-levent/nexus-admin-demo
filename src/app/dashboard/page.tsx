import { AdminShell } from '@/components/admin-shell';
import { DashboardHome } from '@/components/dashboard-home';

export default function DashboardPage() {
  return (
    <AdminShell>
      <DashboardHome />
    </AdminShell>
  );
}
