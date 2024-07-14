import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  link: string
  children: ReactNode
}

export default function Button({ link, children }: ButtonProps) {
  const renderChildren = (child: ReactNode) => {
    if (typeof child === 'string') {
      return child.toUpperCase()
    }
    return child
  }

  return (
    <Link
      href={link}
      className="bg-fuxia rounded-lg p-4 text-white w-full flex items-center justify-center hover:bg-magenta max-w-7xl"
    >
      {renderChildren(children)}
    </Link>
  )
}
