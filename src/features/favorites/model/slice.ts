import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/**
 * Тип для состояния избранного:
 * Храним массив id продуктов.
 */
interface FavoritesState {
    productIds: number[];
}

const LOCAL_STORAGE_KEY = 'favorites';

const initialState: FavoritesState = {
    productIds: loadFromLocalStorage(),
};

/**
 * Пытаемся загрузить массив id из localStorage.
 * Если нет, возвращаем пустой массив.
 */
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

/**
 * Сохраняем массив id в localStorage.
 */
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
        /**
         * Добавляет продукт в избранное.
         * Если он уже есть — убирает его из избранного (toggle).
         */
        toggleFavorite(state, action: PayloadAction<number>) {
            const productId = action.payload;
            if (state.productIds.includes(productId)) {
                // Удаляем
                state.productIds = state.productIds.filter((id) => id !== productId);
            } else {
                // Добавляем
                state.productIds.push(productId);
            }
            // Синхронизируем с localStorage
            saveToLocalStorage(state.productIds);
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
