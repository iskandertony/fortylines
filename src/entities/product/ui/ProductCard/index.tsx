import React from 'react';
import { Card, Button } from 'antd';
import { Product } from '../../model/types';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { toggleFavorite } from '../../../../features/favorites/model/slice';

import styles from './ProductCard.module.css';

type ProductCardProps = {
    product: Product;
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const dispatch = useAppDispatch();
    const favorites = useAppSelector((state) => state.favorites.productIds);

    const isFavorite = favorites.includes(product.id);

    const handleToggle = () => {
        dispatch(toggleFavorite(product.id));
    };

    return (
        <Card
            className={styles.card}
            hoverable
            cover={
                <img
                    className={styles.cardCover}
                    alt={product.name}
                    src={product.image}
                />
            }
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
