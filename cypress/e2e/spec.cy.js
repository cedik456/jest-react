describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
    cy.get("#text").type("test");
    cy.get("#submitted").should("not.exist");
    cy.get("form").submit();
    cy.get("#submitted").should("exist");
  });
});
