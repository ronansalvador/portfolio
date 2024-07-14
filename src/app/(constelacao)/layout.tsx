import HeaderConstelacao from '../components/HeaderConstelacao'

export default function ConstelacaoLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderConstelacao />
      <main className={`flex bg-gray-100 h-full flex-col items-center`}>
        {children}
      </main>
    </>
  )
}
