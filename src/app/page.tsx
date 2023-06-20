import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-400 rounded-md h-10 w-auto align-middle'>
        <p className='text-center font-semibold text-lg'>
          Ola mundo
        </p>
      </div>
    </main>
  )
}
