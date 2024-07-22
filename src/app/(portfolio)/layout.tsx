import Header from '../components/Header'

export const metadata = {
  title: 'Ronan Salvador',
  description: 'Ronan Fernando Salvador',
  icons: {
    icon: '/R.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main
        className={`flex bg-gradient-to-r from-dark-blue via-verde to-blue h-full flex-col items-center justify-center flex-grow bg-opacity-10`}
      >
        {children}
      </main>
    </>
  )
}
