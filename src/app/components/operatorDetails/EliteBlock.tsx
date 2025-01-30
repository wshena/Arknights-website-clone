import { ElitesProps } from '@/app/utils/interface';
import Image from 'next/image';
import React from 'react'

const EliteBlock = ({ eliteSkins, setClick = () => {}, elite, handleImage, index }: { setClick: any, eliteSkins: ElitesProps, elite: string, handleImage:any, index:number }) => {
  const name = eliteSkins?.name || 'unknown';
  const imageSrc = elite === eliteSkins?.name?.toLowerCase()
  ? eliteSkins?.imageBlue
  : eliteSkins?.image;

  return (
    <button onClick={() => {
      setClick(name.toLowerCase());
      handleImage(name.toLowerCase());
    }} className={`relative z-20 bg-center bg-cover bg-darkGray bg-opacity-70 relative md:w-[110%] 2xl:w-[120%] pl-[20px] md:pl-[45px] 2xl:pl-[100px] pr-[5px] pt-[0px] flex items-start border hover:border-highlight hover:text-highlight transition-all duration-500 ease-in-out ${elite === eliteSkins?.name ? 'text-highlight' : 'text-white'}`}>
      <span className='uppercase font-bold text-[1rem] md:text-[1.3rem] 2xl:text-[3rem]'>{name}</span>
      
      <Image src={imageSrc} alt={name} width={30} height={30} className='z-10 absolute bottom-0 md:-bottom-[5px] -left-[10px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:w-[60px] 2xl:w-[100px] 2xl:h-[100px]' />
    </button>
  )
}

export default EliteBlock