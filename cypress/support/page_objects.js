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
    campo_erro: '.message-error',
    nome_erro:'#firstname-error',
    sobrenome_erro:'#lastname-error',
    email_erro:'#email_address-error',
    senha_erro:'#password-error',
    confirmacao_senha_erro:'#password-confirmation-error',
    email_recupera: '#email_address',
    sucesso_recupera: '.message-success'
    
};

// implementando
const mensagens = {
    //Cadastro
    cadastro_sucesso:'Thank you for registering with Main Website Store.',
    //login
    sem_email_login: 'This is a required field.-button',
    sem_senha_login: 'This is a required field.-button',

    //cadastro
    sem_nome_cadastro:'#',
    sem_sobrenome_cadastro:'#',
    sem_email_cadastro:'#',
    sem_nome_cadastro:'#',
    sem_senha_cadastro:'This is a required field.',
    sem_confirma_senha_cadastro:'#',
    usuario_invalido:'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.',
    usuario_senha_incorretos:'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.',

    
};


const login = (user, password) => {
    cy.get('.panel > .header > .link > a').click()
    cy.get(elementos.campo_email_login).type(user);
    cy.get(elementos.campo_senha_login).type(password);
    cy.get(elementos.botao_login).click();
};

const recupera_senha = (user, password) => {
    cy.get('.panel > .header > .link > a').click()
    cy.contains('Forgot Your Password?').click();
    cy.get(elementos.email_recupera).type(user);
    cy.contains('Reset My Password').click();
};

export default {
    elementos,
    mensagens,
    recupera_senha,
    login
};
