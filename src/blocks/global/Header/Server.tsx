import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import Link from 'next/link'

export default async function HeaderServer() {
  // Initialize Payload
  const payload = await getPayload({ config })

  // Fetch global data for 'header'
  const header = await payload.findGlobal({ slug: 'header' })

  // Handle case where header or logo is not available
  if (!header || !header.logo || !header.nav) {
    return <div>Header data not found.</div>
  }

  return (
    <div className="py-12">
      {/* Logo Section */}
      <div className="relative h-20 flex justify-center items-center">
        <Image
          src={header.logo.url}
          fill
          className="object-contain"
          alt="logo"
          priority // Ensures the logo is prioritized for loading
        />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center space-x-8 mt-6">
        {header.nav.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div>
        <button>login</button>
        <button>login</button>
      </div>
    </div>
  )
}
