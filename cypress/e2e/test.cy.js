import { positiveCases, negativeCases } from '../support/placeOrder.js'

describe('Verify Place Order Screen - Positive Scenarios', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/web.html')
  })

  it('TC-01 Verify account information', () => {
    positiveCases.verifyAccountInformation()
  })

  it('TC-02 Verify default order form state', () => {
    positiveCases.verifyDefaultOrderFormState()
  })

  it('TC-03 Verify user can input order information', () => {
    positiveCases.verifyUserCanInputOrderInformation()
  })

  it('TC-04 Verify order form submission', () => {
    positiveCases.verifyOrderFormSubmission()
  })

  it('TC-05 Verify clear order form', () => {
    positiveCases.verifyClearOrderForm()
  })

})

describe('Verify Place Order Screen - Negative Scenarios', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/web.html')
  })

  it('TC-06 Submit order with empty fields', () => {
    negativeCases.submitOrderWithEmptyFields()
  })

  it('TC-07 Submit without stock symbol', () => {
    negativeCases.submitWithoutStockSymbol()
  })

})
