import React, { useContext } from "react";
import { HomeContext } from "../../contexts/HomeContext";
import Dialog from "../Dialog/Dialog";
import MuestraProductos from "../MuestraProductos/MuestraProductos";
import ProductView from "../ProductView/ProductView";

const Main = () => {
  const { products, dialogShown } = useContext(HomeContext);
  return (
    <div style={{ flexGrow: 1 }}>
      {products && <p>Se han encontrado {products.length} productos</p>}
      {products && <MuestraProductos />}
      {dialogShown && products && (
        <Dialog>
          <h1>Productos encontrados</h1>
          <p>Se han encontrado {products.length} productos</p>
          <button>Cta</button>
        </Dialog>
      )}
      {products && <ProductView />}
    </div>
  );
};

export default Main;
