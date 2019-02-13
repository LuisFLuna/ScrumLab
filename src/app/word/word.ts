export function word(palabra){

  let countUpperCaseLetter = 0;
  let countLowerCaseLetter = 0;

  for(let i = 0; i < palabra.length; i++){
    if (palabra.charAt(i) == palabra.charAt(i).toUpperCase()) {
      countUpperCaseLetter++;
    }
    if (palabra.charAt(i) == palabra.charAt(i).toLowerCase()){
      countLowerCaseLetter++;
    }
  }
  
  return ((countUpperCaseLetter > countLowerCaseLetter) ? palabra.toUpperCase() : palabra.toLowerCase());
}
