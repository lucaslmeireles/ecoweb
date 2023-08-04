import { GetWheaterType } from "../../../types/dataFunctions.type"

 export async function getPosts() {
    const res = await fetch('https://eco-api.vercel.app/post', {headers: {'Content-Type': 'application/json'}})
    const data = await res.json()
    return data
  }
  
export async function getWeather({latitude,longitude}: GetWheaterType) {
    const res = await fetch('https://api.weatherapi.com/v1/current.json?q=Volta Redonda&key=834b6a1ff61a4d34b7c170901231707')
    const data = await res.json()
    return data.current
  }