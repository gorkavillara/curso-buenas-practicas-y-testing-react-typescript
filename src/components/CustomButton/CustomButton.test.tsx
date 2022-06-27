import { render } from "@testing-library/react";
import CustomButton from "./CustomButton";

it("Renderiza correctamente", () => {
  const view = render(<CustomButton />);
  expect(view).toBeDefined();
});
