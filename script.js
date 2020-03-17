 var Tips = [
   'Tip #1',
   'Tip #2',
   'Tip #3',
   'Tip #4',
   'Tip #5'
 ]

function newQuote() { 
  var randomNumber = Math.floor(Math.random() * (tips.length));
  document.getElementById('quoteDisplay').innerHTML = Tips[randomNumber];
}