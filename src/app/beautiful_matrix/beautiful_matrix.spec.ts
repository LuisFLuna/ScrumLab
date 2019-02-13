import {beautiful_matrix} from './beautiful_matrix';

describe('beautiful_matrix', () =>{
    var input1 = '0 0 0 0 0\n0 0 0 0 1\n0 0 0 0 0\n0 0 0 0 0\n0 0 0 0 0';
    var input2 = '0 0 0 0 0\n0 0 0 0 0\n0 1 0 0 0\n0 0 0 0 0\n0 0 0 0 0';
    it('should return 3 if the input is input1', () => {
        const result = beautiful_matrix(input1);
        expect(result).toBe(3);
    });
    it('should return 1 if the input is input2', () => {
        const result = beautiful_matrix(input2);
        expect(result).toBe(1);
    });
})
