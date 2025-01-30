'use client'
import { toggleSkinsButton } from '@/app/redux/slice/UtilitySlice'
import { RootState } from '@/app/redux/store'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const SkinsButton = () => {
  const dispatch = useDispatch()
  const isClick = useSelector((state:RootState) => state.utility.skinsButtonClick);
  const handleClick = () => dispatch(toggleSkinsButton(!isClick));

  return (
    <button onClick={handleClick} className="relative z-20 bg-center bg-cover bg-darkGray bg-opacity-70 relative md:w-[110%] 2xl:w-[120%] pl-[20px] md:pl-[45px] 2xl:pl-[100px] pt-[0px] flex items-start border hover:border-highlight hover:text-highlight">
      <span className='uppercase font-bold text-[1rem] md:text-[1.3rem] 2xl:text-[3rem]'>fashions</span>
        
      <Image src={'/icons/skin.png'} alt={'slins'} width={30} height={30} className='z-10 absolute bottom-0 md:-bottom-[5px] -left-[10px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:w-[60px] 2xl:w-[100px] 2xl:h-[100px]' />
    </button>
  )
}

export default SkinsButton