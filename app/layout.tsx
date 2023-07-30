import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PokeAnimex',
  description: 'Search all your favorite animes!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-black`}>
        <header className='py-12'>
          <Link href={"/"}>
            <h1 className="cursor-pointer text-[#EEEEEE] font-bold text-center text-5xl pb-4">PokeAnimex</h1>
          </Link>
          <SearchBar />
        </header>
        {
          children
        }
      </body>
    </html>
  )
}
