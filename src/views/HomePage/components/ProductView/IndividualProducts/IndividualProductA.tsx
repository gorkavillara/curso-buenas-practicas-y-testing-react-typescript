import React from "react";
import { Product } from "../../../../../models";

const IndividualProductA = ({ product }: { product: Product }) => {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>{product.description}</p>
      <button>Comprar por {product.price.toString()}€</button>
    </div>
  );
};

export default IndividualProductA;
