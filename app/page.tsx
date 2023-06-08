// import Image from 'next/image'
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">HELLO NEXT WORLD</main>
      {/* NAVBAR */}
      <nav className="bg-white p-2 flex justify-between">
        <a href="" className="font-bold text-gray-700 text-2xl">
          OpenTable
        </a>
        <div>
          <div className="flex">
            <button className="bg-blue-400 text-white border p-1 px-4 rounded mr-3">
              Sign in
            </button>
            <button className="text-black border p-1 px-4 rounded">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      {/* NAVBAR */}
      <main>
        {/* HEADER */}
        <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
          <div className="text-center mt-10">
            <h1 className="text-white text-5xl font-bold mb-2">
              Find your table for any occassion
            </h1>
             {/* SEARCH BAR */}
        <div className="text-left py-3 m-auto flex justify-center">
          <input className="bg-white rounded text-lg mr-3 p-2 w-[450px]" type="text" placeholder="State, City, or Town"></input>
        <button className="rounded bg-red-600 px-9 py-2 text-white">Let's Go</button>
        </div>
      
        {/* SEARCH BAR */}
          </div>
        </div>
        {/* HEADER */}
       
      </main>
    </main>
  );
}
