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
            <button className="text-gray-700 border p-1 px-4 rounded">
              Sign up
            </button>
          </div>
        </div>
      </nav>
      {/* NAVBAR */}
      {/* HEADER */}
      <div className="h-96 overflow-hidden">
        <div className="bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] h-full flex justify-center items-center">
          <h1 className="text-7xl text-white capitalize text-shadow text-center">
            Bar Zia (Minneapolis)
          </h1>
        </div>
      </div>
      {/* HEADER */}
      {/* DESCRIPTION PORTION */}
      <div className="text-black flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-(70%) rounded p-3 shadow">
          {/* RESTAURANT NAVBAR */}
          <nav className="flex text-reg border-b pb-2">
            <a href="" className="mr-7">
              Overview
            </a>
            <a href="" className="mr-7">
              Menu
            </a>
          </nav>
          {/* RESTAURANT NAVBAR */}
          {/* TITLE */}
          <div className="mt-4 border-b pb-6">
            <h1 className="font-bold text-6xl">Bar Zia</h1>
          </div>
          {/* TITLE */}
          {/* RATING */}
          <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
              <p>⭐️⭐️⭐️⭐️⭐️</p>
              <p className="text-reg ml-3">4.8</p>
            </div>
            <div>
              <p className="text-reg ml-4">600 Reviews</p>
            </div>
          </div>
          {/* RATING */}
          {/* DESCRIPTION */}
          <div className="mt-4">
            <p className="text-lg font-light">
              Pizza with a signature spicy but sweet sauce, as well as pasta &
              sandwiches.
            </p>
          </div>
          {/* DESCRIPTION */}
          {/* IMAGES */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              5 photos
            </h1>
            <div className="flex flex-wrap">
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="food1"
              ></img>
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://images.unsplash.com/photo-1502998070258-dc1338445ac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="food2"
              ></img>
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://images.unsplash.com/photo-1568376794508-ae52c6ab3929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                alt="food3"
              ></img>
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://images.unsplash.com/photo-1556040220-4096d522378d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="food4"
              ></img>
              <img
                className="w-56 h-44 mr-1 mb-1"
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                alt="food5"
              ></img>
            </div>
          </div>
          {/* IMAGES */}
          {/* REVIEWS */}
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              What 100 people are saying...
            </h1>
          </div>
          {/* REVIEW CARD */}
          <div className="border-b pb-7 mb-7"></div>
          <div className="flex">
            <div className="w-1/6 flex flex-col items-center">
              <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
                <h2 className="text-white text-2xl">KG</h2>
              </div>
              <p className="text-center">Kelly Garden</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="flex mr-5">⭐️⭐️⭐️⭐️⭐️</div>
              </div>
            </div>
            <div className="mt-5 flex mr-5">
              <p className="text-lg font-light ">
                Incredible food, service and the bill is just right! Love the vibe.
              </p>
            </div>
          </div>
          {/* REVIEW CARD */}
          {/* REVIEWS */}
        </div>
      </div>
      {/* DESCRIPTION PORTION */}
    </main>
  );
}
