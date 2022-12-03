import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'filter',
  initialState: { keyWord: '' },
  reducers: {
    setWord: (state, { payload: keyWord }) => {
      state.keyWord = keyWord;
    },
  },
});

export const { setWord } = slice.actions;

export default slice.reducer;

export const selectKeyWord = state => state.filter.keyWord;
