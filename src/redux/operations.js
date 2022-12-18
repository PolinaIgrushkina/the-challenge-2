import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://5af1eee530f9490014ead8c4.mockapi.io';

export const fetchItems = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/items');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
