import Link from "next/link";
import "../globals.css";
import { Inter, Quicksand } from "next/font/google";
import SearchInput from "./searchInput";
import { TiDocumentAdd } from "react-icons/ti";
import UserProfile from "@/components/userProfile";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });
import { SessionProvider } from "../providers/SessionProvider";
import { WeatherCard } from "@/components/weathercard";
import { Header } from "@/components/Header";
export const metadata = {
  title: "Eco",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta charSet="utf-8" />
      <body className={inter.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
        <img src="/wave.svg" alt="wave" className="w-full" />
        <ToastContainer />
      </body>
    </html>
  );
}
