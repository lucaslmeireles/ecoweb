import { getWeather } from "@/app/data";
import Image from "next/image";

export async function WeatherCard() {
    const {data: weatherData, city} = await getWeather()
    return (
        <div className="w-80 h-14 px-1 flex justify-between bg-neutral-600 rounded-lg">
        <Image alt="img-weather"src={`http://${weatherData.condition.icon}`} width={55} height={50} />
          <div className='flex  mx-3 flex-col'>
          <div className="w-20 h-3 py-2 text-teal-50 text-base font-medium">{weatherData.temp_c} ºC</div>
          <div className="w-40 h-3 py-2 text-teal-50 text-base font-medium">{city}</div>
          </div>
          <div className= {`w-20 h-5 flex self-end  py-3 mb-2 justify-center rounded-2xl items-center bg-blue-400 `}>
          <div className=" text-white text-base font-medium">CO2</div>
          </div>
        </div> 
    )
}