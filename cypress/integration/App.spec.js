describe("App", () => {

  beforeEach(() => {
    cy.visit(`/mission-control`)
  })

  it("should render mission control", () => {
    cy.contains("Mission Control")
      .should("be.visible")
  })

  it("should render sidebar", () => {
    cy.contains("Secret Agent")
      .should("be.visible")
  })

  it("should render 404 page", () => {
    cy.visit("/not-a-page")
    cy.contains("Looks like you got lost!")
      .should("be.visible")
    
    cy.get('.makeStyles-img-46')

    cy.get('.makeStyles-container-45 > .makeStyles-butt-41')
      .click()
      
    cy.url().should('include', "/mission-control")
  })
})