// cypress/integration/seu-teste.spec.js
import loginData from "../support/loginData";

describe("Teste Cypress com uso de Test Data", () => {
  beforeEach(() => {
    // Antes de cada teste, visite o site das Americanas
    cy.visit("https://www.magazineluiza.com.br/");
  });

  it("Realiza uma busca por um produto e intercepta o GET", () => {
    cy.intercept("GET", "**");

    cy.get('[data-testid="input-search"]').type(loginData.item, { delay: 0 });
    cy.get('[data-testid="search-submit"]').click();

    // Verifique se a página de resultados de pesquisa contém produtos e clique no primeiro
    cy.get(':nth-child(1) > [data-testid="product-card-container"]').click();

    // Adicionar no carrinho
    cy.get(':nth-child(2) > [data-testid="bagButton"]').should("exist").click();

    // Valide o produto no carrinho (você pode adicionar verificações aqui)
    cy.get('.BasketItem').should("exist");
  });
});