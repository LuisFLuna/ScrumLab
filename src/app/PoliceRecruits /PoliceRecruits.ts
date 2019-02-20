export function PoliceRecruits(n,array){
    var sum = 0;
    var neg = 0;
    var input = 0; 
    
    for (let index = 0; index < n; index++) {
        input = array[index];
        if (input > 0) {
            sum += input;
        }else if(input < 0){
            if(sum > 0){
                sum--;
            }else{
                neg++;
            }
        }
    }
    return(neg);
}