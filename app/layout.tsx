import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mentron - AI-Powered Learning Management System',
  description: 'Transform education with intelligent AI solutions for institutions, educators, and students.',
  icons: {
    icon: '/resources/logo/mentron_geo_logo_blue.png',
    shortcut: '/resources/logo/mentron_geo_logo_blue.png',
    apple: '/resources/logo/mentron_geo_logo_blue.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-body`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
