 var Tips = [
   'Tip #1',
   'Tip #2',
   'Tip #3',
   'Tip #4',
   'Tip #5'
 ]

function newTip() { 
  var randomNumber = Math.floor(Math.random() * (Tips.length));
  document.getElementById('tipDisplay').innerHTML = Tips[randomNumber];
}

function notifyMe() {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification!");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    var randomNumber = Math.floor(Math.random() * (Tips.length));
    var notification = new Notification(randomNumber);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }
}