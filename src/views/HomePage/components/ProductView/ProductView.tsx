/* eslint-disable multiline-ternary */
import React, { useContext } from "react";
import { Product } from "../../../../models";
import { HomeContext } from "../../contexts/HomeContext";
import IndividualProduct from "./IndividualProducts/IndividualProduct";
import "./ProductView.css";

/* eslint-disable indent */
const ProductView = () => {
  const { products } = useContext(HomeContext);
  return products ? (
    <div className="product-view">
      {products.map((product: Product) => (
        <IndividualProduct key={product.id} product={product} />
      ))}
    </div>
  ) : null;
};

export default ProductView;
