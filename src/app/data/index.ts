type Tag = {
  name: string
}
 export async function getPosts() {
    const res = await fetch('https://eco-api-lucaslmeireles.vercel.app/post/featured', {headers: {'Content-Type': 'application/json'}})
    const data = await res.json()
    return data
  }
  
export async function getWeather() {
    const response = await fetch('https://ipapi.co/json/', {headers: {'Content-Type': 'application/json'}, next: {revalidate: 60*60*60*24}})
    const locationdata = await response.json()
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?q=${locationdata.city}&key=834b6a1ff61a4d34b7c170901231707`, {next: {revalidate: 60*60*60*2}})
    const data = await res.json()
    return { data: data.current, city: locationdata.city }
  }

export async function getNews() {
  const data = await fetch('https://newsapi.ai/api/v1/article/getArticles?query=%7B%22%24query%22%3A%7B%22%24and%22%3A%5B%7B%22%24or%22%3A%5B%7B%22conceptUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEnvironmental_protection%22%7D%2C%7B%22conceptUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FClean_Energy_Partnership%22%7D%5D%7D%2C%7B%22%24or%22%3A%5B%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUnited_States%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FEuropean_Union%22%7D%2C%7B%22locationUri%22%3A%22http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBrazil%22%7D%5D%7D%2C%7B%22lang%22%3A%22por%22%7D%5D%7D%2C%22%24filter%22%3A%7B%22forceMaxDataTimeWindow%22%3A%2231%22%7D%7D&resultType=articles&articlesSortBy=date&includeArticleImage=true&apiKey=c8df12e0-ec4f-42df-829e-ee5e5d8f3def', {headers: {'Content-Type': 'application/json'}, next: {revalidate: 60*60*60*24}})
  const {articles: {results}} = await data.json()
  return results
}

export async function createPost(access_token : string, body : string) {
  const res = await fetch('https://eco-api.vercel.app/post/create', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Authorization" : 'Bearer ' +  access_token,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })
  const response = await res.json()
  return  response
}

export async function getTags(){
  const tags =  await fetch('https://eco-api.vercel.app/tags/', {headers: {'Content-Type': 'application/json'}})
  const data = await tags.json()
  const tagsList = data.map((tag:Tag) => {
      return {value: tag.name, label: tag.name}
  })
  return tagsList
}