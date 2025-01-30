'use client'
import OperatorCard from '@/app/components/cards/OperatorCard'
import HomeSection from '@/app/components/home/HomeSection'
import { ArknightsAffiliations } from '@/app/utils/const'
import { AffiliationsArrayProps } from '@/app/utils/interface'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const AffiliationNamePage = ({OperatorArray, affiliationName, }:{OperatorArray:any, affiliationName:string}) => {

  // for affiliation image
  const AffiliationImage = ArknightsAffiliations.find((item:AffiliationsArrayProps) => item.faction.toLowerCase() === affiliationName);
  const background = AffiliationImage?.image;

  // handle bg affiliation movement
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (event:MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    if (sectionRef.current) {
      sectionRef.current.addEventListener('mousemove', handleMouseMove);
    }

    // Cleanup event listener on unmount
    return () => {
      if (sectionRef.current) {
        sectionRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <main className='relative overflow-hidden ' ref={sectionRef}>
      <HomeSection>
        {/* main content */}
        <section className="z-20 absolute top-0 left-0 w-full h-full py-[100px] overflow-x-hidden overflow-y-auto">
          <div className="w-fit px-[2rem] py-[3rem]">
            <Link href={'/operators'} className='block w-fit capitalize text-[1rem] hover:text-highlight'>
              <div className="flex items-center gap-[10px]">
                <Image src={'/icon-arrow.png'} alt='advance-arrow' width={10} height={10} className='md:w-[15px] md:h-[15px] transform rotate-[180deg]'/>
                <span className='text-[.6rem] md:text-[.9rem]'>go back</span>
              </div>
            </Link>
            <h1 className='uppercase text-[2rem] md:text-[3rem] lg:text-[5rem] text-darkGray'>{affiliationName}</h1>
          </div>

          {/* content container */}
          <div className="container flex items-center justify-center">
            <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-[30px] gap-x-[15px] md:gap-[20px]'>
              {OperatorArray.map((item:any) => {
                return (
                  <li key={item?.value?.id}>
                    <OperatorCard operatorId={item?.value?.id} operatorName={item.value?.data?.name} />
                  </li>
                )
              })}
            </ul>
          </div>

        </section>
      </HomeSection>
      
      {background && (
        <>
          {/* Affiliation Logo desktop */}
          <section className="z-10 hidden md:block absolute left-0 top-[100px] w-fit h-fit transition-all transform duration-500 ease-out" style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            willChange: 'transform',
          }}>
            <Image src={background} width={500} height={500} alt={affiliationName} />
          </section>

          {/* Affiliation logo mobile */}
          <section className="block md:hidden z-10 absolute left-[100px] top-[300px] md:left-0 md:top-[100px] w-fit h-fit transition-all transform duration-500 ease-out" style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            willChange: 'transform',
          }}>
            <Image src={background} width={500} height={500} alt={affiliationName} className='md:w-[500px] md:h-[500px]'/>
          </section>
        </>
      )}
    </main>
  )
}

export default AffiliationNamePage