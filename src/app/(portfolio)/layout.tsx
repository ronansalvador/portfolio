import Header from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main
        className={`flex bg-gradient-to-r from-dark-blue via-verde to-blue h-full flex-col items-center justify-center`}
      >
        {children}
      </main>
    </>
  )
}
