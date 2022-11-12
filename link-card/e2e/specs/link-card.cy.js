describe('show link card', () => {
  const sut = '#link-card'

  beforeEach(() => {
    cy.visit(Cypress.env('host'))
  })

  it('display link card', () => {
    cy.get(sut).shadow().find('div').should('have.text', 'link card')
  })
})