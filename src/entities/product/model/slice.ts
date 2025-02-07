import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product } from './types';
import productsData from '../../../shared/api/products.json';

interface ProductsState {
    items: Product[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProductsState = {
    items: [],
    status: 'idle',
    error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        return new Promise<Product[]>((resolve) => {
            setTimeout(() => {
                resolve(productsData as Product[]);
            }, 500);
        });
    }
);

/*
   Вариант B: Если подключаемся к json-server:
   export const fetchProducts = createAsyncThunk<Product[]> (
     'products/fetchProducts',
     async () => {
       const response = await fetch(PRODUCTS_URL);
       if (!response.ok) {
         throw new Error('Failed to fetch products');
       }
       const data = await response.json();
       return data as Product[];
     }
   );
*/

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message ?? 'Failed to load products';
            });
    },
});

export default productsSlice.reducer;
