import React, { useState, useEffect, useCallback } from "react";

import Grid from "@mui/material/Grid";

import productsContext from "./productsContext";
// import { Form } from "react-router-dom";
// import Form from "./Form";
import CategoryCards from "./CategoryCards";

import ProductCard from "./ProductCard/ProductCard";

function Products() {
  const [productsData, setProductsData] = useState([]);

  const getProducts = async () => {
    try {
      const fetchResponse = await fetch("https://dummyjson.com/products");

      const responseData = await fetchResponse.json();

      setProductsData(responseData.products);
      console.log(productsData);
    } catch (error) {
      console.log(error.msg);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <productsContext.Provider
        value={{
          productsData,
          setProductsData,
          getProducts,
        }}
      >
        <CategoryCards />

        <Grid container spacing={9} px={8} py={0}>
          {productsData.map((product, key) => (
            <ProductCard product={product} />
          ))}
        </Grid>
      </productsContext.Provider>
    </div>
  );
}

export default Products;
