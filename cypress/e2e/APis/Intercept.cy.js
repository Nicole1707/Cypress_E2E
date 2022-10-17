
const testdata = require('../../fixtures/titulos.json');

testdata.forEach((data) => {
    describe('El titulo es corresto para cada pagina en Free Range Testers', () => {
        it('Valida que' +data.Title+ 'Sea el titulo de'+data.Location, () =>{
            cy.intercept('GET', {
                status:500,
                body:{
                    nombre: 'Estoy probando'
                }
            })
            cy.visit(data.Location)
            cy.title().should('include', data.Title)

        })
    })
});