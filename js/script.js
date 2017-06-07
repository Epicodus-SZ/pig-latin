// *********
//business logic
// ********
var vowels = ["a","e","i","o","u","y","A","E","I","O","U","Y"];

//function that splits up the string into words, and returns a pig latin sentence (that we call results)
var pigLatin = function(englishSentence){
  var words = englishSentence.split(" ");
  var results = ""; //this is the finished pig latin sentence
  words.forEach(function(word){
      results += convertWord(word)+" ";
  });
  return results;
}

//function that converts words into pig latin words
var convertWord = function(inputWord){
//Pig latin logic goes here
//Away
var pigWord = "";

//Spec #1: If the word starts with a vowel add WAY to end
if (isVowel(inputWord.charAt(0)) && (inputWord.charAt(0) != "y" || inputWord.charAt(0) != "Y" ) ) {

   pigWord = inputWord+"way"; //TBD more code here
}
else {
  //Words beginning with one or more consonants, moves all the first consecutive consonants to the end, and add an "ay" at the end|blow|owblay|
  var vowelLoc;
  for (count = 0; count < inputWord.length; count++) {
    console.log(count + " , " + inputWord.charAt(count), vowelLoc);
    if (isVowel(inputWord.charAt(count))){
      vowelLoc = count; // A variable to track vowel location

      if(inputWord.substr(vowelLoc-1,2)==="qu" || inputWord.substr(vowelLoc-1,2)==="QU" || inputWord.substr(vowelLoc-1,2)==="Qu" || inputWord.substr(vowelLoc-1,2)==="qU")
      {
        // we found a U or u, and a Q or q before it so
        // keep looping and look for the next vowel
        console.log("found a q and u together");
      }
      else {
        // this is slicing up the word from the vowel location and putting the stuff in front to the end of the word
        pigWord = inputWord.slice(vowelLoc,vowelLoc.length)+inputWord.slice(0,vowelLoc)+"ay";
        break; //this should break us out of the for loop once it finds the first vowel
      }

    }
    else {
      //no vowel in the word, just add ay to end
      pigWord = inputWord+"ay";
    }
  }

}
 return pigWord;
}

//function that tests a single character to see if its a vowel
var isVowel = function(inputLetter) {
  wordResults = false;
  for (index = 0; index < vowels.length; index++) {
    if (inputLetter === vowels[index]) {
      wordResults = true; //it is a vowel
    }
  }
  return wordResults;
}



//UI Logic
$(document).ready(function() {

  // creates an event listener on the form (which happens when you press the submit button)
  $("form#pigForm").submit(function(event) {
    event.preventDefault(); //supresses the DEFAULT submit action (but we replace that with our code)

    //creates a variable named sentence and asks jQuery to get the value of the string in the input with the Id of inputSentence.
    var sentence = $("input#inputSentence").val();

    // find the item id's as result in the DOM, and replace the text inside that tag. but what do we add there?  The results of calling the function pigLatin (and sending the sentence variable as a argument)
    $("#result").text(pigLatin(sentence));

  });


});
