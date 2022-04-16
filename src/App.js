import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const [isCartEmpty, setIsCartEmpty] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <button
            onClick={() => setIsCartEmpty(!isCartEmpty)}
            title="Change is cart empty or not and visit checkout page"
          >
            Set Cart Empty
          </button>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/checkout">Checkout</Link>
        </nav>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about/*" element={<About />} />

            <Route path="products">
              <Route index element={<Products />} />
              <Route path=":id/*" element={<ProductDetails />} />
            </Route>
            <Route
              path="test"
              element={
                <div>
                  <h2>Test Page</h2>
                  <p>Hello World! This is just for testing purposes.</p>
                </div>
              }
            />
            <Route path="redirect" element={<Navigate to="/about" />} />
            <Route
              path="checkout"
              element={
                isCartEmpty ? <Navigate to="/products" /> : <p>Checkout page</p>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
