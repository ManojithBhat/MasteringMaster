import React from "react";
import YouTubeVideo from "./YouTubeVideo";
import IndividualLink from "./IndividualLink";

const links = [
  "https://www.youtube.com/embed/OynWkEj0S-s?si=k3Xn5FenFV34Jh8k",
  "https://www.youtube.com/embed/FBKjvXGGCJM?si=5yr2e7MQ1FTdkWAK",
  "https://www.youtube.com/embed/zbf0llo3-YI?si=cJjvQ0iJ5fMdH8tR",
  "https://www.youtube.com/embed/hK6R4zUgtho?si=op8_ugoQmSe9wT2e",
];

const websiteLinks = [
  {
    name: "Geeks For Geeks",
    link: "https://www.geeksforgeeks.org/advanced-master-theorem-for-divide-and-conquer-recurrences/",
  },
  {
    name: "Tutorialspoint",
    link: "https://www.tutorialspoint.com/design_and_analysis_of_algorithms/design_and_analysis_of_algorithms_masters_theorem.htm",
  },
  {
    name: "Brilliant",
    link: "https://brilliant.org/wiki/master-theorem/",
  },
  {
    name: "Stanford University",
    link: "https://web.stanford.edu/class/archive/cs/cs161/cs161.1168/lecture3.pdf",
  },
];


const gitHubRepos = [
  "https://github.com/claytonjwong/Master-Theorem",
  "https://github.com/hamza1886/master-theorem",
  
]

function Resource() {
  return (
    <>
      <header id="headerQuiz">
        <h1>Read - Learn - Revise</h1>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="">
          
          <div className="my-4 rounded-lg p-6">
            {/* Additional Resources */}
            <div className="text-2xl sm:text-base mb-10 font-medium text-white">
              Some insightful webstie to look for : 
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {websiteLinks.map((Ilink, index) => (
                <IndividualLink
                  key={index}
                  link={Ilink.link}
                  name={Ilink.name}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-2xl sm:text-base mb-10 font-medium text-white">
              Youtube videos for problem solving : 
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Video section */}
          
          {links.map((link, index) => (
            <YouTubeVideo key={index} link={link} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Resource;
