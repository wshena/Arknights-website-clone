import React from 'react'

const OperatorDescription = ({description}:{description:string}) => {
  return (
    <div className='p-[1rem] w-[300px] 2xl:w-[500px] flex flex-col'>
      <div className='p-[.5rem] 2xl:p-[1rem] flex items-center justify-between border-b border-b-darkGray bg-darkGray bg-opacity-70'>
        <span className='text-[1rem] 2xl:text-[3rem] capitalize'>description</span>
      </div>
      <p className='p-[.8rem] 2xl:p-[1rem] 2xl:text-[2rem] bg-darkGray bg-opacity-70'>{description}</p>
    </div>
  )
}

export default OperatorDescription