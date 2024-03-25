import React from 'react'

function FeedBack() {
    return (
      <div className="flex justify-center items-center h-screen m-4">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLScDCoNPCiN1jvfrQJ5fXIzy9R9zzgEMjmAaf1dc1X0xbF3HAA/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameborder="0" 
          marginheight="0" 
          marginwidth="0" 
          className="max-w-3xl w-full h-full"
        >
          Loading…
        </iframe>
      </div>
    );
  }
  

export default FeedBack