import { AdminShell } from '@/components/admin-shell';
import { UsersPage } from '@/components/users-page';

export default function UsersRoute() {
  return (
    <AdminShell>
      <UsersPage />
    </AdminShell>
  );
}
