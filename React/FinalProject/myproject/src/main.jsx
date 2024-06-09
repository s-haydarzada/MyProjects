import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Contexts/ProductContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
import CardProvider from "./Contexts/CardContext.jsx";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import BrandProvider from "./Contexts/BrandsContext.jsx";
import WishlistProvider from "./Contexts/WishlistContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrandProvider>
      <CardProvider>
        <SidebarProvider>
          <WishlistProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </WishlistProvider>
        </SidebarProvider>
      </CardProvider>
    </BrandProvider>
  </AuthProvider>
);
