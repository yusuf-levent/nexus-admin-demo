import { AdminShell } from '@/components/admin-shell';
import { SettingsPage } from '@/components/settings-page';

export default function SettingsRoute() {
  return (
    <AdminShell>
      <SettingsPage />
    </AdminShell>
  );
}
