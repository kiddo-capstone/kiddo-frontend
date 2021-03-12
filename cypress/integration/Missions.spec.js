describe("MissionControl", () => {
  beforeEach(() => {
    cy.visit("/mission-control");
  });

  it("should display information on a mission card", () => {
    cy.contains("Mission Possible").should("be.visible");
  });

  it("should allow a user to start a mission and submit a task", () => {
    cy.contains("START").should("be.visible").click();

    cy.url().should("include", "/daily-mission/");
    cy.contains("Agent Task").click();

    cy.url().should("include", "/task/");

    // cy.get(".makeStyles-textBox-91")
    //   .type("Hello! ")

    // cy.get('a > .makeStyles-butt-41')
    //   .should("be.disabled")

    // cy.get(".makeStyles-textBox-91")
    //   .type("So now I'm going to type at least fiften words because that's what the user has to do")

    // cy.get('a > .makeStyles-butt-41')
    //   .should("not.be.disabled")
    //   .click()
  });
});
