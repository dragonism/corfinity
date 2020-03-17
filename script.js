 var Tips = [
   'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.',
   'Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.',
   'Avoid touching eyes, nose and mouth',
   'Practice respiratory hygiene',
   'If you have fever, cough and difficulty breathing, seek medical care early',
   '',
   ''
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
    var notification = new Notification(Tips[randomNumber]);
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

window.setInterval(function(){
  notifyMe();
}, 1800000);