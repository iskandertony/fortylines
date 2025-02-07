import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../entities/product/model/slice';
import filtersReducer from '../features/filters/model/slice';
import favoritesReducer from '../features/favorites/model/slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filters: filtersReducer,
        favorites: favoritesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
