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
});
