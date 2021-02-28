const app_url = "localhost:8000"

describe('App', () => {
  beforeEach(() => {
    cy.visit(app_url)
  })
  it('should load mission control', () => {
    expect(true).to.equal(true)
  })
})