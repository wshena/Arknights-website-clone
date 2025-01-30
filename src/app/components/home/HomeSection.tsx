import React, { ReactNode } from 'react'

const HomeSection = ({children}:{children:React.ReactNode}) => {
  return (
    <div className="relative overflow-hidden flex-shrink-0 w-screen h-screen flex justify-center items-center bg-center bg-cover text-white" style={{
      backgroundImage: 'url("/bg_shades.jpg")'
    }}>

      {/* rhodes background */}
      <div className="z-10 absolute left-0 bottom-[10px] w-full h-full bg-center bg-cover" style={{
        backgroundImage: 'url("/bg_rhodes.png")'
      }}/>

      {children}

    </div>
  )
}

export default HomeSection