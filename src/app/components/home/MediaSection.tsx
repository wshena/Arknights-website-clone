import React, { useEffect, useState } from 'react'
import HomeSection from './HomeSection'
import Image from 'next/image'
import { MediaContentProps } from '@/app/utils/interface'
import { MediaContent } from '@/app/utils/const'

const OverlayButton = ({content, position, dimension, handleClick, index, boxPosition, imageClass}:{content:MediaContentProps | any, position:string, dimension:any, handleClick:any, index:number, boxPosition:any, imageClass:string} ) => {  
  
  let idx:number = 0;
  switch (content.name) {
    case 'gallery':
      idx = 1
      break;
    case 'operator':
      idx = 2
      break;
    case 'video':
      idx = 3
      break;
    case 'monster siren':
      idx = 0
      break;  
    default:
      idx = 0;
      break;
  }

  const [mouseEnter, setMouseEnter] = useState(false);
  const handleMouseEnter = () => setMouseEnter(true);
  const handleMouseLeave = () => setMouseEnter(false);

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`absolute ${position}`}>
      <button onClick={() => handleClick(idx)} className={`relative transition-opacity duration-500 ease-in-out ${mouseEnter ? 'opacity-100' : 'opacity-0'} ${idx === index ? 'opacity-100' : 'opacity-0'}`}>
        <Image src={content.image} alt='galery-active' width={dimension.w} height={dimension.h} className={`${imageClass}`} />

        <div className={`absolute ${boxPosition} w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] border border-[5px] md:border-[10px] border-white transform transition-all duration-500 ease-in-out ${idx === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} -z-10`}></div>
      </button>
    </div>
  )
}

const MediaSection = ({id}:{id:number}) => {

  // overlay content
  const gallery = MediaContent.find((item:MediaContentProps) => item.name.includes('gallery'));
  const monster = MediaContent.find((item:MediaContentProps) => item.name.includes('monster'));
  const operator = MediaContent.find((item:MediaContentProps) => item.name.includes('operator'));
  const video = MediaContent.find((item:MediaContentProps) => item.name.includes('video'));

  // handle overlay click
  const [index, setIndex] = useState(0)
  const handleIndex = (idx:number) => setIndex(idx)
  const mediaContent = [gallery, monster, operator, video]

  return (
    <main className="relative">
      <HomeSection>
        <section className="absolute top-0 left-0 w-screen h-screen z-20 py-[100px]">
          <div className="w-full relative h-[90vh] px-[20px] md:px-[50px] 2xl:px-[200px] flex items-center justify-start">

            <div className="flex flex-col pb-[10px] mt-[200px] md:mt-0">
              <h1 className='md:text-[2rem] lg:text-[4rem] uppercase'>{mediaContent[index]?.name}</h1>
              <h2 className='text-[2rem] -mt-[10px]'>塞壬唱片</h2>
              <span className='block md:w-[200px] lg:w-[300px] h-[5px] bg-highlight'></span>
            </div>

            <div className="absolute top-0 md:top-[70px] lg:top-0 2xl:top-[10dvh] xl:top-[1dvh] right-0 md:right-[10dvw]">
              <div className="relative">
                <Image src={'/media/media.png'} alt='media' width={600} height={600} className='z-10 md:w[400px] md:w-[400px] lg:w-[600px] lg:h-[600px] xl:w-[500px] xl:h-[500px] 2xl:w-[1000px] 2xl:h-[1000px]' />

                {/* overlay */}
                <OverlayButton content={gallery} position='top-0 left-[55px] md:top-0 md:left-[40px] lg:top-[10px] lg:left-[80px] xl:top-0 xl:left-[93px] 2xl:top-[20px] 2xl:left-[130px]' dimension={{w:180, h:180}} handleClick={handleIndex} index={index} boxPosition={'top-[20px] -left-[0px]'} imageClass='md:w-[150px] md:h-[160px] lg:w-[200px] lg:h-[300px] xl:w-[130px] xl:h-[250px] 2xl:w-[350px] 2xl:h-[500px] w-[90px] h-[150px]'/>

                <OverlayButton content={monster} position='md:left-[30px] left-[30px] top-[80px] md:top-[110px] lg:top-[210px] lg:left-[60px] xl:top-[160px] 2xl:top-[330px] 2xl:left-[100px]' dimension={{w:160, h:160}} handleClick={handleIndex} index={index} boxPosition={'bottom-[30px] md:bottom-0 lg:bottom-[30px] -left-[10px]'} imageClass='md:w-[100px] md:h-[100px] lg:w-[140px] xl:w-[120px] lg:h-[180px] 2xl:w-[300px] 2xl:h-[300px] w-[80px] h-[100px]'/>

                <OverlayButton content={operator} position='top-[50px] right-[10px] md:top-[70px] md:right-[10px] lg:top-[140px] lg:right-[40px] xl:top-[110px] xl:right-[30px] 2xl:top-[200px]' dimension={{w:230, h:230}}handleClick={handleIndex} index={index} boxPosition={'-top-[0px] right-0 md:-right-[30px] 2xl:top-[40px]'} imageClass='w-[130px] h-[130px] md:w-[160px] md:w-[160px] lg:w-[207px] xl:w-[190px] lg:h-[230px] 2xl:w-[400px] 2xl:h-[400px]'/>
                
                <OverlayButton content={video} position='-right-[5px] bottom-0 md:-bottom-[20px] lg:right-[0px] lg:-bottom-[20px]  xl:-bottom-[30px] 2xl:right-[20px] 2xl:-bottom-[40px]' dimension={{w:270, h:270}} handleClick={handleIndex} index={index} boxPosition={'top-[30px] left-[30px] 2xl:top-[150px]'} imageClass='w-[150px] h-[90px] md:w-[200px] md:h-[150px] lg:w-[250px] xl:w-[230px] lg:h-[230px] 2xl:w-[400px] 2xl:h-[400px]'/>

              </div>
            </div>
          </div>
        </section>
      </HomeSection>
    </main>
  )
}

export default MediaSection