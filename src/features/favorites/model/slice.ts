import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
    productIds: number[];
}

const LOCAL_STORAGE_KEY = 'favorites';

const initialState: FavoritesState = {
    productIds: loadFromLocalStorage(),
};

function loadFromLocalStorage(): number[] {
    try {
        const data = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Failed to parse favorites from localStorage', error);
    }
    return [];
}

function saveToLocalStorage(productIds: number[]) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(productIds));
    } catch (error) {
        console.error('Failed to save favorites to localStorage', error);
    }
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite(state, action: PayloadAction<number>) {
            const productId = action.payload;
            if (state.productIds.includes(productId)) {
                state.productIds = state.productIds.filter((id) => id !== productId);
            } else {
                state.productIds.push(productId);
            }
            saveToLocalStorage(state.productIds);
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
