/* eslint-disable multiline-ternary */
import React, { useContext } from "react";
import { Product } from "../../../../models";
import { HomeContext } from "../../contexts/HomeContext";
import IndividualProductA from "./IndividualProducts/IndividualProductA";
import IndividualProductB from "./IndividualProducts/IndividualProductB";
import "./ProductView.css";

/* eslint-disable indent */
const ProductView = () => {
  const { products } = useContext(HomeContext);
  return products ? (
    <div className="product-view">
      {products.map((product: Product) => (
        <IndividualProductA key={product.id} product={product} />
      ))}
      {products.map((product: Product) => (
        <IndividualProductB key={product.id} product={product} />
      ))}
    </div>
  ) : null;
};

export default ProductView;
