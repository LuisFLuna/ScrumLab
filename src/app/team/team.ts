export function team(input){
    var inputArray = input.split(/\s+/);
    var n = inputArray[0];

    var total = 0;
    var counter;

    for(var i = 0; i < n; i++){
        counter = 0;
        for(var j = 0; j < 3; j++){
            var isSure = inputArray[i * 3 + j + 1];
            if(isSure == 1){
                counter++;
            }
        }

        if(counter > 1){
            total++;
        }
    }

    return total;
}
