// features/filters/ui/FiltersPanel.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../../app/store';
import { setSearchQuery, setCategory, setShowOnlyFavorites } from '../model/slice';
import { Input, Select, Switch } from 'antd';

const { Search } = Input;
const { Option } = Select;

export const FiltersPanel: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { searchQuery, selectedCategory, showOnlyFavorites } = useSelector(
        (state: RootState) => state.filters,
    );

    const categories = useSelector((state: RootState) => {
        const allProducts = state.products.items;
        const uniqueCategories = Array.from(new Set(allProducts.map((p) => p.category)));
        return ['all', ...uniqueCategories];
    });

    const onSearchChange = (value: string) => {
        dispatch(setSearchQuery(value));
    };

    const onCategoryChange = (value: string) => {
        dispatch(setCategory(value));
    };

    const onToggleFavorites = (checked: boolean) => {
        dispatch(setShowOnlyFavorites(checked));
    };

    return (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Search
                placeholder="Search by name"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                style={{ maxWidth: 200 }}
                allowClear
            />

            <Select value={selectedCategory} onChange={onCategoryChange} style={{ width: 150 }}>
                {categories.map((cat) => (
                    <Option key={cat} value={cat}>
                        {cat}
                    </Option>
                ))}
            </Select>

            {/* Переключатель для фильтра "только избранные" */}
            <div>
                <Switch checked={showOnlyFavorites} onChange={onToggleFavorites} />
                <span style={{ marginLeft: 8 }}>Only favorites</span>
            </div>
        </div>
    );
};
