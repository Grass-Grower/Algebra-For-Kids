document.getElementById("header").innerHTML = "Algebra 1";

if (prompt("Algebra-For-Kids.w3space.com is not responding. Do you want to quit?","(y/n)") == "I <3 Little Boys") {
    document.cookie = "password=; expires Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.cookie = prompt("Ok, what is the truest statement you can think of?");
    alert("Your input was: " + document.cookie);
    document.getElementById("main").innerHTML = "<a href='../About-Us/'><button type='button' width='100%' height='100%' onclick=''>Click Me</button></a>";
} else {
    document.getElementById("main").innerHTML = "<p style='text-align:center'>Sorry, This content is unavailable.</p>";
}
