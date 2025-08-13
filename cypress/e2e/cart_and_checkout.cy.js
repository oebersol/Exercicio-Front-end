/// <reference types="cypress"/>

const usuarios = require('../fixtures/usuarios.json')

import page_objects from '../support/page_objects.js'


describe('Adicionando e removendo do carrinho', ()=>{

    beforeEach('Fazendo login', ()=>{
        cy.visit('/')

        page_objects.login(usuarios.valid_user, usuarios.password);

        cy.get(page_objects.elementos.classe_logado).should('exist')
    
            
    })


    it('Adicionando ao carrinho e fazendo checkout', () =>{
        cy.get('.home-main > .content').click()

        cy.get('#product-item-info_4 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()

        cy.get('#product-addtocart-button').click()
        
        //Verificando produto foi adicionado ao carrinho 
        cy.get('.message-success', {timeout: 10000}).should('be.visible')

        cy.get('.showcart').click()

        cy.get('#top-cart-btn-checkout').click()

        //Verificando que chegamos no tela de checkout
        cy.get('.shipping-address-items').should('be.visible')

        cy.contains('Fixed').click();

        cy.get('.button').click()

        cy.contains('Place Order').click();
        
        //Visualizando mensagem de sucesso
        cy.get('.checkout-success').should('be.visible')





    })
    

})
