import HeaderConstelacao from './components/HeaderConstelacao'

export const metadata = {
  title: 'Ronan Salvador',
  description: 'Constelação Familiar',
  authors: [{ name: 'Ronan Salvador', url: 'https://ronansalvador.com.br' }],
  keywords: [
    'constelação',
    'constelacao',
    'constelacao familiar',
    'constelação familiar',
    'leis sistemicas',
    'bert heliinger',
    'ordens sistemicas',
    'leis do amor',
    'ordens do amor',
  ],
}

export default function ConstelacaoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderConstelacao />
      <main className="flex-grow flex flex-col items-center text-2xl text-justify">
        {children}
      </main>
      <footer className="flex items-center justify-center mt-6 p-3 text-magenta bg-fuchsia-100">
        &copy; {new Date().getFullYear()} - Ronan Salvador
      </footer>
    </div>
  )
}
