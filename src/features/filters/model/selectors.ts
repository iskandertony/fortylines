import { RootState } from '../../../app/store';
import { Product } from '../../../entities/product/model/types';

export const selectFilteredProducts = (state: RootState): Product[] => {
    const products = state.products.items;
    const { searchQuery, selectedCategory, showOnlyFavorites } = state.filters;
    const favoriteIds = state.favorites.productIds;

    // Поиск
    let filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    // Фильтр по категории
    if (selectedCategory !== 'all') {
        filtered = filtered.filter(
            (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );
    }

    // Фильтр по "только избранные"
    if (showOnlyFavorites) {
        filtered = filtered.filter((p) => favoriteIds.includes(p.id));
    }

    return filtered;
};
