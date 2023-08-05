import { Grid } from '@/components/grid'
import Image from 'next/image'
import Link from 'next/link'
import { getPosts } from './data'
import ClientProvider from './providers/ClientProvider'
import { WeatherCard } from '@/components/weathercard'

async function Home() { 
  const data = await getPosts()
  //Agurpar por tags fazer um map e depois 
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

export default Home

