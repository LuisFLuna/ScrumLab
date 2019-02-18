import {petya1} from './petya1';

describe('petya1', () => {
	
	it('It should recieve 2 strings', () => {
		expect(petya1("hola","hola")).toBe(0);
	})

	it('It should compare 2 Strings', () => {
		expect(petya1("Hola","holb")).toBe(-1);
	})
	it('It should compare 2 strings, if they are the same then -> 0', () => {
		expect(petya1("Hola", "Hola")).toBe(0);
	})
	it('It should compare 2 strings, if the first one is bigger then -> 1', () => {
		expect(petya1("Holb", "Hola")).toBe(1);
	})
	it('It should compare 2 strings, if the second one is bigger then -> -1', () => {
		expect(petya1("Hola", "Holb")).toBe(-1);
	})
	it('It should compare 2 strings without caring for the case of the words, if they are the same then -> 0', () => {
		expect(petya1("Hola", "hola")).toBe(0);
	})
	it('It should compare 2 strings  without caring for the case of the words, if the first one is bigger then -> 1', () => {
		expect(petya1("Holb", "hola")).toBe(1);
	})
	it('It should compare 2 strings  without caring for the case of the words, if the second one is bigger then -> -1', () => {
		expect(petya1("hola", "Holb")).toBe(-1);
	})

});