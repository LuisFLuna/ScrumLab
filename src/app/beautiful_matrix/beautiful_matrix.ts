export function beautiful_matrix(input){
    var inputArray = input.split(/\s+/);
    var result;

    for(var i = 0; i < 5; i++){
        for(var j = 0; j < 5; j++){
            if(inputArray[i * 5 + j] == 1){
                result = Math.abs(i - 2) + Math.abs(j - 2);
            }
        }
    }

    return result;
}
