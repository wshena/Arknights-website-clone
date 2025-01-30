'use client'
import { AffiliationsArrayProps } from '@/app/utils/interface'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const AffiliationCardBig = ({data, width}:{data:AffiliationsArrayProps, width:number}) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);
  
  return (
    <Link href={`/affiliation/${data.faction}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`relative h-[150px] md:h-screen flex items-center justify-center flex-row md:flex-col bg-center bg-cover`} style={{
      backgroundImage: 'url("/papper_texture.png")',
      width: `${width}px`, // Gunakan properti style untuk width
    }}>
      <div className="absolute top-0 left-0 w-full h-full" style={{
        backgroundImage: 'linear-gradient(0deg,#000,transparent 40%),linear-gradient(0deg,#000,transparent 30%),linear-gradient(180deg,#000,rgba(0,0,0,.6) 20%,transparent 40%),linear-gradient(-90deg,rgba(0,0,0,.8),transparent 4rem)'
      }}></div>
      <Image src={data.image} alt={data.faction} width={90} height={90} className={`md:w-[100px] md:h-[100px] 2xl:w-[200px] 2xl:h-[200px] transition-all duration-300 ease-in-out ${mouseEnter ? 'transform scale-125' : 'transform scale-100'}`} />
      <h1 className='capitalize font-bold text-[1.5rem] md:text-[2rem]'>{data.faction}</h1>
    </Link>
  )
}

export default AffiliationCardBig;
