let a = prompt("Algebra-For-Kids.w3space.com is not responding. Do you 
want to quit? (y/n)");
const websites= ["","","","",""];

document.getElementById("header").innerHTML = "About Us";

let cookie = document.cookie;
cookie = cookie.slice(12,24);


if (a =="alex-smells") {
    if (cookie=="alex-smells") {
        document.getElementById("header").outerHTML = "";
        document.getElementById("main").outerHTML = "<iframe id='frame' 
src='https://mathfun18.dcmusic.ca/' width=' " + window.innerWidth + "' 
height='" + window.innerHeight + "' allowfullscreen='true' 
target='_self'></iframe>";
    }
} else if (a=="y") {
    close();
} else {
    document.getElementById("main").innerHTML = "<p 
style='text-align:center'>Sorry, This content is unavailable. </p>" + 
cookie + "|";
}
