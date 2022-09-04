describe('Prueba HomePague', ()=>{
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/');
    })
    it ('Prueba Humo', ()=>{
        cy.title().should('include', 'Free Range Testers');
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click(); //busqueda de elementos con xpath
       //Funcion contains para buscar elementos con texto de preferencia unico
        cy.contains('Iniciar').click(); //busqueda de elementos por texto

    } )

    it('Hay varios botones para ver mas', ()=>{
        cy.xpath('//*[@id="comp-l02x1m8d2label"]').click(); 
        cy.get('#comp-l6fz8xh0 > [data-testid="linkElement"]').click();
        cy.get('[data-testid="linkElement"] > ._1Qjd7').should('have.length', 8);
    })

    it ('El nombre del formulario posee la clase correcta', ()=>{
        cy.get('#input_comp-l1ed927d').should('have.class', '_1SOvY has-custom-focus');
    })

    it('Tiene un link de Blog en la barra de navegacion', ()=>{
        cy.get('#comp-l02x1m8d1label').should('have.text', 'Blog');
    })

    it.only('Existe el boton de Empezá a aprender! en el home page', ()=>{
        cy.get('#comp-krjarw4p > [data-testid="linkElement"]').should('be.visible')
    })
});
