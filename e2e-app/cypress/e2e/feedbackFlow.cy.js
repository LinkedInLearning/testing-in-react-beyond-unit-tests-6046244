describe("Feedback Flow", () => {
  it("allows user to submit feedback", () => {
    cy.visit("http://localhost:5173");

    cy.contains("Thank you for purchasing");

    cy.get('[data-test="leave-feedback"]').click();

    cy.get('[data-test="name"]').type("John Doe");
    cy.get('[data-test="email"]').type("john@example.com");
    cy.get('[data-test="message"]').type("Awesome product!");

    cy.get('[data-test="submit"]').click();

    cy.contains("Thank you for your feedback!");
  });
});