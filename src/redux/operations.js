import { createAsyncThunk } from '@reduxjs/toolkit';
import { getItems } from 'services/API';

export const fetchItems = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await getItems();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
