import React from "react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export interface IHomeContext {
  products?: Product[]
  setProducts?: React.Dispatch<React.SetStateAction<Product[]>>
  dialogShown?: boolean
  setDialogShown?: React.Dispatch<React.SetStateAction<boolean>>
}
