import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.query = action.payload;
    }
      }
  },
);

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;