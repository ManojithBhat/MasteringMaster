import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";

const cardInfo = [
    {
        title:"Resource",
        content:" Access additional resources to enhance your learning. Leave the hustle of finding resources to us.We have got you covered."

    },
    {
        title:"Quiz",
        content:" Assess your understanding of algorithmic efficiency and challenge yourself with various scenarios."
    },
    {
        title:"Calculator",
        content:"Simply input your values, and let our tool handle the computation. Streamline your problem-solving process and gain insights"
    },
    {
        title:"Derivation",
        content:" Enhance your understanding of algorithmic efficiency and conquer challenging computational problems with confidence"
    }
]

export default function Home() {
  return (
    <>
      <div className="mx-auto w-full px-9 lg:mt-36 sm:mt-20  max-w-7xl flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1
            id="heading"
            className="text-4xl sm:text-5xl font-bold text-white mb-8"
          >
            Mastering The Master Method
          </h1>
          <p className="text-white mb-8 lg:px-24 stext-md sm:text-lg lg:text-xl">
            Unlock the secrets of algorithmic efficiency with 'Mastering The
            Master Method'. Dive deep into mastering one of the fundamental
            techniques in algorithm analysis. Elevate your problem-solving
            skills and conquer complex computational challenges with ease
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 font-medium bg-[#8184ed] rounded-lg text-white hover:bg-[#9d5af5]"
          >
            LEARN NOW
          </Link>
        </div>
        <div className=" mb-20 w-full h-56 sm:h-auto sm:max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <img
            className="rounded-lg w-full h-auto object-scale-down"
            src="https://miro.medium.com/v2/resize:fit:1400/0*V0W0ZJNbJ7tDeaEW"
            alt="Recursion"
          />
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {cardInfo.map((card, index) => (
                <Cards key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
