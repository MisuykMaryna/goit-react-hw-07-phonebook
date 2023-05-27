import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
   contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
  reducers: {
       formSubmitHandler: {
      reducer(state, {payload}) {
        state.contacts.push(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    onDelete (state, {payload}) {
     state.contacts = state.contacts.filter(
        contact => contact.id !== payload
      );
    },
  },
});


const persistConfig = {
  key: 'contacts',
  storage,
};

export const { formSubmitHandler, onDelete } = contactsSlice.actions;

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const getContacts = state => state.contacts.contacts;