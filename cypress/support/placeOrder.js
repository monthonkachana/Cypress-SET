export const positiveCases = {

  verifyAccountInformation() {
    cy.get('#cash-amount').should('have.text', '100000')
    cy.get('[data-testid="shares-AAPL"]').should('have.text', '100')
  },

  verifyDefaultOrderFormState() {
    cy.get('[data-testid="radio-buy"]').should('be.checked')
    cy.get('[data-testid="radio-sell"]').should('not.be.checked')
  },

  verifyUserCanInputOrderInformation() {
    cy.get('[data-testid="input-symbol"]').type('AAPL')
    cy.get('[data-testid="input-price"]').type('100')
    cy.get('[data-testid="input-quantity"]').type('10')

    cy.get('[data-testid="input-symbol"]').should('have.value', 'AAPL')
    cy.get('[data-testid="input-price"]').should('have.value', '100')
    cy.get('[data-testid="input-quantity"]').should('have.value', '10')
  },

  verifyOrderFormSubmission() {
    cy.get('[data-testid="input-symbol"]').type('AAPL')
    cy.get('[data-testid="input-price"]').type('100')
    cy.get('[data-testid="input-quantity"]').type('10')

    cy.get('[data-testid="btn-submit"]').click()

    cy.url().should('include', 'symbol=AAPL')
    cy.url().should('include', 'price=100')
    cy.url().should('include', 'quantity=10')
  },

  verifyClearOrderForm() {
    cy.get('[data-testid="input-symbol"]').type('AAPL')
    cy.get('[data-testid="input-price"]').type('100')
    cy.get('[data-testid="input-quantity"]').type('10')

    cy.get('[data-testid="btn-clear"]').click()

    cy.get('[data-testid="input-symbol"]').should('have.value', '')
    cy.get('[data-testid="input-price"]').should('have.value', '')
    cy.get('[data-testid="input-quantity"]').should('have.value', '')

    cy.get('[data-testid="radio-buy"]').should('be.checked')
  }
}

export const negativeCases = {

  submitOrderWithEmptyFields() {
    cy.get('[data-testid="btn-submit"]').click()

    cy.url().should('include', 'symbol=')
    cy.url().should('include', 'price=')
    cy.url().should('include', 'quantity=')
  },

  submitWithoutStockSymbol() {
    cy.get('[data-testid="input-price"]').type('100')
    cy.get('[data-testid="input-quantity"]').type('10')

    cy.get('[data-testid="btn-submit"]').click()

    cy.url().should('include', 'symbol=')
    cy.url().should('include', 'price=100')
    cy.url().should('include', 'quantity=10')
  }
}
