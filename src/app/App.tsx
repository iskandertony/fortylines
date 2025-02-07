// app/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsPage } from '../pages/products';

export const App = () => {
    return (
        <Router>
            {/* Можно добавить Header, Nav и т.д. */}
            <Routes>
                <Route path="/" element={<ProductsPage />} />
            </Routes>
        </Router>
    );
};
