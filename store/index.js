import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import { productsApi } from './services/productService';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './slices/authSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authSlice,

		[productsApi.reducerPath]: productsApi.reducer,
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
