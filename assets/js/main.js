
var items = [
  "You have power over your mind, not outside events. Realize this, and you will find strength. __ Marcus Aurelius",
  "You take your life in your own hands, and what happens? A terrible thing, no one to blame. __ Erica Jong",
];


document.getElementById("motivation").innerHTML = items[Math.floor(Math.random()*items.length)];