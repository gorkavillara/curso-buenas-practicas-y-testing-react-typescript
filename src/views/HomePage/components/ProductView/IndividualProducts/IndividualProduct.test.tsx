/* eslint-disable */
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import IndividualProduct from "./IndividualProduct";

const product = {
  title: "iPhone",
  description: "iPhone de Apple",
  price: 399,
  category: "iPhone",
  id: 1,
  image: "",
  rating: {
    rate: 4,
    count: 3
  }
};

let view: any;
let btn: any;

describe("Renderizado del componente", () => {
  beforeEach(() => {
    view = render(<IndividualProduct product={product} />);
    btn = view.container.querySelector("button");
  });

  it("Renderiza correctamente", () => {
    expect(view).toBeDefined();
  });

  it("Renderiza el título correctamente", () => {
    view.getByText(product.title);
  });

  it("Renderiza el botón correctamente", () => {
    expect(btn).not.toBeNull();
    // const buttonText = `${product.price}`;
    // view.getByText(buttonText, { exact: false });
  });

  //   it("Cuando hago clic en el botón se ejecuta la función", () => {
  //     const mockFunction = jest.fn();
  //     const clickView = render(
  //       <IndividualProduct product={product} handleClick={mockFunction} />
  //     );
  //     const button = clickView.container.querySelector("button");
  //     // Haz clic en el botón
  //     expect(button).not.toBeNull();

  //     button && fireEvent.click(button);

  //     expect(mockFunction).toHaveBeenCalledTimes(1);
  //     // console.log(prettyDOM(clickView));
  //   });

  it("Cuando hago clic en el botón de agregar al carrito, el color del título se vuelve azul", () => {
    const title = view.container.querySelector(".card-title");

    expect(title).toHaveStyle("color: red");
    fireEvent.click(btn);
    expect(title).toHaveStyle("color: blue");
    // Haz clic en el botón
    // fireEvent.click(btn)
    // view.getByText("Quitar del carrito")
  });

  it("Cuando hago clic en el botón de agregar al carrito, el texto cambia", () => {
    const btn = view.container.querySelector("button");
    // Haz clic en el botón
    fireEvent.click(btn);
    view.getByText("Quitar del carrito");
  });

  it("Cuando hago hover sobre el título, se añade el estilo line-through", () => {
    const titleElement = view.container.querySelector(".card-title");
    userEvent.hover(titleElement);
    // expect(titleElement).toHaveStyle("background-color: red")
    expect(titleElement).toHaveStyle("text-decoration: line-through");

    const textDecorationValue = window
      .getComputedStyle(titleElement, ":hover")
      .getPropertyValue("text-decoration");
    // console.log(textDecorationValue)
  });
});
