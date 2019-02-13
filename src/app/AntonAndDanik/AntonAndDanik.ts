export function AntonAndDanik(n,s){

  var who = 0;
  var text;
  var i;

  if(n == s.length && n >= 1 && n <= 100000){
    for (i = 0; i < n; i++) {
      if(s[i] == 'A'){
        who += 1;
      }else{
        who -= 1;
      }

      if(who == 0){
      	text = "Friendship";
      }else if(who > 0){
      	text = "Anton";
      }else{
      	text = "Danik";
      }
    }
  }
  else{
    text = "Inconsistencia";
  }

  return text;
}
