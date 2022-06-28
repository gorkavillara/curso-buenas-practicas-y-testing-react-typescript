import React, { useState, useEffect } from "react";
import "./HomePage.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { Product } from "../../models";
import { HomeContext } from "./contexts/HomeContext";
import { fetchProducts } from "./services";

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [dialogShown, setDialogShown] = useState<boolean>(false);

  useEffect(() => {
    const load = async() => {
      const data = await fetchProducts().catch((e) => console.error(e));
      setProducts(data);
    };
    load();
  }, []);

  return (
    <HomeContext.Provider value={{ products, dialogShown, setDialogShown }}>
      <div className="homepage">
        <Header />
        <Main />
        <Footer />
      </div>
    </HomeContext.Provider>
  );
};

export default HomePage;
