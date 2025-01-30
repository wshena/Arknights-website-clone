'use client'
import React from 'react'

const WorldContentButton = ({
  name,
  isHovered,
  handleMouseEnter,
  handleMouseLeave,
  handleClick
}: {
  name: string;
  isHovered: boolean;
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  handleClick: any;
}) => {
  return (
    <button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative text-start capitalize text-[1rem] md:text-[1.5rem] 2xl:text-[3.5rem] hover:text-white text-gray-300 w-[250px] md:w-[300px] 2xl:w-[500px] pb-[10px] border-b border-b-white"
    >
      <span
        className={`block transform ${isHovered ? 'translate-x-[30px]' : 'translate-x-0'} transition-transform duration-500 ease-in-out`}
      >
        {name}
      </span>

      {isHovered && (
        <div className="absolute bottom-0 right-0">
          <h1 className='uppercase text-highlight text-[1.5rem] md:text-[2.5rem] 2xl:text-[3rem] font-bold opacity-50'>{name}</h1>
        </div>
      )}
    </button>
  );
};

export default WorldContentButton;