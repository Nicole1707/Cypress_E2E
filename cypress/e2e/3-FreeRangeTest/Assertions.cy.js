describe('Pruebas Manejo ', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })
    it('Validaciones implicitas', ()=>{
        cy.contains('Inputs').click();
        cy.get('h3').should('have.text', 'Inputs').and('be.visible');
    })

    it('Validaciones explicitas', ()=>{
        cy.contains('Inputs').click();
        cy.get('h3')
        expect('Inpusts').to.equal('Inpusts');

    })
})