describe('Pruebas de interaccion con la web ', ()=>{
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/');
    })
    it('Ejemplo de click', ()=>{
        cy.contains('Add/Remove Elements').click();
        cy.get('button').click();
        cy.get('.added-manually').click();
    })
    it('Ejemplo de escritura', ()=>{
        cy.contains('Form Authentication').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('.radius').click();
    })

    it('Ejemplo de checkbox', ()=>{
        cy.contains('Checkboxes').click();
        //Seleccionar por tipo de input 
        //los selecciona todos
        // cy.get('[type="checkbox"]').check();
        // cy.get('[type="checkbox"]').uncheck();

        //Seleccionar por posicion
        cy.get('#checkboxes > :nth-child(1)').check();
        cy.get('#checkboxes > :nth-child(3)').uncheck();
    })
    it('Elegir de un dropdown', ()=>{
        cy.contains('Dropdown').click();
        cy.get('#dropdown').select('Option 1'); //seleccionar por texto
        cy.get('#dropdown').select('2'); //seleccionar por valor
    })

    it('Ejemplo de Clear', ()=>{
        cy.contains('Form Authentication').click();
        cy.get('#username').type('tomsmith');
        cy.get('#password').type('SuperSecretPassword!');
        cy.get('#password').clear();
        cy.get('.radius').click();
    })

    it('Ejemplo de hover sobre un elemento', ()=>{
        cy.contains('Hovers').click();
        cy.get('#content > div> div:nth-child(4) > div> a').click({force:true});
    })

    it.only('Ejemplo de click derecho', ()=>{

        cy.contains('Context Menu').click();
        // cy.get('#hot-spot').rightclick();
        cy.get('#hot-spot').invoke('trigger','contextmenu');
        cy.on('window:alert', (str)=>{
            expect(str).to.equal('You selected a context menu');
        })
    })
})