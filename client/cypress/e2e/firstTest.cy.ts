describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:3777/');
        cy.get('[data-testid="app_container"]').should('contain', 'React App')
    });
});
