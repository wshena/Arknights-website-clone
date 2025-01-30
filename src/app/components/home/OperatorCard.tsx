import { FeaturedOperatorProps } from '@/app/utils/interface'
import React from 'react'

const OperatorCard = ({operator, operatorName}:{operatorName:string, operator:FeaturedOperatorProps | undefined}) => {
  const baseImage = operator?.cardImage || ''  

  return (
    <div className={`hover:border-highlight transition-all duration-300 ease-in-out border z-10 border-[5px] md:border-[10px] border-white h-[70px] w-[100px] md:h-[130px] md:w-[70px] xl:h-[170px] 2xl:h-[250px] xl:w-[100px] 2xl:w-[150px] relative ${operatorName === operator?.name.toLowerCase() && 'border-highlight'}`} style={{
      backgroundImage: 'linear-gradient(0deg,transparent,rgba(0,0,0,.6),rgba(0,0,0,.8))'
    }}>
      <div className="absolute z-20 w-[125%] h-[100%] md:h-[115%] top-0 bottom-[60px] -left-[10px] bg-[center_-50px] md:bg-center bg-cover" style={{
        backgroundImage: `url("${baseImage}")`,
      }}>
      </div>
    </div>
  )
}

export default OperatorCard