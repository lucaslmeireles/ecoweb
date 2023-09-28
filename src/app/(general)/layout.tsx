import Link from 'next/link'
import '../globals.css'
import { Inter, Quicksand } from 'next/font/google'
import SearchInput from './searchInput'
import {TiDocumentAdd} from 'react-icons/ti'
import UserProfile from  '@/components/userProfile'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const inter = Inter({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })
import {SessionProvider} from '../providers/SessionProvider'
export const metadata = {
  title: 'Eco',
  description: '',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body className={inter.className}>
      <SessionProvider>
        <nav className='h-16 bg-white drop-shadow-md flex justify-between items-center align-middle'>
          <Link href="/">
          <p className={`${quicksand.className} font-semibold text-4xl text-primary mx-3`}>
          ECO</p>
          </Link>
          <SearchInput/>
          <div className='flex space-x-2'>
          <ul>
          </ul>
            <UserProfile/>
          </div>
        </nav>
        {children}
        </SessionProvider>
        <img src="/wave.svg" alt="wave" className="w-full" />
        <ToastContainer/>
        </body>
    </html>
  )
}
