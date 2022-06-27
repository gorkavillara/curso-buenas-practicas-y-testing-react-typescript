import React, { useEffect, useState } from "react";

const FunctionalComponent = () => {
  const [number] = useState<number>(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((res) => res.json())
      .then((r) => console.log(r))
      .catch((e) => console.error(e));
  }, []);

  return <h1>Componente Funcional (número: {number})</h1>;
};

export default FunctionalComponent
