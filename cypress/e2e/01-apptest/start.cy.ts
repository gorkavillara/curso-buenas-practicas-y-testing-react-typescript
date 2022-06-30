/// <reference types="cypress" />

describe("Testeamos el renderizado de la aplicación", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Renderiza correctamente", () => {
    // cy.visit("http://localhost:3000");
  });
});
describe("Testeamos la home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".home-button").click();
  });
  it("Se renderizan los productos", () => {
    cy.get(".p-card").should("have.length", 2);
  });
  it("Hacemos hover sobre el título", () => {
    cy.get(".p-card").first().get(".card-title");
  });
});
describe("Testeamos los dropdown", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get(".dropdown-button").click();
  });

  it("Renderiza el dropdown inicial", () => {
    cy.get("[role=provincias-dropdown]").click();
  });

  it("Renderiza el dropdown secundario", () => {
    cy.get("[role=provincias-dropdown]").click();
    cy.get("[role=listbox]").get("li").first().click();
    cy.get("[role=localidades-dropdown]");
  });
});
