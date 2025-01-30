'use client'
import { FeaturedOperator } from '@/app/utils/const'
import { FeaturedOperatorProps, HomeSectionProps } from '@/app/utils/interface'
import React, { useEffect, useState } from 'react'
import OperatorDetail from './OperatorDetail'
import OperatorCard from './OperatorCard'
import HomeSection from './HomeSection'

const OperatorSection = ({id}:HomeSectionProps) => {
  const [operatorName, setOperatorName] = useState("amiya");
  const [operatorDetail, setOperatorDetail] = useState<FeaturedOperatorProps | undefined>(undefined)

  const handleOperatorName = (name:string) => setOperatorName(name);

  useEffect(() => {
    setOperatorDetail(FeaturedOperator.find((operator:FeaturedOperatorProps) => operator.name.toLowerCase() === operatorName))
  },[operatorName])

  return (
    <HomeSection>
      {/* operator background */}
      <div className="z-10 absolute top-0 md:top-[70px] md:left-0 h-full w-full bg-center bg-cover" style={{
        backgroundImage: `url('${operatorDetail?.background}')`,
        backgroundRepeat: 'no-repeat'
      }}/>

      {/* operators content */}
      <div className="z-30 absolute left-0 bottom-0 w-full 2xl:w-[100vw] px-[1rem] h-[60vh] text-white md:h-[80vh] md:w-[80%] md:px-[3rem] 2xl:flex 2xl:items-center 2xl:justify-center">
        {operatorDetail && (
          <OperatorDetail operator={operatorDetail} />
        )}
      </div>
      
      {/* operator card */}
      <div className="absolute pl-0 md:pl-[20px] w-fit z-30 bottom-[10px] xl:bottom-[50px] 2xl:bottom-[130px] left-[10px] md:left-[30px] 2xl:left-[250px]">
        <ul className='flex w-[300px] md:w-full items-center gap-[10px] overflow-y-hidden overflow-x-auto md:overflow-x-hidden'>
          {FeaturedOperator.map((item:FeaturedOperatorProps) => {
            return (
              <li key={item.id}>
                <button onClick={() => handleOperatorName(item.name.toLowerCase())}>
                  <OperatorCard operator={item} operatorName={operatorName} />
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </HomeSection>
  )
}

export default OperatorSection