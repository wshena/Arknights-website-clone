import React from 'react'
import VideoBackground from './VideoBackground'
import Image from 'next/image'
import { DownloadLinks } from '@/app/utils/const'
import { DownloadLinksProps } from '@/app/utils/interface'
import Link from 'next/link'

const IndexSection = ({id}:{id:number}) => {
  return (
    <div className="relative overflow-hidden flex-shrink-0 w-screen h-screen bg-center bg-cover text-white">
      {/* background video */}
      <VideoBackground />

      {/* mask block */}
      <Image src={'/mask_block.png'} alt='mask-block' width={400} height={500} className='block absolute bottom-0 left-0 -z-10 opacity-60 w-[150px] h-[130px] md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[400px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[1000px]' />

      {/* bottom */}
      <section className="absolute bottom-0 w-screen h-fit pt-0 pl-[1rem] pb-[1rem] border-t">
        <h1 className='uppercase font-bold text-[4rem] 2xl:text-[6rem]'>Arknights</h1>
      </section>

      {/* side content */}
      <section className="absolute top-0 right-0 h-screen flex items-end bg-cover bg-center p-[1rem] 2xl:p-[3rem]" style={{
        backgroundImage: 'url("/mask_block.png")'
      }}>
        <ul className="flex flex-col gap-[20px]">
          {DownloadLinks.map((item:DownloadLinksProps) => {
            return (
              <li key={item.id} className='hover:border-white'>
                <Link href={item.link} >
                  <Image src={item.image} width={100} height={100} alt='download-link' className='2xl:w-[200px] 2xl:w-[200px]'/>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default IndexSection