import { RootState } from '../../../app/store';
import { Product } from '../../../entities/product/model/types';

export const selectFilteredProducts = (state: RootState): Product[] => {
    const products = state.products.items;
    const { searchQuery, selectedCategory, showOnlyFavorites } = state.filters;
    const favoriteIds = state.favorites.productIds;

    let filtered = products.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    if (selectedCategory !== 'all') {
        filtered = filtered.filter(
            (p) => p.category.toLowerCase() === selectedCategory.toLowerCase(),
        );
    }

    if (showOnlyFavorites) {
        filtered = filtered.filter((p) => favoriteIds.includes(p.id));
    }

    return filtered;
};
