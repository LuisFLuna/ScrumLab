export function VanyaAndFence(number,height,array){

  var arreglo="The minimum possible valid width of the road is";
  var ans = 0;

  if(number >= 1 && number <= 1000 || height >= 1 && height <= 1000){
    for(var i = 0; i < number; i++){
      if(array[i]>height){
        ans += 2;
      }else{
        ans++;
      }
    }
    return "The minimum possible valid width of the road is " + ans;
  }else{
    return "Invalid Condition";
  }


}
