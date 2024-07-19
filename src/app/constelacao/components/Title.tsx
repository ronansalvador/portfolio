export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <>
      <h2 className="text-magenta font-medium mt-5 text-3xl">{children}</h2>
      <hr />
    </>
  )
}
