import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Product from "./pages/Product";
import Store from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/Footer";
import { Input } from "./components/Input";


function App() {
  const [searchString, setSearchString] = useState<string>("")

  

  
  return (
    <>
      <ShoppingCartProvider>
        <Navbar  updateSearch={setSearchString}/>
        <Container className="mb-5">
          <Routes>
            <Route path="/" element={<Store searchString={searchString} />} />
            <Route
              path="/product/:n"
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
