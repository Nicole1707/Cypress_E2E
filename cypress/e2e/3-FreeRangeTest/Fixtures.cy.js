describe('Ejemplo con fixture', () => {
before(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
    cy.fixture('credenciales.json').then((testdata) => {
        this.testdata = testdata;
    })
})

it('Login con success', () => {
        cy.get('#username').type(this.testdata.username);
        cy.get('#password').type(this.testdata.password);
        cy.get('form').contains('Login').click();
        cy.url().should('include', '/secure');
})
})