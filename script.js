 var Tips = [
   'Avoid touching eyes, nose and mouth',
   'Practice respiratory hygiene',
   'If you have fever, cough and difficulty breathing, seek medical care early',
   'Stay informed and follow advice given by your healthcare provider ',
   'Strengthen health screening for cafeteria staff and their close contacts',
   'Ensure cafeteria staff and their close contacts practice strict hygiene',
   'Stop handshaking – use other noncontact methods of greeting',
   'Clean hands at the door and at regular intervals',
   'Create habits and reminders to avoid touching their faces and cover coughs and sneezes',
   'Disinfect surfaces like doorknobs, tables, desks, and handrails regularly',
   'Increase ventilation by opening windows or adjusting air conditioning',
   'Adjust after-school arrangements to avoid mixing between classes and grades',
   'When possible, hold classes outdoors or in open, well-ventilated spaces',
   'Strengthen health screening for cafeteria staff and their close contacts',
   'Create habits and reminders to avoid touching their face and cover coughs and sneezes',
   'Disinfect surfaces like doorknobs, tables, and handrails regularly',
   'Increase ventilation by opening windows or adjusting air conditioning',
   'If possible, provide a protected space for vulnerable household members',
   'Ensure all utensils and surfaces are cleaned regularly',
   'Give sick members their own room if possible, and keep the door closed',
   'Have only one roommate/family member to care for a sick roommate/family member',
   'Keep windows open when possible in cars'
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
    var notification = new Notification(Tips["randomNumber"]);
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
}, 30000);