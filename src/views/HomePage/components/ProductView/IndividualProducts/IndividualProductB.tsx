import React from "react";
import { Product } from "../../../../../models";

const IndividualProductB = ({ product }: { product: Product }) => {
  return (
    <div>
      <h3 style={{ color: "green" }}>{product.price.toString()}€</h3>
      <p>
        <strong>{product.title}</strong>
      </p>
      <p>
        <em>{product.description}</em>
      </p>
    </div>
  );
};

export default IndividualProductB;
