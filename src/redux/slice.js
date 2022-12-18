import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './operations';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchItems.pending](state) {
      state.isLoading = true;
    },
    [fetchItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchItems.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const itemsReducer = itemsSlice.reducer;
