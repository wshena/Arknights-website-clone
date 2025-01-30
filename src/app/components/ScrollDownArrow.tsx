'use client'
import React from 'react'
import { AngleDown } from '../utils/icons'
import { usePathname } from 'next/navigation';

const ScrollDownArrow = () => {
  const path = usePathname();
  return (
    <div className={`${path !== '/' ? 'hidden' : 'block'} fixed w-fit bottom-0 left-[40vw] left-[46vw] lg:left-[48vw] flex items-center justify-center`}>
      <span className='block -mt-[10px] items-center animate-[bounce_2s_ease-in-out_infinite] transition-all ease-in-out'>
        <AngleDown size={50} color='darkGray' />
      </span>
    </div>
  )
}

export default ScrollDownArrow