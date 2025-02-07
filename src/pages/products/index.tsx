// src/pages/products/index.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store';
import { fetchProducts } from '../../entities/product/model/slice';
import { selectFilteredProducts } from '../../features/filters/model/selectors';
import { FiltersPanel } from '../../features/filters/ui/FiltersPanel';
import { ProductCard } from '../../entities/product/ui/ProductCard';

import { Row, Col, Spin, Alert } from 'antd';

export const ProductsPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.products);

    const filteredProducts = useSelector(selectFilteredProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === 'loading') {
        return <Spin tip="Loading products..." />;
    }

    if (status === 'failed') {
        return <Alert message="Error" description={error} type="error" showIcon />;
    }

    return (
        <div style={{ marginTop: 20 }}>
            <FiltersPanel />

            <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
                {filteredProducts.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};
