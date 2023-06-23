'use client'
import { Grid } from '@/components/grid'
import { GridPosts } from '@/components/gridPost'
import { GridCard } from '@/components/gridcard'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
    <div className='ml-8 flex pr-16 pt-16'>
      <Grid featuredCategory={['Lucas', 'Lucio']} posts={[{posts:{category:'Lucas',title:'Lucas',id:123, image:'https://th.bing.com/th/id/OIP.8DMjS2i4JfAiA-Lg2WN7vQHaHa?w=178&h=180&c=7&r=0&o=5&pid=1.7'}}]}/>
      <div className='flex flex-col'>
      <div className="w-[240px] h-[389px] relative ">
          <div className="w-60 h-[389px]  bg-zinc-300 rounded-3xl" />
          <div className="w-[123px] h-[123px] left-[58px] top-[29px] absolute bg-red-600 rounded-full" />
          <div className="w-[68px] h-[23px] left-[84px] top-[211px] absolute text-black text-[15px] font-medium">My Name</div>
          <div className="w-[69px] h-[45px] left-[31px] top-[278px] absolute text-black text-[15px] font-medium">Followers</div>
          <div className="w-[69px] h-[45px] left-[133px] top-[278px] absolute text-black text-[15px] font-medium">Followers<br/></div>
      </div>
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