import React from 'react'
import Link from 'next/link'

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
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
      </a>
    </Link>
    <style jsx>{`
      .website-preview {
        margin: 20px;
        text-align: center;
      }
      img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.3s;
      }
      img:hover {
        transform: scale(1.05);
      }
      h3 {
        margin-top: 10px;
      }
    `}</style>
  </div>
)

export default WebsitePreview
