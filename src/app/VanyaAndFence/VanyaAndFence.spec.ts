import { VanyaAndFence } from './VanyaAndFence';

describe('VanyaAndFence', () => {
  var n;
  var h;
  var a;

  it('It should return "4" for n.Friends = "3", h.Height of the fence "7" and the heights.friends "4 5 14"', () => {
    n = 3;
    h = 7;
    a = [4, 5, 14];
    expect(VanyaAndFence(n,h,a)).toBe("The minimum possible valid width of the road is 4");
  });
  it('It should return "6" for n.Friends = "6", h.Height of the fence "1" and the heights.friends "1 1 1 1 1 1"', () => {
    n = 6;
    h = 1;
    a = [1, 1, 1, 1, 1, 1];
    expect(VanyaAndFence(n,h,a)).toBe("The minimum possible valid width of the road is 6");
  });
  it('It should return "11" for n.Friends = "6", h.Height of the fence "5" and the heights.friends "7 6 8 9 10 5"', () => {
    n = 6;
    h = 5;
    a = [7, 6, 8, 9, 10, 5];
    expect(VanyaAndFence(n,h,a)).toBe("The minimum possible valid width of the road is 11");
  });

  it('It should return "Invalid Condition" for n.Friends != 1 ≤ n ≤ 1000, h.Height of the fence != 1 ≤ h ≤ 1000', () => {
    n = 0;
    h = 1001;
    a = [7, 6, 8, 9, 10, 5];
    expect(VanyaAndFence(n,h,a)).toBe("Invalid Condition");
  });

})
