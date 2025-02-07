import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchProducts } from '../../entities/product/model/slice';
import { selectFilteredProducts } from '../../features/filters/model/selectors';
import { FiltersPanel } from '../../features/filters/ui/FiltersPanel';
import { ProductCard } from '../../entities/product/ui/ProductCard';

import { Row, Col, Spin, Alert } from 'antd';

export const ProductsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { status, error } = useAppSelector((state) => state.products);
    const filteredProducts = useAppSelector(selectFilteredProducts);

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
