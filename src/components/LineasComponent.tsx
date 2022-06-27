import React from "react";

const UnicaLineaComponent = () => <h1>Única Línea</h1>;

const ChildrenComponent = ({ children }: { children: any }) => <>{children}</>;

const LineasComponent = () => (
  <div>
    <h1>LineasComponent</h1>
    <p>El párrafo que sigue</p>
    <ChildrenComponent>
      <h1>Hola soy el children component</h1>
    </ChildrenComponent>
    <UnicaLineaComponent />
  </div>
);

export default LineasComponent;
