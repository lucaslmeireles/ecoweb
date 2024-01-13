import { Grid } from "@/components/grid";

import { WeatherCard } from "@/components/weathercard";
import { NewsGrid } from "@/components/newsgrid";
import { getPosts } from "../data";
import Tags from "@/components/Tags";

async function Home() {
  const data = await getPosts();
  return (
    <>
      <main className="h-max bg-banner">
        <div className="flex flex-col w-full bg-gradient-to-b from-transparent to-white ">
          <h1 className="text-4xl text-white font-bold  p-8">My Feed</h1>
          <Grid data={data} />
        </div>
      </main>
    </>
  );
}

export default Home;
