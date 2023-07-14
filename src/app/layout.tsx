import Link from 'next/link'
import './globals.css'
import { Inter, Jura, Quicksand, Quintessential } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
export const metadata = {
  title: 'Eco',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className='h-16 bg-white drop-shadow-md flex justify-between items-center align-middle'>
          <p className={`${quicksand.className} font-semibold text-4xl text-emerald-800 mx-3`}>
          ECO</p>
          <div className='flex justify-around w-1/4 h-7 bg-slate-600 rounded-lg'>
            <p className='text-emerald-400 text-base'>Buscar</p>
            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 36 36" width="16px" height="16px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
          </div>
          <ul>
            <li>Test</li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  )
}
