import { Grid } from '@/components/grid'
import { getPosts } from './data'
import { WeatherCard } from '@/components/weathercard'
import  NewsCard  from '@/components/newscard'
import { NewsGrid } from '@/components/newsgrid'

async function Home() { 
  const data = await getPosts()
  return (
    <>
    <main className="flex h-max">
    <div className='ml-8 flex pr-16 pt-12'>
    <div className='flex flex-col w-full px-12'>
            <Grid data={data}/>
    </div>      
      <div className='flex flex-col self-end'>
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

