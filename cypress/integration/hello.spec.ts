it('contains Bebel Coder in the page', () => {
  cy.visit('https://www.babelcoder.com/');
  cy.contains('Babel Coder');
});
