import { getWeather } from "@/app/data";
import Image from "next/image";

export async function WeatherCard() {
    const {data: weatherData, city} = await getWeather()
    return (
        <div className="w-80 h-14 px-1 flex gap-2 bg-primary rounded-lg">
        <Image alt="img-weather"src={`http://${weatherData.condition.icon}`} width={55} height={50} />
          <div className='flex  mx-3 flex-col'>
          <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.temp_c} ºC</div>
          <div className="w-40 h-3 py-2 text-teal-50 text-base font-medium">{city}</div>
          </div>
        </div> 
    )
}