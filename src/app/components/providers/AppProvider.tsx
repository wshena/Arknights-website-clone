'use client'
import React from 'react'
import ReduxProvider from '../../redux/Provider';
import AudioProvider from './AudioProvider';

interface Props {
  children: React.ReactNode
}

const AppProvider = ({children}:Props) => {
  return (
    <ReduxProvider>
      <AudioProvider>
        {children}
      </AudioProvider>
    </ReduxProvider>
  )
}

export default AppProvider