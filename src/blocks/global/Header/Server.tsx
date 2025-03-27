import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { getPayload } from 'payload'
import config from '@payload-config'

export default async function Header() {
  const payload = await getPayload({ config })

  // Fetch global data for 'header'
  const header = await payload.findGlobal({ slug: 'header' })

  // Handle case where header or logo is not available
  if (!header || !header.logo || !header.nav) {
    return <div>Header data not found.</div>
  }

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <Image
              src={header.logo.url}
              fill
              className="object-contain"
              alt={header.logo.alt}
              priority // Ensures the logo is prioritized for loading
            />
          </Link>
          <div className="grid gap-2 py-6">
            {header.nav.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="font-sm text-[#2a2a2c] opacity-60 hover:text-blue-600 transition-colors"
              >
                {item.text}
              </Link>
            ))}
          </div>
          {/* Add Register and Sign In buttons for mobile view */}
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" className="w-full">
              Register
            </Button>
            <Button className="w-full">Sign In</Button>
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="hidden lg:flex flex-1 justify-center gap-6">
        {header.nav.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-sm text-[#2a2a2c] opacity-60 hover:text-blue-600 transition-colors"
          >
            {item.text}
          </Link>
        ))}
      </nav>
      <div className="hidden lg:flex ml-auto gap-4">
        <Button variant="outline">Register</Button>
        <Button>Sign In</Button>
      </div>
    </header>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

async function MountainIcon(props) {
  const payload = await getPayload({ config })

  // Fetch global data for 'header'
  const header = await payload.findGlobal({ slug: 'header' })

  // Handle case where header or logo is not available
  if (!header || !header.logo || !header.nav) {
    return <div>Header data not found.</div>
  }
  return (
    <div className="relative h-20 w-20 flex justify-center items-center">
      <Image
        src={header.logo.url}
        fill
        className="object-contain"
        alt={header.logo.alt}
        priority // Ensures the logo is prioritized for loading
      />
    </div>
  )
}
