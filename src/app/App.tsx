import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsPage } from '../pages/products';
import "./styles/index.css"

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ProductsPage />} />
            </Routes>
        </Router>
    );
};
