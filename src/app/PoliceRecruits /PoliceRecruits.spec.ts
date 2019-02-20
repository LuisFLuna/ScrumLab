import {PoliceRecruits} from './PoliceRecruits';

describe('PoliceRecruits', () =>{
    it('should return 2 if the input is input1', () => {
        var n = 3;
        var nums:number[] = [-1,-1,1];
        expect(PoliceRecruits(n,nums)).toBe(2);
    });

    it('should return 1 if the input is input2', () => {
        var n = 8;
        var nums:number[] = [1, -1, 1, -1, -1, 1, 1, 1];
        expect(PoliceRecruits(n,nums)).toBe(1);
    });

    it('should return 8 if the input is input2', () => {
        var n = 11;
        var nums:number[] = [-1, -1, 2, -1, -1, -1, -1, -1, -1, -1, -1];
        expect(PoliceRecruits(n,nums)).toBe(8);
    });
})