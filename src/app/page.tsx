'use client'
import { Grid } from '@/components/grid'
import { GetStaticProps } from 'next'
import Image from 'next/image'


export default async function Home() { 
    const res = await fetch('https://eco-api.vercel.app/post', {
      method: 'GET',
  
    })
    const data = await res.json()
  return (
    <main className="flex min-h-screen ">
    <div className='ml-8 flex pr-16 pt-16'>
    <div className=' flex flex-col w-full p-16'>
            <Grid data={data} />
        </div>      
      <div className='flex flex-col'>
      <div className="w-[240px] h-[117px] relative mt-5 pr-16 pt-16 ">
        <div className="w-[240px] h-[117px] left-[0px] top-[0px] absolute bg-sky-500 rounded-[25px]" />
        <div className="w-[99px] h-[28px] left-[107px] top-[77px] absolute bg-green-500 rounded-[30px]" />
        <div className="left-[119px] top-[82px] absolute text-white text-[15px] font-medium">IQ 45 BOM</div>
        <div className="left-[107px] top-[50px] absolute text-white text-[15px] font-medium">23 Graus</div>
        <div className="left-[107px] top-[23px] absolute text-white text-[15px] font-medium">Volta Redonda</div>
        <div className="w-[62px] h-[62px] left-[25px] top-[19px] absolute bg-yellow-400 rounded-full" />
        </div>
      </div>

      </div>
    </main>
  )
}



