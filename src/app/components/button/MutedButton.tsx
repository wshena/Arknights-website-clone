'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { toggleIsPlaying } from '@/app/redux/slice/UtilitySlice';
import { AudioIcon } from '@/app/utils/icons';

const MutedButton = () => {
  const isPlaying = useSelector((state: RootState) => state.utility.isPlaying);
  const dispatch = useDispatch();

  const handlePlayPauseToggle = () => {
    dispatch(toggleIsPlaying(!isPlaying));
  };

  return (
    <button onClick={handlePlayPauseToggle}>
      {isPlaying ? (
        <AudioIcon size={25} color='#19d1ff' />
      ) : (
        <AudioIcon size={25} color='white' />
      )}
    </button>
  );
};

export default MutedButton;
