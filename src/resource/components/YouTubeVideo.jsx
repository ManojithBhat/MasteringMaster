import React from "react";

function YouTubeVideo({link}) {

  return (
    <div>
     <iframe width="560" height="315" src={link} title="YouTube video player" frameorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  );
}

export default YouTubeVideo;