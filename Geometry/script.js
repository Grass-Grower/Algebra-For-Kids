document.getElementById("header").innerHTML = "Algebra 1";
fetch("instructions.txt")
.then(x => x.text())
.then(y => document.getElementById("main").innerHTML = y);
