import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Ronan Salvador',
  description: 'Portfolio Ronan Fernando Salvador',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} h-screen w-screen flex flex-col`}>
        <Header />
        <main
          className={`flex bg-gradient-to-r from-dark-blue via-verde to-fuxia h-full flex-col items-center justify-center`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
