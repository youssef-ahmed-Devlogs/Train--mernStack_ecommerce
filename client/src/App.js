import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "../src/data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";

function App() {
  const [products, setProducts] = useState(data);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  const handelFilterByCategory = (e) => {
    setCategory(e.target.value);

    if (e.target.value == "all") {
      setProducts(data);
    } else {
      let productsClone = [...data];
      let newProducts = productsClone.filter(
        (product) => product.category == e.target.value
      );
      setProducts(newProducts);
    }
  };

  const handelSortByPrice = (e) => {
    let order = e.target.value;
    setSort(order);

    let productsClone = [...products];
    let newProducts = productsClone.sort((a, b) => {
      if (order == "lowest") {
        return a.price - b.price;
      } else if ((order = "highest")) {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });

    setProducts(newProducts);
  };

  return (
    <div className="layout">
      <Header />
      <main>
        <div className="container">
          <div className="wrapper">
            <Filter
              products={products}
              handelFilterByCategory={handelFilterByCategory}
              handelSortByPrice={handelSortByPrice}
              category={category}
              sort={sort}
            />
            <Products products={products} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
