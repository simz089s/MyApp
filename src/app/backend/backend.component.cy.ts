/// <reference types="Cypress" />

import { BackendComponent } from './backend.component'

describe('BackendComponent', () => {
  it('should mount', () => {
    cy.mount(BackendComponent)
  })
})