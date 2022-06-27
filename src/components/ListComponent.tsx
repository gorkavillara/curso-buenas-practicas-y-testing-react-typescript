import React from "react";

type Animal = {
  name: string;
  id: number;
};

// const animales: string[] = ["Perro", "Gato", "Loro", "Tortuga"];
const animales: Animal[] = [
  { id: 1, name: "Perro" },
  { id: 2, name: "Gato" },
  { id: 3, name: "Loro" },
  { id: 4, name: "Tortuga" },
];

const ListComponent = () => {
  return (
    <ul>
      {animales.map((animal: Animal) => (
        <li key={animal.id}>{animal.name}</li>
      ))}
    </ul>
  );
};

export default ListComponent;
