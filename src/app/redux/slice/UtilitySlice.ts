import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UtilityState {
  isPlaying: boolean; // Menggunakan properti ini untuk play/pause.
  skinsButtonClick: boolean;
  operatorSkin: string;
}

const initialState: UtilityState = {
  isPlaying: false,
  skinsButtonClick: false,
  operatorSkin: '',
};

const utilitySlice = createSlice({
  name: 'utility',
  initialState,
  reducers: {
    toggleIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    toggleSkinsButton: (state, action: PayloadAction<boolean>) => {
      state.skinsButtonClick = action.payload;
    },
    setOperatorSkin: (state, action: PayloadAction<string>) => {
      state.operatorSkin = action.payload
    }
  },
});

export const { toggleIsPlaying, toggleSkinsButton, setOperatorSkin } = utilitySlice.actions;
export default utilitySlice.reducer;
