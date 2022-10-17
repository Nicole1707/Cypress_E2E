const testdata = require('../../fixtures/titulos.json')

testdata.forEach((testData) => {
    describe('Usando Json', () => {
        
        it('Validar '+testData.Title+' sea el titulo de ' +testData.Location, () => {
            cy.visit(testData.Location);
            cy.title().should('include', testData.Title);
        });


    })

})

