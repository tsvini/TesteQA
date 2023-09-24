// cypress/integration/seu-teste.spec.js
import loginData from "../support/loginData";

describe("Teste Cypress com uso de Test Data", () => {
  beforeEach(() => {
    // Visite o site da Magazine Luiza
    cy.visit(loginData.site);
  });
  it("Fazer login e realizar uma busca por um produto", () => {
    // Use os elementos de loginData
    cy.get('#LoginBox-form [id^="input-login-"]').should('be.visible').type(loginData.nome, { delay: 0 });
    cy.get('#LoginBox-form [id^="input-password-"]').should('be.visible').type(loginData.senha, { delay: 0 });
    cy.get(loginData.Botaologin).click();

    // Verifique se a página foi redirecionada para https://www.magazineluiza.com.br/
    cy.url().should('eq', 'https://www.magazineluiza.com.br/');

    // Insira o termo de pesquisa na barra de busca e clique para pesquisar
    cy.get('[data-testid="input-search"]').type(loginData.item, { delay: 0 });
    cy.get('[data-testid="search-submit"]').click();

    // Verifique se a página de resultados de pesquisa contém produtos e clique no primeiro
    cy.get(':nth-child(1) > [data-testid="product-card-container"]').click();

    // Adicionar no carrinho
    cy.get(loginData.botaoCarrinho).should("exist").click();

    // Validar o produto no carrinho
    cy.get('.BasketItem').should("exist");
  });
});