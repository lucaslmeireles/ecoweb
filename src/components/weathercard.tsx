"use client";
import { fetchLocation, getWeather } from "@/app/data";
import Image from "next/image";
import { useEffect, useState } from "react";

type WeatherData = {
  temp: number;
  icon: string;
  city: string;
};

export function WeatherCard() {
  const [weatherData, setWeatherData] = useState({} as WeatherData);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const city = await fetchLocation();
      const { temp, icon } = await getWeather(city);
      setWeatherData({ temp, icon, city });
      setStatus(true);
    };
    getData();
  }, []);

  if (!status) {
    return (
      <div className="flex gap-2 ">
        <div className="flex  mx-3 flex-col">
          <div className=" text-teal-50 text-base font-medium">Carregando</div>
        </div>
      </div>
    );
  }

  return (
    status && (
      <div className="flex flex-row rounded-lg gap-2">
        <p className=" text-primary text-base font-medium">
          {weatherData.city}{" "}
        </p>
        <p className=" text-primary text-base font-medium">
          {weatherData.temp} ºC
        </p>
      </div>
    )
  );
}
