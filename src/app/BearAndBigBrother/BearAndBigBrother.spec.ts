import { BearAndBigBrother } from './BearAndBigBrother';

describe('BearAndBigBrother', () => {
  var limak;
  var bob;

  it('It should return Limak is already heavier than Bob if Limak > Bob', () => {
    limak = 10;
    bob = 9;
    expect(BearAndBigBrother(limak, bob)).toBe("Limak is already heavier than Bob!");
  });
  it('It should return "2" for limak = 4 and bob = 7', () => {
    limak = 4;
    bob = 7;
    expect(BearAndBigBrother(limak, bob)).toBe(2);
  });
  it('It should return "3" for limak = 4 and bob = 9', () => {
    limak = 4;
    bob = 9;
    expect(BearAndBigBrother(limak, bob)).toBe(3);
  });
  it('It should return "1" if the weights are the same', () => {
    limak = 1;
    bob = 1;
    expect(BearAndBigBrother(limak, bob)).toBe(1);
  });


})
