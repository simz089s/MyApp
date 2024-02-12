describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('app is running!')
  })
})

describe('myapp app', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should display correct title', () => {
    cy.get('h1').first().should('have.text', 'Default');
  });

  afterEach(() => {
    // Assert that there are no errors emitted from the browser
    cy.window().then((win) => {
      const logs = win.console.logs();
      expect(logs).not.to.contain(jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry));
    });
  });
});
