import React from "react";

const BigComponent = () => {
  const h1Style = {
    color: "#d2d2d2",
    backgroundColor: "#01ff22",
  };

  return (
    <>
      <h1 style={h1Style}>Este es un componente grande</h1>
      <p>Haz clic aquí</p>
      <button>Click</button>
      <img
        src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F50%2FDucati_748_Studio.jpg&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FMotocicleta&tbnid=OUeeUV2gNzXMgM&vet=12ahUKEwjC3bzVnM34AhUyg84BHR6aD3YQMygBegUIARDfAQ..i&docid=gJ1rgK8ho-rm1M&w=3067&h=2045&q=motocicleta&ved=2ahUKEwjC3bzVnM34AhUyg84BHR6aD3YQMygBegUIARDfAQ"
        alt=""
      />
    </>
  );
};

export default BigComponent;
