it("should select the correct package", () => {
  cy.visit("/")
  cy.contains('Thanks for your interest!').should('not.be.visible')
  cy.contains("BUY").click()
  cy.contains("Thanks for your interest!")
  cy.contains("Buy it straight away")
  cy.get("[name=Mode][aria-selected=true]").should('have.value', 'buy')
  cy.get("[aria-label=Cancel]").click()
  cy.contains('Thanks for your interest!').should('not.be.visible')
})