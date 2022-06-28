export const fetchProducts = () =>
  fetch("https://fakestoreapi.com/products")
    .then((r) => r.json())
    .then((res) => res)
    .catch((e) => console.error(e));
