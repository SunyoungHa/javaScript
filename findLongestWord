//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.


//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

// /  input:string
//  output : number
 

function findLongestWord(str) {
  var splitted = str.split(' ');
  var word = '';
  for(var i = 0; i < splitted.length; i++){
    if(splitted[i].length > word){
    word = splitted[i].length;
     }
  }
  return word;
}


var result1 = findLongestWord("The quick brown fox jumped over the lazy dog");
var result2 = findLongestWord("The quick brown fox jumped over the lazy dog");
var result3 = findLongestWord("May the force be with you");
var result4 = findLongestWord("The quick brown fox jumped over the lazy dog"); 
var result5 = findLongestWord("Google do a barrel roll");
var result6 = findLongestWord("What is the average airspeed velocity of an unladen swallow") ;
var result7 = findLongestWord("What if we try a super-long word such as otorhinolaryngology") ;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);

