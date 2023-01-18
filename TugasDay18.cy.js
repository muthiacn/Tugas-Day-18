describe('Cypress E2E Test - Muthia Conita', () => {

  it('Positive Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()

  })

  it('Negative Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('muthiacn')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash.flash.error').should("be.visible","have.text",'Your username is invalid!')
  })

})