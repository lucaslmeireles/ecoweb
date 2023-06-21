import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-400 rounded-md align-middle w-96 h-56 flex-col relative'>
        <p className='font-semibold text-lg  text-center absolute ml-2 '>
          Ola mundo
        </p>
        <div className=' bg-slate-300 rounded-e-md w-96 h-10 absolute bottom-0 hover:bg-slate-100 border border-s-slate-300'>

        </div>
      </div>
    </main>
  )
}
