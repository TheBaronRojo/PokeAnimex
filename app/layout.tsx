import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

/**
 * Static metadata
 */
export const metadata: Metadata = {
  title: 'PokeAnimex',
  description: 'Search all your favorite animes!',
}

/**
 * Root layout, applies for every page,
 * receives children for rendering. This is a 
 * server side rendering component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary-black flex flex-col h-screen justify-between`}>
        <header className='py-12'>
          <Link href={"/"}>
            <h1 className="cursor-pointer text-[#EEEEEE] font-bold text-center text-5xl pb-4">PokeAnimex</h1>
          </Link>
          <SearchBar />
        </header>
        {
          children
        }
        <footer className=' bg-secondary-black h-16 flex'>
          <span className='text-primary-white p-2 mx-auto text-center items-center flex'>PokeAnimex ©2023</span>
        </footer>
      </body>
    </html>
  )
}
