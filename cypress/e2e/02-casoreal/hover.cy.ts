const url = "url";
const user = "user";
const pass = "pass";

describe("Probamos la tabla de recursos humanos", () => {
  it("Logueamos correctamente", () => {
    cy.viewport(1280, 720);
    cy.visit(url);

    // Pantalla de login
    cy.get("input#usuario").type(user);
    cy.get("button[type=submit]").click();
    cy.get("input#password").type(pass);
    cy.get("button[type=submit]").click();

    // Pantalla principal
    //     cy.get("button.p-button.p-button-outlined.p-mr-2", {
    //       timeout: 10000
    //     })
    //       .should("be.visible")
    //       .click({ timeout: 10000 });
    cy.get(".contenedorBotonAcceso > :nth-child(1) > .p-button")
      .should("be.enabled", { timeout: 10000 })
      .click();
    // cy.visit(
    //   "https://la_otra_url_que_hemos_probado.com"
    // );
    cy.get("ul.p-treenode-children li.p-treenode-leaf").first().click();

    cy.get("div.p-inputgroup.p-group-center.metadata-table-cargando").invoke(
      "attr",
      "style",
      "display: block"
    );

    cy.get("table.metadata-table")
      .get("tbody")
      .get("tr")
      .first()
      .get("button#boton_borrar_undefined")
      .first()
      .click();
  });
});
