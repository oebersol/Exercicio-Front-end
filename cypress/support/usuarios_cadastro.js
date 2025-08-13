/// <reference types="cypress"/>
import page_objects from '../support/page_objects.js'

export default {
    fillName(name) {
        cy.get(page_objects.elementos.campo_name).type(name)
    },

    fillLastName(lastName) {
        cy.get(page_objects.elementos.campo_sobrenome).type(lastName)
    },


    fillEmail(email) {
        cy.get(page_objects.elementos.campo_email).type(email)
    },

    fillPassword(pass) {
        cy.get(page_objects.elementos.campo_senha).type(pass)
    },

    fillConfirmPass(pass1) {
        cy.get(page_objects.elementos.senha_confirmcao).type(pass1)
    },

    saveRegister() {
        cy.get(page_objects.elementos.botao_cadastro).click()
    },

    successRegister(message) {
        cy.get('.message-success').should('include.text', message)

    },

    registerError(error) {
        cy.get('.errorLabel').should('be.visible')
        cy.get('.errorLabel').should('have.text', error)

    },

//Cadastro e login
    acessarCadastroUsuario(){
        cy.visit('https://magento.nublue.co.uk/customer/account/create')
        cy.get('#firstname').should('be.visible')
    },

    acessarLogin() {
        cy.visit('/').get('#top_header')
        cy.get('.fa-user').click()
        cy.get('.account_form > h3').should('have.text', 'Login')
    }

}


