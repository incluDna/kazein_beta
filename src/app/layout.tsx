import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "kazein-beta",
//   description: "All stages of kazein",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
// function Header() {
// return (
// <header className="bg-white shadow-sm">
// <div className="container mx-auto px-4 py-4 flex items-center justify-between">
// <Link href="/" className="font-bold text-xl">MySite</Link>
// <nav className="space-x-4 text-sm">
// <Link href="/">Home</Link>
// <Link href="/budget">Budget</Link>
// <Link href="/volunteer">Volunteer & Workshop</Link>
// <Link href="/travelling">Travelling</Link>
// <Link href="/preventions">Preventions</Link>
// <Link href="/games">Brain Teaser Games</Link>
// </nav>
// </div>
// </header>
// )
// }


// function Footer() {
// return (
// <footer className="bg-white border-t mt-8">
// <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} MySite</div>
// </footer>
// )
// }
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className="font-serif text-gray-800">
//         <Navbar />
//         <main className="min-h-screen">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-serif text-gray-800 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}