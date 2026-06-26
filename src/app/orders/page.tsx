import { AdminShell } from '@/components/admin-shell';
import { OrdersPage } from '@/components/orders-page';

export default function OrdersRoute() {
  return (
    <AdminShell>
      <OrdersPage />
    </AdminShell>
  );
}
