import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'antd';
import { Product } from '../../model/types';
import { RootState, AppDispatch } from '../../../../app/store';
import { toggleFavorite } from '../../../../features/favorites/model/slice';

type ProductCardProps = {
    product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector((state: RootState) => state.favorites.productIds);

    const isFavorite = favorites.includes(product.id);

    const handleToggle = () => {
        dispatch(toggleFavorite(product.id));
    };

    return (
        <Card
            hoverable
            cover={<img alt={product.name} src={product.image} />}
            style={{ width: '100%' }}
        >
            <Card.Meta
                title={product.name}
                description={
                    <>
                        <p>Category: {product.category}</p>
                        <p>Price: ${product.price}</p>
                        <Button
                            type={isFavorite ? 'primary' : 'default'}
                            onClick={handleToggle}
                        >
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </Button>
                    </>
                }
            />
        </Card>
    );
};
