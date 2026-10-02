import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MahiVerse ✦ made for Mahi Sharma',
  description: 'A tiny interactive universe for Mahi Sharma — anime, K-pop, Doraemon & Shinchan energy.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
