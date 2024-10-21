import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface WebsitePreviewProps {
  imageUrl: string
  link: string
  title: string
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({
  imageUrl,
  link,
  title,
}) => (
  <div className="website-preview">
    <Link href={link}>
      <a target="_blank">
        <Image src={imageUrl} alt={title} width={500} height={300} />
        <h3>{title}</h3>
      </a>
    </Link>
  </div>
)

export default WebsitePreview
