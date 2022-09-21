describe('Create a Visit', () => {
  it('Verify the home page title', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('eq','Home Page')
  })
  it('Navigate to Login Page', () => {
    // Navigate to Login page
    cy.get('#__next > div > div > div.Navbar_container__rxFeS > button').click()
  })
  it('Fill the login credentials', () => {
    cy.get('#email').type('lama@gmail.com')
    cy.get('#password').type('lama1996')
  })
  it('Click on Login', () => {
    cy.get('#loginButton').should('have.text','Login').click()
  })
  it('Navigate to a Doctor', () => {
    cy.visit('http://localhost:3000/Doctors/Doctor_card?id=1')
    cy.get('#__next > div.main > div:nth-child(3) > button').click()
  })
})