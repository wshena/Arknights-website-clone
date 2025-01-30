'use client'
import { useEffect, useState, useRef } from 'react';
import HomeSection from './HomeSection';
import { WorldContent } from '@/app/utils/const';
import { WorldContentProps } from '@/app/utils/interface';
import WorldContentButton from './button/WorldContentButton';
import WorldSectionCarousel from './WorldSectionCarousel';
import { AngleLeft } from '@/app/utils/icons';
import Image from 'next/image';
import RhodesIsland3D from '../RhodesIsland3D';
import ImageBehindUl from './ImageBehindUl';

const WorldSection = ({ id }: { id: number }) => {
  const [hoveredItem, setHoveredItem] = useState<WorldContentProps | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ulRef = useRef<HTMLUListElement>(null);

  // asign item to state when li is click
  const [clickedItem, setClickedItem] = useState<WorldContentProps | null>(null)
  const handleClick = (item:WorldContentProps) => setClickedItem(item);

  // when li is click, display carousel
  const [liClick, setLiClick] = useState(false);
  const handleLiOnClick = () => setLiClick(true);
  const handleLiOffClick = () => setLiClick(false);

  // get cursor position within 'ul' elemen
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ulRef.current && ulRef.current.contains(event.target as Node)) {
        setPosition({ x: event.clientX, y: event.clientY });
      }
    };

    ulRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => ulRef.current?.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredItem]);

  // determine the item for image behind ul
  const handleMouseEnter = (item: WorldContentProps) => {
    setHoveredItem(item);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <HomeSection>
      <section className="absolute top-0 left-0 w-full h-full z-30 md:px-[4rem] pt-[6rem] 2xl:flex 2xl:items-center 2xl:justify-center">
        <div className={`relative w-full px-[20px] md:flex md:items-center 2xl:container 2xl:justify-between`}>
          <ul 
            ref={ulRef} 
            className={`flex z-40 flex-col gap-[20px] w-fit mt-[30px] transition-all transform duration-500 ease-in-out ${liClick ? '-translate-x-[400px] 2xl:-translate-x-[1000px] opacity-0' : 'translate-x-0 opacity-100'}`}
          >
            {WorldContent.map((item: WorldContentProps) => (
              <li 
                key={item.id} 
                onMouseEnter={() => handleMouseEnter(item)} 
                onMouseLeave={handleMouseLeave}
                onClick={handleLiOnClick}
              >
                <WorldContentButton
                  name={item.name}
                  isHovered={hoveredItem?.id === item.id}
                  handleMouseEnter={() => {handleMouseEnter(item)}}
                  handleMouseLeave={handleMouseLeave}
                  handleClick={() => handleClick(item)}
                />
              </li>
            ))}
          </ul>
          
          {/* arknights logo 3d */}
          <div className={`hidden md:block mt-[50px] md:ml-[50px] lg:ml-[100px] xl:ml-[300px] 2xl:ml-0 transition-transform duration-300 ease-out ${liClick ? 'md:-translate-x-[800px] lg:-translate-x-[400px] xl:-translate-x-[600px] 2xl:-translate-x-[900px]' : 'translate-x-0'}`}>
            <RhodesIsland3D />
          </div>

          {/* image behind the ul */}
          {hoveredItem && (
            <ImageBehindUl hoveredItem={hoveredItem} position={position} click={liClick}/>
          )}

          <div className={`absolute z-30 bottom-0 transition-all transform duration-500 ease-in-out ${liClick ? 'right-0 opacity-100' : '-right-[300px] opacity-0'}`}>
            <button onClick={handleLiOffClick} className='bg-darkGray text-white py-[.3rem] px-[2.5rem] flex items-center justify-center'>
              <div className="flex items-center gap-[10px]">
                <span className="block">
                  <AngleLeft size={20} color='white' />
                </span>
                <span className='uppercase text-[.9rem] tracking-tight'>go back</span>
              </div>
            </button>
          </div>

          {/* carousel */}
          {clickedItem && (
            <WorldSectionCarousel isClick={liClick} id={clickedItem?.id} />
          )}
        </div>
      </section>
    </HomeSection>
  );
};

export default WorldSection;
