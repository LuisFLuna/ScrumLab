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
  it('Shoul return "Inconsistencia" if parameter n == s.length is false', () => {
    n = 5;
    s = "DADADA"
    expect(AntonAndDanik(n,s)).toBe("Inconsistencia");
  });
  it('Shoul return "Inconsistencia" if parameter 1 <= n <= 100000 is false', () => {
    n = 100001;
    s = "DADADA"
    expect(AntonAndDanik(n,s)).toBe("Inconsistencia");
  });

})
