describe('MyTestSuite', () =>
{
    it('Verify title of the page', () =>
    {
        cy.visit('http://localhost:3000/')
        cy.title().should('eq','Home page')

    })

})