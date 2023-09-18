import { Grid } from '@/components/grid'

import { WeatherCard } from '@/components/weathercard'
import { NewsGrid } from '@/components/newsgrid'
import { getPosts } from '../data'
import Tags from '@/components/Tags'

async function Home() { 
  const data = await getPosts()
  return (
    <>
    <main className="mx-5 h-max">
    <div className='flex pt-12 align-top'>
    <div className='flex flex-col w-full mx-3  '>
            <Grid data={data}/>
            <h1 className="text-3xl font-semibold pb-3">Tags</h1>
            <Tags/>
    </div>     
      <div className='flex flex-col self-start'>
          <WeatherCard />
      <div className='h-full w-80 py-2 mt-4 rounded-lg bg-neutral-400 flex flex-col align-middle items-center'>
          <NewsGrid/>
      </div>
      </div>      
    </div>
    </main>
    </>
  )
}

export default Home

