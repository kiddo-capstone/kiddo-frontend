const app_url = "localhost:8000"

describe("Sidebar", () => {
  beforeEach(() => {
    cy.visit(`/mission-control`)
  })

  it("should display today's date", () => {
    const today = new Date().toLocaleDateString()
    cy.contains("Date:")
      .should("be.visible")
    cy.contains(today)
      .should("be.visible")
  })

  it("should allow the user to update their status", () => {
    cy.contains("Agent Status:")
      .should("be.visible")
    
    cy.get('.PrivateHiddenCss-xsDown-12 > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .makeStyles-section-25 > .makeStyles-card-26 > .makeStyles-cardHeader-27 > .makeStyles-details-31 > :nth-child(3) > div > .makeStyles-butt-41')
      .should("be.visible")
      .click()
    
    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .makeStyles-root-39 > .makeStyles-modalContent-34 > .makeStyles-form-35')

    cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .makeStyles-root-39 > .makeStyles-modalContent-34 > .makeStyles-form-35 > [for="🥳"]')
    .click()
    .should("have.class", "makeStyles-labelChecked-38")

    cy.get('.makeStyles-modalContent-34 > .makeStyles-butt-41')
      .click()

    cy.contains("🥳")
  })

  it("should display stats", () => {
    cy.contains("STATS")
  })

  it("should allow a user to login using Auth0", () => {
    // cy.contains("Log In").click()
    // cy.get('.c8148305b').click()
    // set to set up configuration in Auth0
  })
})