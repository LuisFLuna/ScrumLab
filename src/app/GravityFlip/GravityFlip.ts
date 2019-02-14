export function GravityFlip(n, arr){

  var arreglo="";

  for (var i = 0; i < n ; i++) {
    for(var j = 0 ; j < n - i - 1; j++){ // this was missing
    if (arr[j] > arr[j + 1]) {
      // swap
      var temp = arr[j];
      arr[j] = arr[j+1];
      arr[j + 1] = temp;
    }
   }
  }

  for(var i = 0 ; i < n ; i++){
    arreglo += arr[i] + " ";
  }


  return arreglo;
}
