import React from 'react'
import ResourceCard from './ResourceCard';


const resource = [
  {
    title:"Time Complexity",
    content:"The time complexity of an algorithm quantifies the amount of time taken by an algorithm to run as a function of the length of the input. Note that the time to run is a function of the length of the input and not the actual execution time of the machine on which the algorithm is running on.",
    link:"https://drive.google.com/file/d/1749NIM5m2B1edtcveQf0yWZRrC6ORUww/preview"
  },
  {
    title:"Divide and Conquer method",
    content:"The divide and conquer method is a general algorithm design paradigm based on multi-branched recursion. A divide and conquer algorithm works by recursively breaking down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly.",
    link:"https://drive.google.com/file/d/1MphfGlBkEUeM7yT66OLa3AwIpXwH46Eb/preview"
  },
  {
    title:"Master Method",
    content:"The Master Theorem provides a solution to recurrence relations of the form T(n) = aT(n/b) + f(n), where a ≥ 1, b > 1, and f(n) is a given function.",
    link:"https://drive.google.com/file/d/16zI3LcTsV7xkXGO_W-ZFtLVJbPQO2_E9/preview"
  }
]


function Derivation() {
  return (
    <>
     <header id="headerQuiz">
        <h1>Learn - Understand</h1>
      </header>
      <h3 className="text-2xl mb-4 text-center  text-white">Unfold through the topic of Time Complexity, Algorithms and Derivation of Master Method.</h3>
    <div className=" py-10 flex justify-center items-center lg:mx-32 rounded-lg bg-gray-900 text-white">
      <div className="max-w-lg w-full flex flex-col gap-8 ">
        {resource.map((res, index) => (
           <ResourceCard key={index} title={res.title} content={res.content} link={res.link} />
        ))}
      </div>
    </div>
    </>
  );
}




export default Derivation