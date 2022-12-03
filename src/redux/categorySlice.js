import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'category',
  initialState: { category: 'Sell' },
  reducers: {
    setCategory: (state, { payload: category }) => {
      state.category = category;
    },
  },
});

export const { setCategory } = slice.actions;

export default slice.reducer;

export const selectCategory = state => state.category.category;
