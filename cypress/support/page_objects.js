/// <reference types="cypress"/>

const elementos = {
    btn_login: '#login-button',
    btn_criar: '.action_submit_primary',
    campo_name: '#firstname',
    campo_sobrenome: '#lastname',
    campo_email: '#email_address',
    campo_senha: '#password',
    campo_email_login: '#email',
    campo_senha_login: '#pass',
    senha_confirmcao: '#password-confirmation',
    botao_login: '#send2',
    botao_cadastro: '#form-validate > .actions-toolbar > div.primary',
    classe_logado: '.logged-in',
    campo_erro: '.login_container',
    nome_erro:'#firstname-error',
    sobrenome_erro:'#lastname-error',
    email_erro:'#email_address-error',
    senha_erro:'#password-error',
    confirmacao_senha_erro:'#password-confirmation-error',
    
};


const login = (user, password) => {
    cy.get('.panel > .header > .link > a').click()
    cy.get(elementos.campo_email_login).type(user);
    cy.get(elementos.campo_senha_login).type(password);
    cy.get(elementos.botao_login).click();
};

export default {
    elementos,
    login
};
