describe("App", () => {

  beforeEach(() => {
    cy.visit(`/mission-control`)
  })

  it("should render mission control", () => {
    cy.contains("Mission Control")

    cy.get(":nth-child(1) > .makeStyles-mission-55")
      .contains("Independence Day")
  })

  it("should render sidebar", () => {
    cy.contains("Secret Agent")
  })

  it("should render 404 page", () => {
    cy.visit("/not-a-page")
    cy.contains("Looks like you got lost!")

    cy.get('.makeStyles-container-45 > .makeStyles-butt-41')
      .click()
      
    cy.url().should('include', "/mission-control")
  })
})