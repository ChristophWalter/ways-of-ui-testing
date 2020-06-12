it("should select the correct package", () => {
  const DIALOG_CONTENT = "Thanks for your interest!"
  cy.visit("/")
  cy.contains(DIALOG_CONTENT).should("not.be.visible")

  cy.contains("BUY").click()
  cy.contains(DIALOG_CONTENT)
  cy.contains("Buy it straight away")
  cy.get("[name=Mode][value=buy]").should("be.checked")

  cy.get("[aria-label=Cancel]").click()
  cy.contains(DIALOG_CONTENT).should("not.be.visible")
})
