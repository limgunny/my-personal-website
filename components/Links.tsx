import { FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

// Next.js
import Link from 'next/link'
import React from 'react'

export const Links = () => {
  return (
    <div className="flex">
      <LinkWrapper href="https://github.com/limgunny">
        <FiGithub />
      </LinkWrapper>
    </div>
  )
}

interface Props {
  children?: React.ReactNode
  href: string
}

const LinkWrapper = ({ href, children }: Props) => {
  return (
    <Link href={href} rel="noreferrer">
      <a
        className="text-2xl duration-100 focus:ring-2 ring-blue-500 outline-none rounded cursor-pointer mr-6 hover:text-black dark:hover:text-white text-gray-600 dark:text-gray-300"
        target="_blank"
      >
        {children}
      </a>
    </Link>
  )
}
