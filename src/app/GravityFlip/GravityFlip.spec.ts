import { GravityFlip } from './GravityFlip';

describe('GravityFlip', () => {
  var n;
  var a;

  it('It should return "1 2 2 3" for "3 2 1 2"', () => {
    n = 4;
    a = [3, 2, 1, 2];
    expect(GravityFlip(n,a)).toBe("1 2 2 3 ");
  });
  it('It should return "2 3 8" for "2 3 8"', () => {
    n = 3;
    a = [2, 3, 8];
    expect(GravityFlip(n,a)).toBe("2 3 8 ");
  });

})
