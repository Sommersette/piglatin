$(function(){
  var inputText = $("input#textbox").val();
  var alphaSplit = []
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var alphaSplit = alphabet.split("");
  console.log(alphaSplit);

});



//
// for (char c = 'a'; c <= 'z'; c++) {
//     alphabet[c - 'a'] = c;
// }
