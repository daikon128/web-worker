describe('show link card', () => {
  const sut = '#link-card'

  beforeEach(() => {
    cy.visit(Cypress.env('host'))
  })

  it('display link card', () => {
    linkCardRoot().find('div').should('have.text', 'link card')
  })

  it.skip('show saved link card', () => {
    saveLinkCard("link card title", "http://example.com", "1", "2")
    linkCardTitle().should('have.text', 'link card title')
    linkCardLink().should('have.attr', 'href', 'http://exapmle.com')
  })

  function linkCardRoot() {
    return cy.get(sut).shadow()
  }

  function linkCardTitle() {
    return linkCardRoot().find('.link-card-title')
  }

  function linkCardLink() {
    return linkCardRoot().find('.link-card-link')
  }

  function saveLinkCard(title, url, id, userId) {

  }

})