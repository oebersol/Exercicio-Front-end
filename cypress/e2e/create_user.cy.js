/// <reference types="cypress"/>

import cadastro_usuario_page from "../support/usuarios_cadastro.js"

import { faker } from '@faker-js/faker'



describe('Cadastro de usuário', () => {

    const nome_fake = faker.person.firstName()
    const sobrenome_fake = faker.person.lastName()
    const email_fake = faker.internet.email()
    const senha_fake = 'pwd123@Bola'
    const senha_invalida = '111' 


    beforeEach('Acessar de cadastro de usuário', ()=>{
        cadastro_usuario_page.acessarCadastroUsuario()
    })

    it.only('Cadastro com sucesso ', () => {
        cadastro_usuario_page.fillName(nome_fake)
        cadastro_usuario_page.fillLastName(sobrenome_fake)


        cadastro_usuario_page.fillEmail(email_fake)
        cadastro_usuario_page.fillPassword(senha_fake)
        cadastro_usuario_page.fillConfirmPass(senha_fake)

        cadastro_usuario_page.saveRegister()

        cadastro_usuario_page.successRegister('Thank you for registering with Main Website Store.')


    })

    it('Campo Email vazio', () => {



    })

    it('Campo Email inválido', () => {



    })

    it('Campo Senha vazio', () => {



    })

    it('Campo Senha inválido', () => {



    })

    it('Campo Nome vazio', () => {


    })


})