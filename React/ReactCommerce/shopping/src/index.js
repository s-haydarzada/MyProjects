import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/index';
import { UserProvider } from './Context/UserContext/index';
import { ProductProvider } from './Context/ProductContext';
import { CartProvider } from './Context/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
);


