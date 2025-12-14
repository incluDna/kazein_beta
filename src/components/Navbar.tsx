// components/Navbar.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow border-b">
      <div className="max-w-6xl mx-auto flex items-center gap-6 py-4 px-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"   // ← ชื่อไฟล์ใน public
            alt="Kazein logo"
            width={32}
            height={32}
          />
          <span className="font-bold text-xl">
            KAZEIN <span className="text-xs border px-1 rounded">beta</span>
          </span>
        </Link>

        {/* MENU */}
        <nav className="flex gap-4 text-sm ml-auto">
          <Link href="/">Home</Link>
          <Link href="/budget">Budget</Link>
          <Link href="/volunteer">Volunteer & Workshop</Link>
          <Link href="/travelling">Travelling</Link>
          <Link href="/preventions">Preventions</Link>
          <Link href="/games">Game</Link>
        </nav>
      </div>
    </header>
  )
}