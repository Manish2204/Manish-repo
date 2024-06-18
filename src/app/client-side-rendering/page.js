"use client";
import React, { useEffect, useState } from "react";

const ClientSideRendering = () => {
  const [product, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      console.log(data, "data");
      setProduct(data.products);
    } catch (error) {
      console.error("Error", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(product, "ss");
  return (
    <div className="100">
      {/* <ul> */}
      {product.map((ele) => (
        <li key={ele.id}>{ele.title}</li>
      ))}
      {/* </ul> */}
    </div>
  );
};

export default ClientSideRendering;
