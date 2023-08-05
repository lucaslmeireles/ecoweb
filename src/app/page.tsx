import { Grid } from '@/components/grid'
import { get } from 'http'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts, getWeather } from './data'
import { WeatherCard } from '@/components/weathercard'



export default async function Home() { 
  const data = await getPosts()
  return (
    <>
    <main className="flex h-max ">
    <div className='ml-8 flex pr-16 pt-12'>
    <div className='flex flex-col w-full px-12'>
            <Grid data={data}/>
    </div>      
      <div className='flex flex-col'>
          <WeatherCard />
      </div>      
      
      </div>
    </main>
    </>
  )
}



