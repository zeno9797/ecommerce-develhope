import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Product from "./pages/Product";
import Store from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Store />} />
            {/* <Route path="/product" element={<Product id={0} name={''} price={0} imgUrl={''} />} /> */}
            <Route
              path="/product/:id"
              element={<Product id={0} name={""} price={0} imgUrl={""} />}
            />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
}

export default App;
