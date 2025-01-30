'use client';
import { Elites } from '@/app/utils/const';
import { ElitesProps } from '@/app/utils/interface';
import React, { useState } from 'react'
import EliteBlock from './EliteBlock';
import SkinsButton from './SkinButton';

const EliteSkins = ({artArray, eliteImageArray, handleImage}:{artArray:any, eliteImageArray:any, handleImage:any}) => {

  // handle elite skin button
  const [eliteIsClick, setEliteIsClick] = useState<string>('base');

  const eliteSkins = Array.isArray(artArray)
  ? Elites.filter((artItem: any) =>
      artArray.some((elite: any) => elite.name?.toLowerCase() === artItem.name?.toLowerCase())
    )
  : [];
  
  return (
    <>
    {eliteSkins.length >= 0 && (
      <ul className="flex items-center gap-[10px] md:gap-[25px] 2xl:gap-[50px]">
        {eliteSkins.map((item:ElitesProps, idx:number) => {
          return (
            <li key={`${item.name}-elite`}>
              <EliteBlock eliteSkins={item} setClick={setEliteIsClick} elite={eliteIsClick} handleImage={handleImage} index={idx} />
            </li>
          )
        })}
        <li key={'skin-button'} className='hidden md:block'>
          <SkinsButton />
        </li>
      </ul>
    )}
    <div className="mt-[10px] block md:hidden">
      <SkinsButton />
    </div>
    </>
  )
}

export default EliteSkins