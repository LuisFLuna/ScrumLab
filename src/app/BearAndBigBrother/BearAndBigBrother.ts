export function BearAndBigBrother(limak, bob){

  var ans = 0;

  if(limak >= 1 && bob <= 10){

    if(limak > bob){
      return "Limak is already heavier than Bob!";
    }else{

      do{
        limak += limak*3;
        bob += bob*2;
        ans++;
      }while(limak<=bob)

      return ans;
    }
  }

}
