
var replaced = $("body").html().replace(/bae/g,'P(A|B) = {P(B|A) P(A)}/{P(B)}');
$("body").html(replaced);



var replacedone = $("head").html().replace(/bae/g,'P(A|B) = {P(B|A) P(A)}/{P(B)}');
$("head").html(replacedone);

var replacedtwo = $("title").html().replace(/bae/g,'P(A|B) = {P(B|A) P(A)}/{P(B)}');
$("title").html(replacedtwo);