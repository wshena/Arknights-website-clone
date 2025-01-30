import { OperatorClasses } from '@/app/utils/const';
import { findOperatorClassMatch } from '@/app/utils/functions';
import Image from 'next/image';
import React from 'react'

const Stars = ({length}:{length:number}) => {
  const imgSrc = () => {
    switch (length) {
      case 6:
        return '/stars/star_6.png';
      case 5:
        return '/stars/star_5.png';
      case 4:
        return '/stars/star_4.png';
      case 3:
        return '/stars/star_3.png';
      case 2:
        return '/stars/star_2.png';
      default:
        return '/stars/star_1.png';
    }
  }

  return (
    <>
    {imgSrc && (
      <Image src={imgSrc()} alt='rarity' width={100} height={100} className='2xl:w-[400px] 2xl:w-[400px]'/>
    )}
    </>
  )
}

const OperatorNameClass = ({operatorName, classArray, tagArray, position, rarity}:{operatorName:any, classArray:any, tagArray:any, position:string, rarity:number}) => {
  // operator main class
  const mainClass = findOperatorClassMatch(OperatorClasses, classArray);
  
  return (
    <div className='p-[1rem] flex flex-col gap-0 lg:gap-[20px]'>
      <div className="w-full flex flex-col gap-[15px] md:gap-0">
        <Stars length={rarity} />
        <h1 className='-mt-[20px] capitalize text-[1.4rem] md:text-[3.5rem] 2xl:text-[6rem] font-bold' style={{
          textShadow: 'rgba(0, 0, 0, 0.3) -2px -2px 0px, rgba(0, 0, 0, 0.3) 2px -2px 0px'
        }}>{operatorName}</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-[10px]">
        <div className="w-fit bg-darkGray bg-opacity-70">
          <Image src={mainClass?.image} alt={mainClass?.name} width={70} height={70} className='2xl:w-[200px] 2xl:h-[200px]' />
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="flex items-center gap-[10px]">
            <div className="p-[.6rem] 2xl:p-[2rem] flex items-center justify-center bg-darkGray bg-opacity-70 h-[30px] w-fit gap-[10px]">
              {mainClass?.image && (
                <Image src={mainClass?.image} alt={mainClass?.name} width={25} height={25} className='2xl:w-[50px] 2xl:h-[50px]' />
              )}
              <span className='text-[1rem] 2xl:text-[3rem] capitalize'>{mainClass?.name}</span>
            </div>

            <div className="p-[.6rem] 2xl:p-[2rem] flex items-center justify-center bg-darkGray bg-opacity-70 h-[30px] w-fit">
              <span className='text-[1rem] 2xl:text-[3rem] capitalize'>{position.toLowerCase()} position</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center h-[30px] 2xl:h-[60px] p-[.6rem] 2xl:p-[2rem] bg-darkGray bg-opacity-70">
            <ul className="flex items-center gap-[10px]">
              {tagArray.map((item:string, idx:number) => {
                return (
                  <li key={`${item} - ${idx}`}>
                    <h2 className='text-[1rem] 2xl:text-[3rem]'>{item}</h2>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperatorNameClass