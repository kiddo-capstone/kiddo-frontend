// const app_url = "localhost:3000";

// describe("Sidebar", () => {
//   beforeEach(() => {
//     cy.visit(`/mission-control`);
//   });

//   it("should display today's date", () => {
//     const today = new Date().toLocaleDateString();
//     cy.contains("Date:").should("be.visible");
//     cy.contains(today).should("be.visible");
//   });

//   it("should allow the user to update their status", () => {
//     cy.contains("Agent Status:").should("be.visible");

//     // cy.get(
//     //   ".PrivateHiddenCss-xsDown-12 > .MuiDrawer-root > .MuiPaper-root > :nth-child(1) > .makeStyles-section-25 > .makeStyles-card-26 > .makeStyles-cardHeader-27 > .makeStyles-details-31 > :nth-child(3) > div > .makeStyles-butt-41"
//     // );
//     cy.get(".MuiDrawer-root > .MuiPaper-root").should("be.visible").click();

//     // cy.get(
//     //   '[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .makeStyles-root-39 > .makeStyles-modalContent-34 > .makeStyles-form-35'
//     // );

//     cy.get(".makeStyles-details-25 > :nth-child(2)");
//     cy.get(".makeStyles-button-40").click();
//     cy.get(".makeStyles-modalContent-29 > h2")
//       .contains("Agent Status Update")
//       .should("be.visible");

//     // cy.get(
//     //   '[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .makeStyles-root-39 > .makeStyles-modalContent-34 > .makeStyles-form-35 > [for="🥳"]'
//     // )
//     cy.get('[for="🥳"]')
//       .click()
//       .should("have.class", "makeStyles-labelChecked-33");

//     // cy.get(".makeStyles-modalContent-34 > .makeStyles-butt-41").click();
//     cy.get(".makeStyles-modalContent-29 > .makeStyles-butt-41").click();
//     cy.contains("🥳");
//   });

//   // NOTE: This test commented out for now, we may implement STATS in future
//   // it("should display stats", () => {
//   // cy.contains("STATS");
//   // });
// });
