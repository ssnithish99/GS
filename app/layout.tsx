import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GS Group - From Idea to Impact | Innovation & Growth',
  description: 'Transform your innovative concepts into market-leading solutions. GS Group delivers cutting-edge technology, strategic guidance, and scalable solutions for the next generation of businesses.',
  keywords: 'startup, innovation, technology, product development, business growth, digital transformation, consulting',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}