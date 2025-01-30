import { ArknightsAffiliations } from '@/app/utils/const';
import { AffiliationsArrayProps } from '@/app/utils/interface';
import Image from 'next/image';
import React from 'react'

const AffiliationImage = ({nation, group, team}:{nation:string, group:string, team:string}) => {
  const affiliation = () => {
    if (group === null && team === null) {
      return nation
    } else if (nation === null && team === null) {
      return group
    } else {
      return team;
    }
  };

  const affiliationImage = ArknightsAffiliations.find((item:AffiliationsArrayProps) => item.faction.toLowerCase() === affiliation());

  return (
    <>
    {affiliationImage && (
      <Image src={affiliationImage?.image} alt={affiliationImage?.faction} width={300} height={300} className='2xl:w-[500px] 2xl:w-[500px]' />
    )}
    </>
  )
}

export default AffiliationImage