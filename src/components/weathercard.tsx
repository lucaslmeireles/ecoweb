'use client'
import {fetchLocation, getWeather } from "@/app/data";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  temp: number,
  icon: string,
  city: string
}


export function WeatherCard() {
    const [weatherData, setWeatherData] = useState({} as WeatherData)
    const [status, setStatus] = useState(false)
    
    useEffect(() => {
          const getData = async () => {
            const city =  await fetchLocation()
            const {temp, icon} = await getWeather(city)
            setWeatherData({temp,icon, city})
            setStatus(true)
          }
          getData()
    },[])

    if (!status) {
      return (
      <div className="w-80 h-14 px-1 flex gap-2 bg-primary rounded-lg">
        <div className='flex  mx-3 flex-col'>
        <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">Carregando</div>
        </div>
      </div> 
      )
    }

    return ( status &&
        <div className="w-80 h-14 px-1 flex gap-2 bg-primary rounded-lg">
        <Image alt="img-weather"src={`https:${weatherData.icon}`} width={55} height={50} />
          <div className='flex  mx-3 flex-col'>
          <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.temp} ºC</div>
          <div className="w-40 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.city}</div>
          </div>
        </div> 
    )
}