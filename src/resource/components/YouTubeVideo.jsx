import React from "react";

function YouTubeVideo({link}) {

  return (
    <div className="p-4">
     <iframe className= "lg:h-[300px] lg:w-[560px] sm:h-[100px] sm:w-[250px]" width="560" height="300" src={link} title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}

export default YouTubeVideo;