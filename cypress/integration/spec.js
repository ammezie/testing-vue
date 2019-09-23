describe("Users", () => {
  it("renders the user list text", () => {
    cy.visit("http://localhost:8080");

    cy.contains("User List");
  });

  it("loads a list of users", () => {
    cy.visit("http://localhost:8080");

    cy.get("h5").should("have.length", 10);
  });
});
