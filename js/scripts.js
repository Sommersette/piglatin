$(function(){
  var alphaSplit = [];
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var alphaSplit = alphabet.split("");
  var vowelSplit = [];
  var vowels = "AEIOUaeiouYy";
  var vowelSplit = vowels.split("");
  var newWord = "";

  var allVowels = []

  $("form#dialect").submit(function(event) {
    event.preventDefault();

    var inputText = $("input#textbox").val();
    if (inputText.length === 1) {
      var result = inputText + "ay";
    } else {
      var result = "false"
    }

    for (var i = 0; i < inputText.length; i++) {
      if(vowelSplit.indexOf(inputText.charAt(i)) !== -1) {
        allVowels.push(i);
        alert(allVowels);

    //   }if (allVowels.charAt(0)) {
    //     inputText.append(inputText.charAt(0));
    //     inputText.shift(inputText.charAt(0));
      }
    }



    $("#result").text(result);



  });
});
