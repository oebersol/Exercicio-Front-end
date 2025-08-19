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

    it('Tentativa de login com usuário inexistente', () =>{

        page_objects.login(usuarios.invalid_user, usuarios.password);

        cy.get(page_objects.elementos.campo_erro).should('be.visible')
         .and('contain.text', page_objects.mensagens.usuario_invalido);
        
    })

    it('Tentativa de login com senha inexistente', () =>{

        page_objects.login(usuarios.valid_user, usuarios.invalid_pass);

        cy.get(page_objects.elementos.campo_erro).should('be.visible')
         .and('contain.text', page_objects.mensagens.usuario_invalido);
        
    })



it.only('Recuperação de senha', () => {

    // 1️⃣ Mock do POST de recuperação de senha antes de qualquer ação
    cy.intercept('POST', '**/customer/account/forgotpasswordpost**', {
        statusCode: 200,
        body: {
            success: true,
            message:
                'If there is an account associated with roni_cost@example.com you will receive an email with a link to reset your password.'
        }
    }).as('mockForgot');

    // 2️⃣ Mock do CAPTCHA
    cy.intercept('GET', '**/Magento_Captcha/template/checkout/captcha.html', {
        statusCode: 200,
        body: '<div id="captcha"></div>'
    }).as('mockCaptcha');

    // 3️⃣ Acessa a página de recuperação de senha (se o page_objects não faz cy.visit)
    cy.visit('/customer/account/forgotpassword');

    // 4️⃣ Executa o fluxo do page object
    page_objects.recupera_senha(usuarios.valid_user);

    // 5️⃣ Espera os mocks serem chamados
    cy.wait('@mockCaptcha');
    cy.wait('@mockForgot');

    // 6️⃣ Valida a mensagem de sucesso
    cy.get(page_objects.elementos.sucesso_recupera)
        .should('be.visible')
        .and('contain.text',
            'If there is an account associated with roni_cost@example.com you will receive an email with a link to reset your password.'
        );
});




})