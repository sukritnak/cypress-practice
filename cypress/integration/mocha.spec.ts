describe('Mocha', () => {
  describe('Hooks', () => {
    before(() => {
      console.log('Mocha hook: before, beforeEach, after and afterEach');
      console.log('Before All for all test case start');
    });

    beforeEach(() => {
      console.log('Before Each for each test case start');
    });

    afterEach(() => {
      console.log('After Each for each test case start');
    });

    after(() => {
      console.log('After All for all test case start');
    });

    it('calcultes 1 + 1 correctly', () => {
      console.log('1+1');
      expect(1 + 1).to.eq(2);
    });

    it('calculate 1+2 correctly', () => {
      console.log('1+2');
      expect(1 + 2).to.eq(3);
    });
  });

  describe('Assetions from chai', () => {
    it('handles assertions correctly', () => {
      expect(1 + 1).to.eq(2);
      expect('hello').to.be.a('string');
      expect([1, 2]).to.be.an('array'); // an by a e i o u
      expect('hello').to.include('hell');
      expect({ name: 'pla' }).to.have.property('name');
      expect({ age: 24 }).to.deep.eq({ age: 24 });
      expect([]).to.be.empty;
      expect([1, 2, 3]).to.have.lengthOf(3);

      cy.wrap(1 + 1).should('eq', 2);
      cy.wrap('hello').should('be.a', 'string');
      cy.wrap({ name: 'pla' }).should('have.property', 'name');
      cy.wrap([]).should('be.empty');
    });
  });

  describe('jQuery Selectors', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:3000/cypress/selectors');
    });

    it('select element correctly', () => {
      cy.get('#outlined').should('contain', 'Outlined Button');
      cy.get('.MuiButton-containedPrimary').should(
        'contain',
        'Contained Button'
      );
      cy.get('button[type="submit"]').should('contain', 'Contained Button');
      cy.get('.text-group p:first-child').should('contain', 'H4');
      cy.get('.text-group p:nth-child(2)').should('contain', 'Body');
      cy.get('[data-testid="subtitle"]').should('contain', 'Subtitle');
      cy.get('.text-group p:last-child').should('contain', 'Caption');
    });

    it('verifies selectors with chai jQuery correctly', () => {
      cy.get('#outlined').should('contain', 'Outlined Button');
      /// ถ้า have text ค้องใส่เต็ม
      cy.get('#outlined').should('have.text', 'Outlined Button (#outlined)');
      cy.get('button[type="submit"]').should('have.attr', 'type', 'submit');
      cy.get('#outlined').should('be.visible');
      cy.get('#outlined').should('be.not.hidden');
      cy.get('#invisible').should('be.hidden');
    });
  });
});
