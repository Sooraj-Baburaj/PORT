import { configureStore } from '@reduxjs/toolkit';

import ratingReducer from '../reducers/FilterRatingReducers';
import { servicesApi } from '../services/services';

export const store = configureStore({
  reducer: {
      FilterRatings : ratingReducer,
      [servicesApi.reducerPath] : servicesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
})