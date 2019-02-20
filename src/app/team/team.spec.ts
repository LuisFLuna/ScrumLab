import {team} from './team';

describe('team', () =>{
    var input1 = '3\n1 1 0\n1 1 1\n1 0 0';
    var input2 = '2\n1 0 0\n0 1 1';
    it('should return 2 if the input is input1', () => {
        const result = team(input1);
        expect(result).toBe(2);
    });
    it('should return 1 if the input is input2', () => {
        const result = team(input2);
        expect(result).toBe(1);
    });
})
