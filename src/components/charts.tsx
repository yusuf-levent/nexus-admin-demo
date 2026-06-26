'use client';

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { channelData, revenueData, salesBars } from '@/data/mock';

const chartText = '#64748b';
const pieColors = ['#6366f1', '#06b6d4', '#10b981', '#f59e0b'];

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={revenueData} margin={{ left: -20, right: 8, top: 12, bottom: 0 }}>
        <defs>
          <linearGradient id="revenueGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.42} />
            <stop offset="92%" stopColor="#6366f1" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fill: chartText, fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: chartText, fontSize: 12 }} />
        <Tooltip
          contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', boxShadow: '0 16px 36px rgba(15,23,42,.12)' }}
          formatter={(value) => [`$${value}K`, '']}
        />
        <Area type="monotone" dataKey="hedef" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" fill="transparent" />
        <Area type="monotone" dataKey="gelir" stroke="#6366f1" strokeWidth={3} fill="url(#revenueGradient)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export function SalesBarChart() {
  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={salesBars} margin={{ left: -24, right: 0, top: 16, bottom: 0 }}>
        <CartesianGrid stroke="#e2e8f0" strokeDasharray="4 4" vertical={false} />
        <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: chartText, fontSize: 12 }} />
        <YAxis tickLine={false} axisLine={false} tick={{ fill: chartText, fontSize: 12 }} />
        <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0' }} />
        <Bar dataKey="siparis" radius={[6, 6, 0, 0]} fill="#06b6d4" />
        <Bar dataKey="iade" radius={[6, 6, 0, 0]} fill="#f59e0b" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export function ChannelPieChart() {
  return (
    <div className="grid items-center gap-4 sm:grid-cols-[1fr_160px]">
      <ResponsiveContainer width="100%" height={220}>
        <PieChart>
          <Pie data={channelData} dataKey="value" innerRadius={56} outerRadius={86} paddingAngle={4}>
            {channelData.map((entry, index) => (
              <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0' }} formatter={(value) => [`%${value}`, 'Pay']} />
        </PieChart>
      </ResponsiveContainer>
      <div className="space-y-3">
        {channelData.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between gap-3 text-sm">
            <span className="flex items-center gap-2 text-[rgb(var(--muted))]">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: pieColors[index] }} />
              {item.name}
            </span>
            <span className="font-bold text-[rgb(var(--ink))]">%{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
