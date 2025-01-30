'use client'
import React, { useEffect, useState } from 'react';
import HomeSection from '../components/home/HomeSection';
import { ArknightsAffiliations } from '../utils/const';
import { AffiliationsArrayProps } from '../utils/interface';
import AffiliationCardBig from '../components/cards/AffiliationCardBig';
import Image from 'next/image';
import Link from 'next/link';

const chunksArray = (arr:any, size:number) => {
  const result = [];
  while (arr.length) {
    result.push(arr.splice(0, size));
  }

  return result;
}

const GetItemsCount = (width:number) => {
  if (width >= 2560) return 6;
  if (width >= 1440) return 6;
  if (width >= 1024) return 5;
  if (width >= 768)  return 4;
  return 3;
};

const GetAffiliationsWidth = (width:number, count:number) => {
  if (width >= 2560) return width/count;
  if (width >= 1440) return width/count;
  if (width >= 1024) return width/count;
  if (width >= 768)  return width/count;
  return '100vw';
}

const OperatorsPage = () => {
  const [page, setPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  const [affiliationWidth, setAffiliationWidth] = useState<any>(0)
  const [AffiliationsArray, setAffiliationsArray] = useState<AffiliationsArrayProps | any>([])

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setAffiliationsArray(chunksArray([...ArknightsAffiliations], GetItemsCount(windowWidth)));
    setAffiliationWidth(GetAffiliationsWidth(windowWidth, GetItemsCount(windowWidth)))
  }, [windowWidth]);

  const handleNextPage = () => {
    setPage((prevPage) => (prevPage + 1) % AffiliationsArray.length);
  }

  const handlePrevPage = () => {
    setPage((prevPage) => (prevPage === 0 ? AffiliationsArray.length - 1 : prevPage - 1));
  }

  return (
    <main>
      <HomeSection>
        <section className="z-10 absolute top-0 left-0 w-screen h-screen flex items-center justify-between">

          {/* desktop affiliations list */}
            <ul className="flex items-center overflow-y-auto md:overflow-hidden w-fit">
              {AffiliationsArray.map((item:any, idx:number) => (
                <li className="min-w-[100vw] transition-transform duration-500 ease-in-out flex flex-col md:flex-row" key={idx} style={{
                  transform: `translateX(-${page * 100}%)`
                }}>
                  {item.map((a:AffiliationsArrayProps) => (
                    <button key={a.faction}>
                      <AffiliationCardBig data={a} width={affiliationWidth} />
                    </button>
                  ))}
                </li>
              ))}
            </ul>
        </section>

        {/* bottom section, next prev button */}
        <section className="z-20 absolute bottom-0 left-0 w-full h-[50px] md:h-[100px] border-t flex items-center justify-start md:justify-center pl-[20px] md:pl-0">
          <div className="flex items-center gap-[20px]">
            <button onClick={handlePrevPage} className='transition-transform transform duration-300 ease-in-out hover:-translate-x-[10px]'>
              <Image src={'/icon-arrow.png'} alt='prev-arrow' width={20} height={20} className='transform rotate-[180deg]' />
            </button>
            <button onClick={handleNextPage} className='transition-transform transform duration-300 ease-in-out hover:translate-x-[10px]'>
              <Image src={'/icon-arrow.png'} alt='prev-arrow' width={20} height={20} />
            </button>
          </div>
        </section>

        <Link href={'/operators/advance'} className='block z-20 absolute bottom-[10px] md:bottom-[30px] right-[10px] flex items-center justify-center px-[1rem] py-[.5rem] md:px-[2.5rem] md:py-[.7rem] bg-darkGray text-white hover:bg-highlight hover:text-black'>
          <div className="flex items-center gap-[10px]">
            <span className='text-[.6rem] md:text-[.9rem]'>Advance Search</span>
            <Image src={'/icon-arrow.png'} alt='advance-arrow' width={10} height={10} className='md:w-[15px] md:h-[15px]'/>
          </div>
        </Link>
      </HomeSection>
    </main>
  );
};

export default OperatorsPage;
