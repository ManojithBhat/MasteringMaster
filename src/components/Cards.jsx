import React from 'react'
import { Link } from 'react-router-dom'

function Cards({title,content}) {
  return (
<div className="m-4 bg-gray-800 flex items-center justify-center ks ">
  <div className=" rounded-lg p-6 shadow-md border-white min-h-full text-center flex flex-col justify-between  " >
    <div className="flex flex-col items-center justify-center">   
      <Link
        to={`/${title}`}
        className="text-white bg-white-700 hover:bg-white-800 focus:ring-4 focus:ring-white-300 font-medium text-xl rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none mb-2"
      >
        {title}
      </Link>
      <p className="text-gray-400 text-md sm:text-sm lg:text-lg">
        {content}
      </p>
    </div>
  </div>
  {/*  */}
</div>

  )
}

export default Cards