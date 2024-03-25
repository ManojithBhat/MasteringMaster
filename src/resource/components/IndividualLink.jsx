   import React from 'react'
   
   function IndividualLink({link,name}) {
    console.log(link, name)
     return (
       <>
      <div className="bg-[#333645] rounded-lg p-4 flex justify-between align-middle">
        <div className="text-white font-medium">{name}</div>
        <a href={link} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Click here 
          </a>
      </div>
        </>
     )
   }
   
   export default IndividualLink