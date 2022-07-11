import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacrsAPI';
// import contactsReducer from './contacts-reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
