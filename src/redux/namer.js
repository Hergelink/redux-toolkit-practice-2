import { createSlice } from '@reduxjs/toolkit';

export const nameSlice = createSlice({
  name: 'namer',
  initialState: {
    userName: null,
  },
  reducer: {
    handleNameChange: (state, action) => {
      state.userName = action.payload.value;
      
    },
  },
});

export const { handleNameChange } = nameSlice.actions;

export default nameSlice.reducer;
