import { Grid } from '@/components/grid'
import { get } from 'http'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import { options } from './api/auth/[...nextauth]/options'

async function getPosts() {
  const res = await fetch('https://eco-api.vercel.app/post', {next: {revalidate: 8*60}})
  const data = await res.json()
  return data
}

async function getWeather() {
  const res = await fetch('https://api.weatherapi.com/v1/current.json?q=Volta Redonda&key=834b6a1ff61a4d34b7c170901231707')
  const data = await res.json()
  return data.current
}

export default async function Home() { 
  const data = await getPosts()
  
  const weather = await getWeather()
  const  session = await getServerSession(options)
  console.log(session)
  return (
    <>
    <main className="flex min-h-screen ">
    <div className='ml-8 flex pr-16 pt-12'>
    <div className=' flex flex-col w-full px-12'>
            <Grid data={data}/>
    </div>      
      <div className='flex flex-col'>
      <div className="w-80 h-14 px-1 flex justify-between bg-neutral-600 rounded-lg">
        <Image alt="img-weather"src={`http://${weather.condition.icon}`} width={55} height={50} />
          <div className='flex  mx-3 flex-col'>
          <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">{weather.temp_c} ºC</div>
          <div className="w-40 h-3 py-2 text-teal-50 text-base font-medium">Volta Redonda</div>
          </div>
          <div className= {`w-20 h-5 flex self-end  py-3 mb-2 justify-center rounded-2xl items-center bg-blue-400 `}>
          <div className=" text-white text-base font-medium">CO2</div>
          </div>
      </div>      
      </div>

      </div>
    </main>
    </>
  )
}



