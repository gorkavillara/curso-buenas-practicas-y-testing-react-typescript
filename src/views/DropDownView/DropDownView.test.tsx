/* eslint-disable */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import DropDownView from "./DropDownView";

describe("Pruebas con DropDowns", () => {
  let view: any;
  beforeEach(() => {
    view = render(<DropDownView />);
  });
  it("Renderiza correctamente", () => {
    expect(view).toBeDefined();
  });

  it("Seleccionamos un valor de provincia y se muestra el segundo dropdown con localidades de esa provincia", async () => {
    const dropdown = await screen.findByRole(
      "provincias-dropdown",
      {},
      { timeout: 3000 }
    );
    // await waitFor(() => {
    //     screen.getByRole("provincias-dropdown")
    // }, { timeout: 3000 });
    
    fireEvent.click(dropdown);
    const listbox = (await screen.findAllByRole("listbox")).reverse()[0];
    // Seleccionar ALAVA
    const alavaElement = listbox.querySelector("li[aria-label=ALAVA]");
    alavaElement !== null && fireEvent.click(alavaElement);
    const localidadesDropdown = await screen.findByRole("localidades-dropdown");
    
    fireEvent.click(localidadesDropdown);
    const localidadesListbox = (await screen.findAllByRole("listbox")).reverse()[0];
    const abeciaElement = localidadesListbox.querySelector("li[aria-label=ABECIA]");
    expect(abeciaElement).not.toBeNull();
  });
});
