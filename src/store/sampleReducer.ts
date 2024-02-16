import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    sub: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;