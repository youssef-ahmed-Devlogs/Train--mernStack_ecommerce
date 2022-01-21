import React, { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import { words } from "./words";
import data from "../src/data.json";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

function App() {
  const [products, setProducts] = useState(data);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [cartProducts, setCartProducts] = useState(
    JSON.parse(localStorage.getItem("cartProducts")) || []
  );

  // Filter By Category
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

  // Filter Sort By Price
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

  // Add To Cart
  const addToCart = (product) => {
    const cartProductsClone = [...cartProducts];
    let isProductExist = false;

    cartProductsClone.forEach((cProduct) => {
      if (cProduct.id == product.id) {
        cProduct.qty++;
        isProductExist = true;
      }
    });

    if (!isProductExist) {
      cartProductsClone.push({ ...product, qty: 1 });
    }
    setCartProducts(cartProductsClone);
  };

  // Remove From Cart
  const removeFromCart = (id) => {
    const cartProductsClone = [...cartProducts];
    const newCart = cartProductsClone.filter((product) => product.id !== id);

    setCartProducts(newCart);
  };

  // Save cart in local storege
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

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
            <Products products={products} addToCart={addToCart} />
          </div>
          <Cart cartProducts={cartProducts} removeFromCart={removeFromCart} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
