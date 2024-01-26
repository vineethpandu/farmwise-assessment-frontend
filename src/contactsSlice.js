import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    saveContacts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { saveContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
