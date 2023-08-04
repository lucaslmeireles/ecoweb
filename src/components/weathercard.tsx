"use client"
import { getWeather } from "@/app/data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export async function WeatherCard() {
    const [location, setLocation] = useState({})
    useMemo(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            })
        }
    }, []);
    const weather = await getWeather(location)
    return (
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
    )
}