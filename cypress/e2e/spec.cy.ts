describe('Test Acme-test Site', () => {
  it('Test Login', () => {
    cy.visit('https://acme-test.uipath.com/login');
    cy.get('#email').type("dan320so@gmail.com");
    cy.get('#password').type("12344321");
    cy.get('button').contains("Login").click();

    // Assertion
    cy.get("h1").should("contain", "Dashboard");
  })
})