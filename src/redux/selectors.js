
import { createSelector } from '@reduxjs/toolkit';

export const selectFilter = state => state.filter.query;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  }
);