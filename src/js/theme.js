import React from 'react';
import createRoot from 'react-dom/client';
import headerComponent from './header';
import CartDrawer from './react-components/cartDrawer';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    headerComponent();
});