import React from 'react'
import config from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

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
    <div className="flex justify-between items-center px-4 ">
      {/* Logo Section */}
      <div className="relative h-20 w-20 flex justify-center items-center">
        <Image
          src={header.logo.url}
          fill
          className="object-contain"
          alt={header.logo.alt}
          priority // Ensures the logo is prioritized for loading
        />
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center space-x-8 mt-6">
        {header.nav.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className=" font-sm text-[#2a2a2c] opacity-60 hover:text-blue-600 transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        <Button className="px-5 py-3 text-sm ">login</Button>
        <Button className="px-5 py-3 bg-[#2a2a2c] text-sm text-white">Register</Button>
      </div>
    </div>
  )
}
