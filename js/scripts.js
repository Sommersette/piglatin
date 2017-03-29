$(function(){
  var inputText = $("input#textbox").val();
  var alphaSplit = []
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var alphaSplit = alphabet.split("");

  $("form#dialect").submit(function(event) {
    event.preventDefault();
    if (inputText.length === 1) {
      return true
    }  else {
      return false }
      $("#result").text("result");

    });


  });







//
// for (char c = 'a'; c <= 'z'; c++) {
//     alphabet[c - 'a'] = c;
// }
