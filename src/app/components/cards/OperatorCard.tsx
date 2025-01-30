'use client'
import { GetOperatorImage } from '@/app/utils/fetcher'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const OperatorCard = ({operatorId, operatorName}:{operatorId: string, operatorName:string}) => {
  const apiUrl = process.env.NEXT_PUBLIC_IMG_API; // Pastikan ini valid
  const [mouseEnter, setMouseEnter] = useState(false);
  const [bgImage, setBgImage] = useState(`${apiUrl}/${operatorId}_1.png`);

  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = `${apiUrl}/${operatorId}_1.png`;
    img.onload = () => setBgImage(`${apiUrl}/${operatorId}_1.png`);
    img.onerror = () => setBgImage('/char/amiya_base.png');
  }, [operatorId]);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative overflow-hidden">

      <Link href={`/operator/${operatorName}/${operatorId}`} className={`relative block w-[200px] h-[300px] flex flex-col justify-end text-center pb-[10px] overflow-hidden hover:underline bg-black bg-opacity-60`} style={{
        backgroundImage: 'repeating-linear-gradient(90deg, hsla(0, 0%, 100%, .1), hsla(0, 0%, 100%, .1) 1px, transparent 0, transparent 5px)'
      }}>

        {/* operator name */}
        <h1 className='z-20 uppercase text-[1rem] md:text-[1.3rem]'>{operatorName}</h1>

        {/* operator image */}
        <div className="z-10 absolute top-0 left-0 w-[130%] h-[130%] bg-cover bg-[center_top]" style={{
          backgroundImage: `url("${bgImage}")`
        }}></div>
        
      </Link>

      {/* background gradient */}
      <div className={`absolute z-10 top-0 left-0 w-[300px] h-full ${mouseEnter ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`} 
      style={{
        backgroundImage: 'linear-gradient(0deg,rgb(32, 150, 230),rgba(0,0,0,0) 50%)'
      }}></div>
    </div>
  );
}

export default OperatorCard;
