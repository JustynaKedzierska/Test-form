describe('form test', () => {


    it('typed space in field city', () => {
        cy.get('input[data-key=first_name]').type('FirstName')
        cy.get('input[data-key=last_name]').type('LastName')
        cy.get('input[data-key=sex]').first().click()
        cy.get('input[data-key=pesel').type('70101010010')
        cy.get('input[id=id_1_5_8]').click()
        cy.get('input[data-key=nip').type('6006006001')
        cy.get('input[name=diploma]').selectFile(('cypress/fixtures/files/test_image.png'), {
            action: 'drag-drop'
        }) 
        cy.get('input[id=id_1_6]').type('10000')
        cy.get('input[id=id_1_7_9]').click()
            .get('textarea[id=id_1_9]').type('POZ')
        cy.get('input[id=id_1_10_11]').click()
        cy.get('input[name=disabled_ext]').selectFile(('cypress/fixtures/files/test_image.png'), {
            action: 'drag-drop'
        })
        cy.get('input[id=id_1_11_13]').click()
        cy.get('input[data-key=street]').type('Testowa Ulica')
        cy.get('input[data-key=house_no]').type('20')
        cy.get('input[data-key=flat_no]').type('20')
        cy.get('input[data-key=city]').type('    ') //  4 X scpae 
        cy.get('input[data-key=post_code]').type('40-499')
        cy.get('input[data-key=community]').type('Gmina')  //przyjmuje liczby
        cy.get('input[data-key=county]').type('Powiat')
        cy.get('input[data-key=district]').type('20')
        cy.get('input[data-key=country]').type('20')
        cy.get('input[data-key=email]').type('exapmple@mail.com')
        cy.get('input[data-key=phone]').type('435200200')
        cy.get('input[data-key=country]').type('20')
        cy.get('input[data-key=employee]').first().check()
        cy.get('input[data-key=profession]').eq(1).check()
            .should('have.value', 'rcaid_30')
        cy.get('input[data-key=profession_ext]').type('Inny zawód')
        
        cy.get('textarea[data-key=workplace]')
            .type('Miejsce pracy')
        cy.get('input[data-key=emigrant]').first().check()
        cy.get('input[data-key=homeless]').first().check()
        cy.get('input[data-key=disabled_person]').first().check()
        cy.get('input[data-key=one_worker]').first().check()
        cy.get('input[data-key=children]').first().check()
        cy.get('input[data-key=one_person]').first().check()
        cy.get('input[data-key=unfarovalbe_situation]').first().check()
        cy.get("[type='submit']").click()
        cy.url().should('include', 'http://serwer1419259.home.pl/tester/index.php/site/form/52')
        cy.get('.text-center').contains('Uzupełnij wszystkie pola: brakujące pole - ').should('be.visible')
        cy.get('.text-center').contains('Miejscowość').should('be.visible')
    })


    it('typed numbers in field city', () => {
        cy.get('input[data-key=first_name]').type('FirstName')
        cy.get('input[data-key=last_name]').type('LastName')
        cy.get('input[data-key=sex]').first().click()
        cy.get('input[data-key=pesel').type('70101010010')
        cy.get('input[id=id_1_5_8]').click()
        cy.get('input[data-key=nip').type('6006006001')
        cy.get('input[name=diploma]').selectFile(('cypress/fixtures/files/test_image.png'), {
            action: 'drag-drop'
        }) 
        cy.get('input[id=id_1_6]').type('10000')
        cy.get('input[id=id_1_7_9]').click()
            .get('textarea[id=id_1_9]').type('POZ')
        cy.get('input[id=id_1_10_11]').click()
        cy.get('input[name=disabled_ext]').selectFile(('cypress/fixtures/files/test_image.png'), {
            action: 'drag-drop'
        })
        cy.get('input[id=id_1_11_13]').click()
        cy.get('input[data-key=street]').type('Testowa Ulica')
        cy.get('input[data-key=house_no]').type('20')
        cy.get('input[data-key=flat_no]').type('20')
        cy.get('input[data-key=city]').type('1111') //  numbers 
        cy.get('input[data-key=post_code]').type('40-499')
        cy.get('input[data-key=community]').type('Gmina')  //przyjmuje liczby
        cy.get('input[data-key=county]').type('Powiat')
        cy.get('input[data-key=district]').type('20')
        cy.get('input[data-key=country]').type('20')
        cy.get('input[data-key=email]').type('exapmple@mail.com')
        cy.get('input[data-key=phone]').type('435200200')
        cy.get('input[data-key=country]').type('20')
        cy.get('input[data-key=employee]').first().check()
        cy.get('input[data-key=profession]').eq(1).check()
            .should('have.value', 'rcaid_30')
        cy.get('input[data-key=profession_ext]').type('Inny zawód')
        
        cy.get('textarea[data-key=workplace]')
            .type('Miejsce pracy')
        cy.get('input[data-key=emigrant]').first().check()
        cy.get('input[data-key=homeless]').first().check()
        cy.get('input[data-key=disabled_person]').first().check()
        cy.get('input[data-key=one_worker]').first().check()
        cy.get('input[data-key=children]').first().check()
        cy.get('input[data-key=one_person]').first().check()
        cy.get('input[data-key=unfarovalbe_situation]').first().check()
        cy.get("[type='submit']").click()
        cy.url().should('include', 'http://serwer1419259.home.pl/tester/index.php/site/form/52')
        cy.get('.text-center').contains('DZIĘKUJEMY').should('not.be.visible')
        cy.get('.text-center').contains('Formularz został poprawnie zapisany.').should('not.be.visible')
        cy.get('.text-center').contains('Uzupełnij wszystkie pola: brakujące pole - ').should('be.visible')
        cy.get('.text-center').contains('Miejscowość').should('be.visible')
    })
})
