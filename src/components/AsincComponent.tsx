import React, { useState } from "react";
import axios from "axios";

const AsincComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleClick = () => {
    setLoading(true);
    fetch("https://pokeapi.co/api/v2/pokemon/charmander")
      .then((r) => r.json())
      .then((res) => console.log(res))
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
  };

  const awHandleClick = async () => {
    setLoading(true);
    const r = await axios
      .get("https://pokeapi.co/api/v2/pokemon/charmander")
      .catch((e) => console.error(e))
      .finally(() => setLoading(false));
    console.log(r);
  };
  return (
    <div>
      <h1>AsincComponent</h1>
      {loading && <p>Loading...</p>}
      <button onClick={handleClick} disabled={loading}>
        Llamada sin Await
      </button>
      <button onClick={awHandleClick} disabled={loading}>
        Llamada con Await
      </button>
    </div>
  );
};

export default AsincComponent;
