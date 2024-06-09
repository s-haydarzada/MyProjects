import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './Navigation';
import Categories from './Categories';
import Home from './Home';
import Shop from './Shop';
import Signin from './Signin';
import ProductDetails from "./ProductDetails"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navigation />}>
                    <Route index element={<Home />} />
                    <Route path='/categories' element={<Categories/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/productDetail' element={<ProductDetails/>}/>
                </Route>
                <Route path='*' element={<Navigate to="/404"/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
