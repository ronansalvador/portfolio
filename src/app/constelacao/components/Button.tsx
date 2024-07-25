import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  link: string
  className?: string
  children: ReactNode
  upperCase?: boolean
}

export default function Button({
  link,
  className,
  upperCase,
  children,
}: ButtonProps) {
  const renderChildren = (child: ReactNode) => {
    if (typeof child === 'string' && upperCase) {
      return child.toUpperCase()
    }
    return child
  }

  return (
    <Link
      href={link}
      className={`bg-magenta rounded-lg px-4 py-2.5 text-white w-full flex items-center justify-center hover:bg-roxo text-center text-lg max-w-xl ${className}`}
    >
      {renderChildren(children)}
    </Link>
  )
}
