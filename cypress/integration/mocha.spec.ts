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
});
