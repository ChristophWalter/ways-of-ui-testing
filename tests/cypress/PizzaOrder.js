it("should submit the selected pizza", () => {
  cy.server()
  cy.route({
    method: "POST",
    url: "/api/order/free",
    response: {},
  }).as("freeOrder")
  cy.visit("/free-pizza")

  cy.get('[name="Pizza"][value="Funghi"]').check()
  cy.contains("button", "bestellen").click()

  cy.wait("@freeOrder").its("request.body").should("deep.equal", { pizza: "Funghi" })
  cy.contains("Wir haben deine Bestellung erhalten.")

  cy.contains("fieldset", "Welche Pizza möchtest du?").should("be.disabled")
  cy.contains("button", "bestellen").should("be.disabled")
})
