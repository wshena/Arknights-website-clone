'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setOperatorSkin } from '@/app/redux/slice/UtilitySlice';

const SkinImageButton = ({url, imgIdx, idx, handleClick}:{url:string, imgIdx:number, idx:number, handleClick:any}) => {
  const dispatch = useDispatch();
  const [bgImage, setBgImage] = useState('/char/ptilopsis_e2.png');

  useEffect(() => {
      const img = new window.Image();
      img.src = url;
      img.onload = () => setBgImage(url);
      img.onerror = () => setBgImage('/char/ptilopsis_e2.png');
    }, [url]);

  return (
    <button onClick={() => {
      handleClick(idx);
      dispatch(setOperatorSkin(bgImage))
    }} className={`transform transition-color duration-500 ease-in-out relative w-[100px] md:w-[400px] h-[70px] overflow-hidden bg-darkGray bg-opacity-70`}>
      <div className="absolute -top-[100px] -left-[200px] w-[500px] h-[500px] bg-center bg-cover" style={{
        backgroundImage: `url("${bgImage}")`
      }}></div>
              
      <div className={`absolute -bottom-[10px] right-0 w-[50px] h-[50px] bg-center bg-cover ${idx === imgIdx ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`} style={{
        backgroundImage: `url("/skinSelect.png")`
      }}></div>
    </button>
  )
}

const OperatorSkins = ({imageArray}:{imageArray:any}) => {
  const [imgIndex, setImgIndex] = useState<number | any>();
  const handleClick = (idx:number) => setImgIndex(idx)
  
  return (
    <ul className="flex flex-col items-center gap-[20px]">
      {imageArray.map((item:any, idx:number) => {
        return (
          <li key={`image - ${idx}`}>
            <SkinImageButton url={item.link} idx={idx} imgIdx={imgIndex} handleClick={handleClick}/>
          </li>
        )
      })}
    </ul>  
  )
}

export default OperatorSkins