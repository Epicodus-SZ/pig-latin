//business logic
var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

//UI Logic
$(document).ready(function() {

  $("form#pigForm").submit(function(event) {
    event.preventDefault();

  //get the string from the input:
    var sentence = $("input#inputSentence").val();


    // break the string into an array of Words
    // convert each word according to our pig latin rules

    // display the results in HTML:
    $("#result").text(sentence);
  });


});
