import { ArknightsAffiliations, Elites } from '@/app/utils/const';
import { ArrowRight } from '@/app/utils/icons';
import { ArtProps, FeaturedOperatorProps } from '@/app/utils/interface';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const OperatorDetail = ({ operator }: { operator: FeaturedOperatorProps }) => {
  const affiliations = ArknightsAffiliations.reduce((acc:any, item:any) => {
    if (operator.affiliation.includes(item.faction)) {
      acc.push(item);
    }
    return acc;
  }, [])

  const operatorArt = operator.art[0].name.toLowerCase()

  const [elite, setElite] = useState(operatorArt);
  const [change, setChange] = useState(false);

  useEffect(() => {
    setChange(true);
    const timer = setTimeout(() => {
      setChange(false);
    }, 400);
    
    // Cleanup timeout
    return () => clearTimeout(timer);
  }, [elite]);

  useEffect(() => {
    setElite(operatorArt)
  }, [operatorArt])

  const [art, setArt] = useState<string | null>(null); // Gunakan null sebagai default value
  
  useEffect(() => {
    const handleArt = (e: string) => {
      const eliteArt = operator.art.find((item: ArtProps) => item.name.toLowerCase() === e);
      const source = eliteArt?.link;
      setArt(source || null); // Jika source tidak ada, setArt menggunakan null
    };
  
    handleArt(elite);
  }, [elite, operator.art]);

  return (
    <div className="relative 2xl:container w-[90vw] 2xl:w-[120%] h-full 2xl:h-[80%] flex justify-between">
      <div className="flex z-30 flex-col">
        {/* to operators page */}
        <Link href={'/operators'} className='mb-[20px] w-fit flex items-center gap-[5px] hover:text-highlight transition-color duration-300 ease-in-out'>
          <h1 className='uppercase text-[1.5rem] 2xl:text-[5rem]'>Operators</h1>
          <span className="block">
            <ArrowRight size={20} color='' />
          </span>
        </Link>

        <h3 className='uppercase font-bold text-[.8rem] 2xl:text-[3rem]'>Profile</h3>
        <div className="-mt-[10px] flex items-center gap-[10px]">
          <h1 className='text-[2rem] 2xl:text-[5rem]'>{operator.name}</h1>
          <ul className='flex items-center gap-[10px]'>
            {affiliations.map((item:any) => {
              return (
                <li key={item.faction}>
                  <Image src={item?.image} alt={item?.faction} width={60} height={60} className='md:w-[40px] md:h-[40px] 2xl:w-[150px] 2xl:h-[150px] lg:w-[60px] lg:h-[60px] w-[40px] h-[40px]'/>
                </li>
              )
            })}
          </ul>
        </div>
        <p className='w-[300px] lg:w-[500px] 2xl:w-[600px] bg-opacity-50 md:bg-opacity-100 bg-black text-[.6rem] lg:text-[.8rem] 2xl:text-[1.8rem] p-[.7rem]'>
          {operator.biography}
        </p>
      </div>

      {/* art */}
      {art && (
        <div className={`z-20 hidden md:block absolute md:-right-[250px] lg:-right-[150px] xl:-right-[60px] 2xl:-right-[500px] -top-[100px] 2xl:-top-[300px] transition-opacity duration-400 ease-in-out ${change && 'opacity-0'} ${(art === '/char/kaltsit_e2.png' || art === '/char/chen_e2.png') && 'md:-top-[290px] lg:-top-[300px] transition-none'} ${(art === '/char/amiya_e1.png' || art === '/char/amiya_e2.png') && '-top-[140px]'}`}>
          <Image src={art} width={800} height={800} alt={operator.name} className='w-[1000px] md:w-[800px] md:h-[800px] 2xl:w-[1500px] 2xl:h-[1500px]' />
        </div>
      )}

      {/* mobile art */}
      {art && (
        <div className={`absolute block md:hidden w-[600px] h-full -top-[200px] -left-[160px] z-10 ${(art === '/char/kaltsit_e2.png' || art === '/char/chen_e2.png') && '-top-[350px]'} ${change && 'opacity-0'} transition-opacity duration-400 ease-in-out`}>
          <Image src={art || ''} width={800} height={800} alt={operator.name} className='' />
        </div>
      )}
      
      {/* elites */}
      <div className="h-fit absolute z-30 top-0 right-0 md:h-full md:flex items-start md:items-end xl:pb-[40px]">
        <ul className="z-20 flex flex-col md:gap-[15px]">
          {operator.art.map((art: ArtProps) => {
            const currentElite = Elites.find((item: any) => item.name === art.name.toLowerCase());
            const source = currentElite?.image;

            return (
              <li key={art.name}>
                <button
                  className={`border-b-[2px] ${elite === art?.name?.toLowerCase() && 'border-highlight'}  transition-all duration-400 ease-in-out`}
                  onClick={() => {
                    setElite(art.name.toLowerCase());
                  }}>
                  {source && (
                    <Image src={source} alt={art.name} width={30} height={30} className='2xl:w-[60px] 2xl:h-[60px] ' />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default OperatorDetail