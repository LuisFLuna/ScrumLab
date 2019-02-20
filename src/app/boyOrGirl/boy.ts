export function boy(word){
  let array = [];
  let flag = false;

  array.push(word.charAt(0));

  for(let i = 1; i < word.length; i++){
    for(let j = 0 ;j < array.length; j++){
      if(word.charAt(i) == array[j]){
        flag = true;
      }
    }
    (flag == false) ? array.push(word.charAt(i)) : flag = false;
  }

  return (((array.length % 2) == 0) ? 'CHAT WITH HER!' : 'IGNORE HIM!');

}
