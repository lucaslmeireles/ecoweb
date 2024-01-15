import Link from "next/link";
import { WeatherCard } from "./weathercard";
import UserProfile from "./userProfile";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

export function Header() {
  return (
    <nav className="h-16 bg-white drop-shadow-md flex justify-between items-center align-middle">
      <Link href="/" className="flex flex-row gap-4 align-middle items-center">
        <p
          className={`${quicksand.className} font-semibold text-4xl text-primary mx-3`}
        >
          ECO
        </p>
        <WeatherCard />
      </Link>
      <div className="flex flex-row space-x-2">
        <UserProfile />
      </div>
    </nav>
  );
}
