import React from 'react'
import YouTubeVideo from './YouTubeVideo'

const links=[
  "https://www.youtube.com/embed/OynWkEj0S-s?si=k3Xn5FenFV34Jh8k",
  "https://www.youtube.com/embed/FBKjvXGGCJM?si=5yr2e7MQ1FTdkWAK",
  "https://www.youtube.com/embed/zbf0llo3-YI?si=cJjvQ0iJ5fMdH8tR",
  "https://www.youtube.com/embed/hK6R4zUgtho?si=op8_ugoQmSe9wT2e"
]

function Resource() {
  return (
    <>
      <div>Refer to the video, github codes and much more ...</div>
      <main>
        {links.map((link, index) => (
          <YouTubeVideo key={index} link={link} />
        ))}
      </main>
    </>
  )
}

export default Resource