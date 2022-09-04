describe('Pruebas Manejo ', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })
    it('Ejemplo tiempo de espera', ()=>{
        cy.wait(5000);
        cy.contains('Challenging DOM').click();
    })
    it('Nueva ventana', ()=>{
        cy.contains('Multiple Windows').click();
        cy.contains('Click Here').invoke('removeAttr','target').click();
        cy.contains('New Window').should('have.text', 'New Window');
        
    })
    it('Shadow DOM', ()=>{
        cy.contains('Shadow DOM').click();
        cy.get('ul > :nth-child(2)').shadow().should('have.text','In a list!');
    })
    it('Primer y ultimo elemento', ()=>{
        cy.contains('Dynamic Content').click();
        cy.get('img').first().should('be.visible');
        cy.get('img').last().should('be.visible');
        cy.get('img').eq(2).should('be.visible'); //por posiscion
    })
    it('Padres e hijos', ()=>{
        cy.contains('Dynamic Content').click();
        cy.get(':nth-child(4) > .large-2 img').parent();
        cy.get('.example :nth-child(7)').children();
    })
    it('Invoke', ()=>{
        cy.contains('Dynamic Content')
        .should('be.hidden')
        .invoke('show')
        .should('be.visible');
    })
})
