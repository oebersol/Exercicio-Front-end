/// <reference types="cypress"/>

import page_objects from '../support/page_objects.js'

const usuarios = require('../fixtures/usuarios.json')

describe('Login', () =>  {

    beforeEach('Acessando página inicial', ()=>{
        cy.visit('/')
        cy.reload({ cache: false });

    })


    it('Login com sucesso', () =>{ 

        page_objects.login(usuarios.valid_user, usuarios.password);

        cy.get(page_objects.elementos.classe_logado).should('exist')


    })

    it('Tentativa de login sem informar o usuário', () =>{

         cy.get(page_objects.elementos.campo_senha).type(usuarios.password)

         cy.get(page_objects.elementos.botao_login).click()

         cy.get(page_objects.elementos.campo_erro).should('be.visible')
         .and('contain.text', 'Epic sadface: Username is required');
        
    })

})