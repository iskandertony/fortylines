import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// features/filters/model/slice.ts

interface FiltersState {
    searchQuery: string;
    selectedCategory: string;
    showOnlyFavorites: boolean; // <-- добавляем
}

const initialState: FiltersState = {
    searchQuery: '',
    selectedCategory: 'all',
    showOnlyFavorites: false,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.searchQuery = action.payload;
        },
        setCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
        },
        setShowOnlyFavorites(state, action: PayloadAction<boolean>) {
            state.showOnlyFavorites = action.payload;
        },
    },
});

export const { setSearchQuery, setCategory, setShowOnlyFavorites } = filtersSlice.actions;
export default filtersSlice.reducer;

