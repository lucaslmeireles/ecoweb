'use client'
import { getWeather } from "@/app/data";
import Image from "next/image";
import { type } from "os";
import { useEffect, useState } from "react";

type WeatherData = {
  temp: number,
  icon: string,
  city: string
}

const fetchLocation = async () => {
  const response = await fetch('https://ipapi.co/json/', {headers: {'Content-Type': 'application/json'}, next: {revalidate: 60*60*60*24}})
  const d = await response.json()
  console.log(d)
  return d.city;
}

export function WeatherCard() {
    const [weatherData, setWeatherData] = useState({} as WeatherData)
    
    useEffect(() => {
          const getData = async () => {
            const city =  await fetchLocation()
            const {temp, icon} = await getWeather(city)
            setWeatherData({temp,icon, city})
          }
          getData()
    },[])
    return (
        <div className="w-80 h-14 px-1 flex gap-2 bg-primary rounded-lg">
        <Image alt="img-weather"src={`https:${weatherData.icon}`} width={55} height={50} />
          <div className='flex  mx-3 flex-col'>
          <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.temp} ºC</div>
          <div className="w-40 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.city}</div>
          </div>
        </div> 
    )
}