'use client'
import React from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const ProgressBarProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <ProgressBar
        height="4px"
        color="#19d1ff"
        options={{ showSpinner: false }}
        shallowRouting
      />
      
      {children}
    </>
  )
}

export default ProgressBarProvider