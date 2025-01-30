'use client'
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

interface Props {
  children: React.ReactNode;
}

const AudioProvider = ({ children }: Props) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isPlaying = useSelector((state: RootState) => state.utility.isPlaying);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      if (isPlaying) {
        audio.play().catch((error) =>
          console.log('Audio play intercepted: ', error)
        );
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} src="/bgm/bgm.mp3" loop preload="auto" />
      {children}
    </div>
  );
};

export default AudioProvider;