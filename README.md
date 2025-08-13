# 🧪 Automação de Testes - Cadastro, Login e compras

Este projeto contém automações de testes E2E com Cypress para validar os fluxos de **Cadastro de Usuário**, **Login** e **Fluxo de compra com checkout**.
Também utiliza a biblioteca **@faker-js/faker** para gerar dados aleatórios (nome, e-mail, senha), evitando conflitos com dados já existentes.

---

## 📋 Requisitos

- [Node.js](https://nodejs.org/) **>= 20.12.1**
- [npm](https://www.npmjs.com/)
- Git instalado (opcional, se for clonar o repositório)

---

## 📦 Instalação
```bash
# Clonar o repositório
git clone https://github.com/oebersol/Exercicio-Front-end.git
cd Automação_Cypress/Automação-Front-end-cypress

# Instalar dependências do projeto (inclui Cypress e Faker)
npm install

# (Somente se o faker não vier no package.json)
npm install @faker-js/faker --save-dev
```

## ▶️ Executando os testes
### Modo interativo (abre a interface do Cypress)
```bash
npx cypress open
```
> Escolha o teste de **Cadastro de Usuário (create_user)**, **Login (login)** ou **Fluxo de compra com checkout (cart_and_checkout)** na interface.

### Modo headless (executa no terminal)
```bash
npx cypress run
```
> Para rodar apenas um arquivo:
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## 📂 Estrutura do projeto
```
cypress/
  e2e/
    create_user.cy.js                # Testes de cadastro de usuário
    login.cy.js                      # Testes de login
    cart_and_checkout.cy.js          # Testes de login

  fixtures/              # Massa de dados (JSON)
  support/               # Comandos customizados,page objetcs e configurações
package.json             # Dependências e scripts
```

## 🛠 Scripts úteis
Adicione no `package.json`:
```json
"scripts": {
  "test": "cypress run",
  "test:open": "cypress open",
  "test:create_user": "cypress run --spec 'cypress/e2e/create_user.cy.js'",
  "test:login": "cypress run --spec 'cypress/e2e/login.cy.js'"
  "test:cart_and_checkout": "cypress run --spec 'cypress/e2e/cart_and_checkout.cy.js'"

}
```
E rode:
```bash
npm run test:create_user
```

## 📚 Observações
- O **@faker-js/faker** é usado para gerar dados únicos a cada execução, evitando problemas com e-mails ou usuários já cadastrados.
- Antes de rodar os testes, verifique se a aplicação que será testada está **em execução** e com o **banco de dados pronto** para receber novos cadastros.
- Remova qualquer `.only` nos testes antes de enviar para o repositório, para garantir que todos sejam executados no pipeline.
