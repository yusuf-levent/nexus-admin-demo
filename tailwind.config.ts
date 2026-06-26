import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 18px 50px rgba(15, 23, 42, 0.08)',
        glow: '0 20px 45px rgba(99, 102, 241, 0.24)'
      }
    }
  },
  plugins: []
};

export default config;
