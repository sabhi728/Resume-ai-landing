import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Resume AI - Optimize Your Resume with AI',
  description: 'Tailor your resume to any job in seconds with AI. Get personalized suggestions and optimize your resume for better job matching.',
  keywords: 'resume, AI, job application, career, optimization, professional',
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