import { word } from './word';

describe('word', () => {

  it('It should return ApPLe for ApPLe', () => {
    var w = new String("ApPLe");
    expect(word(w)).toBe("ApPLe");
  });

  it('It should return Konjac for konjac', () => {
    var w = new String("konjac");
    expect(word(w)).toBe("Konjac");
  });

})