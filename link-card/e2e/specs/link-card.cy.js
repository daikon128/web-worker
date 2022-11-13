describe('show link card', () => {
  const sut = '#link-card'

  beforeEach(() => {
    cy.visit(Cypress.env('host'))
  })

  it('display link card', () => {
    getLinkCardRoot().find('div').should('have.text', 'link card')
  })

  function getLinkCardRoot() {
    return cy.get(sut).shadow()
  }
})