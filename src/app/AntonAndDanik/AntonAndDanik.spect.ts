import { AntonAndDanik } from './AntonAndDanik';

describe('AntonAndDanik', () => {
  var n;
  var s;

  it('Shoul return the name "Anton"', () => {
    n = 6;
    s = "ADAAAA"
    expect(AntonAndDanik(n,s)).toBe("Anton");
  });
  it('Shoul return the name "Danik"', () => {
    n = 7;
    s = "DDDAADA"
    expect(AntonAndDanik(n,s)).toBe("Danik");
  });
  it('Shoul return the name "Friendship"', () => {
    n = 6;
    s = "DADADA"
    expect(AntonAndDanik(n,s)).toBe("Friendship");
  });
})
