import React, { useState } from "react";

import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Product } from "../../../../../models";

const IndividualProduct = ({ product }: { product: Product }) => {
  const [added, setAdded] = useState<boolean>(false);
  const toggleAdded = () => setAdded((prevAdd) => !prevAdd);
  return (
    <Card>
      <h4 className="card-title" style={{ color: added ? "blue" : "red" }}>{product.title}</h4>
      <p>{product.description}</p>
      {added ? (
        <Button className="p-button-secondary" onClick={toggleAdded}>
          Quitar del carrito
        </Button>
      ) : (
        <Button className="p-button-primary" onClick={toggleAdded}>
          Agregar al carrito por {product.price.toString()}€
        </Button>
      )}
    </Card>
  );
};

export default IndividualProduct;
