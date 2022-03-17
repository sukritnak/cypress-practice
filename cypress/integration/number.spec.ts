describe('Number', () => {
  describe('Addition', () => {
    context('When all operands are numbers', () => {
      it('adds two positive numbers correctly', () => {
        expect(1 + 1).to.eq(2);
        expect(1 + 3).to.eq(4);
      });

      it('adds two negative numbers correctly', () => {
        expect(-1 + -1).to.eq(-2);
        expect(-2 + -3).to.eq(-5);
      });
    });
    context('When some operands are numbers', () => {
      it('adds positive numbers and string correctly', () => {
        expect(1 + '1').to.eq('11');
        expect(1 + '3').to.eq('13');
      });

      it('adds negative numbers and string correctly', () => {
        expect(-1 + '-1').to.eq('-1-1');
        expect(-1 + '-3').to.eq('-1-3');
      });
    });
  });

  describe('Multiplication', () => {
    it('multipies two positive numbers correctly', () => {
      expect(1 * 1).to.eq(1);
      expect(2 * 3).to.eq(6);
    });

    it('multipies two negative numbers correctly', () => {
      expect(-1 * -1).to.eq(1);
      expect(-2 * -3).to.eq(6);
    });
  });
});
