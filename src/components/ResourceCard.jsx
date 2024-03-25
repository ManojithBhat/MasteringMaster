import React from 'react'

function ResourceCard({title, content, link}) {
  return (
    <div className="bg-gray-900 text-white my-4 ">
            <h2 className="text-xl font-semibold text-center my-8">{title}</h2>
            <iframe src={link}width="100%" height="300" allow="autoplay"></iframe>
            <p className="text-center mt-4">{content}</p>
    </div>
  )
}

export default ResourceCard