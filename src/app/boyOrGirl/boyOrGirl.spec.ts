import {boy} from './boy';

describe('boy', () =>{
    it('The number of characters is odd', () => {
        expect(boy('wjmzbmr')).toBe('CHAT WITH HER!');
    });
    it('The number of characters is not odd', () => {
        expect(boy('xiaodao')).toBe('IGNORE HIM!');
    });
    it('The number of charachters is odd', () => {
        expect(boy('sevenkplus')).toBe('CHAT WITH HER!');
    });
})
