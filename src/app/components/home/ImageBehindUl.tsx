import { WorldContentProps } from '@/app/utils/interface'
import React, { useEffect, useState } from 'react'

const getDefaultOffset = () => {
  if (typeof window !== 'undefined') {
    const width = window.innerWidth;
    if (width >= 1536) return 1000; // 2xl breakpoint
    if (width >= 1280) return 400;  // xl breakpoint
    if (width >= 1024) return 350;  // lg breakpoint
    return 300;                     // Default (sm/md)
  }
  return 0; // Default for server-side rendering
};

const ImageBehindUl = ({hoveredItem, position, click}:{hoveredItem:WorldContentProps, position:any, click:boolean}) => {
  const [offset, setOffset] = useState(getDefaultOffset()); // Default offset

  useEffect(() => {
    // update offset depends on screen width
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        // 2xl breakpoint
        setOffset(1000);
      } else if (window.innerWidth >= 1280) {
        // xl breakpoint
        setOffset(400);
      } else if (window.innerWidth >= 1024) {
        // lg breakpoint
        setOffset(350);
      } else {
        // Default (sm/md)
        setOffset(300);
      }
    };

    handleResize(); // Set offset when first render
    window.addEventListener('resize', handleResize); // add listener for screen changes

    return () => {
      window.removeEventListener('resize', handleResize); // remove listener when component unmount
    };
  }, []);

  return (
    <div
      className={`hidden md:block absolute w-[500px] h-[500px] 2xl:w-[900px] 2xl:h-[900px] -z-10 bg-center bg-cover transition-all transform duration-500 ease-out ${click && '-translate-x-[500px]'}`}
      style={{
      backgroundImage: `url("${hoveredItem.image}")`,
      left: `${position.x - offset}px`,
      top: `${position.y - offset}px`,
      opacity: hoveredItem ? 1 : 0,
      willChange: 'transform',
    }}
    />
  )
}

export default ImageBehindUl