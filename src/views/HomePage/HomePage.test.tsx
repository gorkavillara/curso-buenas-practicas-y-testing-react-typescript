import { fireEvent, render, screen } from "@testing-library/react"
import HomePage from "./HomePage"

let view: any

beforeEach(() => {
    view = render(<HomePage />)
})

it("Renderiza correctamente", () => {
    expect(view).toBeDefined()
})

describe("Header tests", () => {
    it("Contiene título Nuestra Tienda Online", () => {
        screen.getByText("Nuestra Tienda Online")
    })
})
describe("Main tests", () => {
    it("Ha renderizado el componente Muestra Productos", () => {
        screen.getByRole("muestra-productos")
    })
    it("Cuando hacemos click, se muestra el diálogo", () => {
        const button = screen.getByRole("muestra-productos")
        const dialog = view.container.querySelector("[role=dialog]")
        expect(dialog).toBeNull()
        fireEvent.click(button)
        screen.getByRole("dialog")
    })
})
describe("Footer", () => {})