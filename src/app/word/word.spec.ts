import {word} from './word';

describe('word', () =>{
    it('should return the word in LowerCase if there is less Uppercase letters than LowerCase', () => {
        expect(word('HoUse')).toBe('house');
    });
    it('should return the word in LowerCase if there is equal Uppercase letters than LowerCase', () => {
        expect(word('maTRIx')).toBe('matrix');
    });
    it('should return the word in Uppercase if there is more Uppercase letters than LowerCase', () => {
        expect(word('ViP')).toBe('VIP');
    });
})
