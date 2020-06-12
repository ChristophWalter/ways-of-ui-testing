it("should select the correct package", () => {
  const DIALOG_CONTENT = "Thanks for your interest!"
  cy.visit("/")
  cy.contains(DIALOG_CONTENT).should("not.be.visible")

  cy.contains("button", "BUY").click()
  cy.contains(DIALOG_CONTENT)
  cy.get("input[name=Mode][value=buy]").should("be.checked")

  cy.get("button[aria-label=Cancel]").click()
  cy.contains(DIALOG_CONTENT).should("not.be.visible")
})
