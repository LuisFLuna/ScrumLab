export function word(w:String){

    var firstLetter = w.charAt(0);
    var uppercase = firstLetter.toUpperCase();

    var restWord = w.slice(1);

    return uppercase + restWord;
  }