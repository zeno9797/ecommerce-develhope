import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import Product from './pages/Product';
import Store from './pages/Store';
import { Navbar } from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='mb-4' >
          <Routes>
            <Route path="/" element={<Store />} />
            
            <Route path="/product"  element={ <Product />} />

          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>

  );
}

export default App;
