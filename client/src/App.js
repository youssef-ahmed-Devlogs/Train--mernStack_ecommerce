import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "../src/data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            <Filter products={products} />
            <Products products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
