document.getElementById("header").innerHTML = "Algebra For Kids";

fetch("home.txt")
.then(x => x.text())
.then(y => document.getElementById("main").innerHTML = y);

