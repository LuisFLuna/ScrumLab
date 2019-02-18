import {stones} from './stones';

describe('stones', () => {
	
	it('It should receive an int and a string', () => {
		expect(stones(3,"RGB")).toBe(0);
	})

	it('It should read the sequence RRG and return a 1', () => {
		expect(stones(3,"RRG")).toBe(1);
	})

	it('It should read the sequence RBG and return a 0', () => {
		expect(stones(3, "RBG")).toBe(0);
	})

	it('It should read the sequence RRRRR and return a 4', () => {
		expect(stones(5, "RRRRR")).toBe(4);
	})

	it('It should read the sequence BRBG and return a 0', () => {
		expect(stones(4, "BRBG")).toBe(0);
	})

});