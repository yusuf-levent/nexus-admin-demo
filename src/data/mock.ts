export const kpis = [
  { label: 'Gelir', value: '$128.4K', trend: '+18.2%', tone: 'emerald', note: 'Aylik tekrar eden gelir' },
  { label: 'Kullanici', value: '24,892', trend: '+9.6%', tone: 'indigo', note: 'Aktif hesap sayisi' },
  { label: 'Siparis', value: '8,461', trend: '+12.4%', tone: 'cyan', note: 'Son 30 gun' },
  { label: 'Donusum', value: '7.84%', trend: '+2.1%', tone: 'violet', note: 'Ziyaretciden odemeye' }
];

export const revenueData = [
  { month: 'Oca', gelir: 58, hedef: 52 },
  { month: 'Sub', gelir: 64, hedef: 55 },
  { month: 'Mar', gelir: 71, hedef: 62 },
  { month: 'Nis', gelir: 69, hedef: 65 },
  { month: 'May', gelir: 86, hedef: 72 },
  { month: 'Haz', gelir: 94, hedef: 80 },
  { month: 'Tem', gelir: 102, hedef: 85 },
  { month: 'Agu', gelir: 118, hedef: 92 },
  { month: 'Eyl', gelir: 128, hedef: 96 }
];

export const channelData = [
  { name: 'Organic', value: 42 },
  { name: 'Ads', value: 31 },
  { name: 'Referral', value: 18 },
  { name: 'Partner', value: 9 }
];

export const salesBars = [
  { name: 'Pzt', siparis: 142, iade: 12 },
  { name: 'Sal', siparis: 188, iade: 16 },
  { name: 'Car', siparis: 176, iade: 11 },
  { name: 'Per', siparis: 221, iade: 18 },
  { name: 'Cum', siparis: 265, iade: 20 },
  { name: 'Cmt', siparis: 238, iade: 14 },
  { name: 'Paz', siparis: 196, iade: 10 }
];

export const transactions = [
  { id: 'NX-9841', customer: 'Elif Sari', plan: 'Scale', amount: '$1,280', status: 'Odendi', time: '12 dk once' },
  { id: 'NX-9837', customer: 'Mert Kaya', plan: 'Growth', amount: '$740', status: 'Bekliyor', time: '34 dk once' },
  { id: 'NX-9822', customer: 'Nora Digital', plan: 'Enterprise', amount: '$4,900', status: 'Odendi', time: '1 sa once' },
  { id: 'NX-9818', customer: 'Atlas Studio', plan: 'Scale', amount: '$1,180', status: 'Incelemede', time: '2 sa once' },
  { id: 'NX-9809', customer: 'Vega Retail', plan: 'Growth', amount: '$620', status: 'Odendi', time: '3 sa once' }
];

export const users = [
  { name: 'Elif Sari', email: 'elif@nexus.co', role: 'Admin', status: 'Aktif', spend: '$8,420', avatar: 'ES' },
  { name: 'Mert Kaya', email: 'mert@nexus.co', role: 'Manager', status: 'Aktif', spend: '$5,180', avatar: 'MK' },
  { name: 'Deniz Arman', email: 'deniz@nexus.co', role: 'Analyst', status: 'Davetli', spend: '$2,940', avatar: 'DA' },
  { name: 'Nora Digital', email: 'ops@nora.io', role: 'Owner', status: 'Aktif', spend: '$18,600', avatar: 'ND' },
  { name: 'Atlas Studio', email: 'team@atlas.studio', role: 'Editor', status: 'Askida', spend: '$3,210', avatar: 'AS' },
  { name: 'Vega Retail', email: 'hello@vega.shop', role: 'Owner', status: 'Aktif', spend: '$9,780', avatar: 'VR' },
  { name: 'Luna Works', email: 'finance@luna.works', role: 'Billing', status: 'Davetli', spend: '$1,840', avatar: 'LW' }
];

export const orders = [
  { id: '#10482', product: 'Nexus Growth Suite', customer: 'Vega Retail', date: '26 Haz 2026', amount: '$1,240', status: 'Tamamlandi' },
  { id: '#10477', product: 'Automation Pack', customer: 'Nora Digital', date: '26 Haz 2026', amount: '$890', status: 'Hazirlaniyor' },
  { id: '#10469', product: 'Insight Seats x10', customer: 'Atlas Studio', date: '25 Haz 2026', amount: '$2,120', status: 'Tamamlandi' },
  { id: '#10451', product: 'Priority Support', customer: 'Mert Kaya', date: '24 Haz 2026', amount: '$460', status: 'Beklemede' },
  { id: '#10439', product: 'Enterprise Onboarding', customer: 'Nora Digital', date: '23 Haz 2026', amount: '$4,800', status: 'Tamamlandi' },
  { id: '#10418', product: 'API Credits 500K', customer: 'Luna Works', date: '22 Haz 2026', amount: '$720', status: 'Iptal' }
];
