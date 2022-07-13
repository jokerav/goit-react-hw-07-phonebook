import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsAPI';
// import contactsReducer from './contacts-reducer';
import  filterSlice from '../contactsAPI/filterSlice'
// import {changeFilter} from '../contactsAPI/filterSlice';


export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter :filterSlice,


  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
