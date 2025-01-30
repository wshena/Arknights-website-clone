'use client'
import { WorldContent } from '@/app/utils/const'
import { AngleLeft, AngleRight } from '@/app/utils/icons'
import { WorldContentProps } from '@/app/utils/interface'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const WorldSectionCarousel = ({isClick, id}:{isClick:boolean, id:number}) => {
  const [itemId, setItemId] = useState<number>(id);

  useEffect(() => {
    setItemId(id); // Perbarui itemId saat id berubah
  }, [id]);

  const data = WorldContent.find((c:WorldContentProps) => c.id === itemId);

  const handleNext = () => {
    if (itemId === 6) {
      setItemId(1)
    } else {
      setItemId(itemId + 1)
    }

  }

  const handlePrev = () => {
    if (itemId === 1) {
      setItemId(5)
    } else {
      setItemId(itemId - 1)
    }
  }

  return (
    <section className={`absolute top-0 transition-all duration-500 transform ${isClick ? 'right-[0px] opacity-100' : '-right-[1000px] opacity-0'} w-full px-[20px] md:px-0 md:w-[600px] xl:w-[800px] h-full flex flex-col md:flex-row items-center justify-between gap-[100px]`}>
      <button className='hidden md:block' onClick={handlePrev}><AngleLeft size={50} color='white'/></button>
      <div className="relative">
        <div className="z-30 flex flex-col gap-[15px]">
          <h1 className='uppercase font-bold text-[2rem] 2xl:text-[3rem] pb-[10px] border-b border-dashed border-b-darkGray'>{data?.name}</h1>
          <p className='text-[.9rem] 2xl:text-[1.3rem]'>{data?.description}</p>
        </div>
      </div>
      <button className='hidden md:block' onClick={handleNext}><AngleRight size={50} color='white' /></button>

      {/* image */}
      {data && (
        <div className="-z-10 absolute left-0 top-[50px] md:-top-[70px] 2xl:top-[100px] floating">
          <Image src={data?.image} alt={data?.name} width={500} height={500} className='md:w-[500px]md:h-[500px] 2xl:w-[700px] 2xl:h-[700px]' />
        </div>
      )}
    </section>
  )
}

export default WorldSectionCarousel