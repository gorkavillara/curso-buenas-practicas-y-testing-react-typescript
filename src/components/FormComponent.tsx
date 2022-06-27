import React, { useState } from "react";

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

type Datos = {
  nombre: string;
  apellido: string;
  email: string;
};

const datosIniciales = {
  nombre: "",
  apellido: "",
  email: "",
};

const FormComponent = () => {
  const [datos, setDatos] = useState<Datos>(datosIniciales);
  //   const [nombre, setNombre] = useState<string>("");
  //   console.log(nombre)

  //   const changeNombre = (e: any) => setNombre(e.target.value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDatos({ ...datos, [e.target.name]: e.target.value });

  const handleSubmit = () => console.log("datos enviados", datos);

  const { nombre, apellido, email } = datos;
  return (
    <div style={formStyle}>
      <h1>Formulario</h1>
      <label>
        <span>Tu Nombre</span>
        <input
          name="nombre"
          type="text"
          value={nombre}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Tu Apellido</span>
        <input
          name="apellido"
          type="text"
          value={apellido}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>Tu Email</span>
        <input
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default FormComponent;
