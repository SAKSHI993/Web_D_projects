
var deadline = new Date("Jan 5, 2022 15:37:25").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("clockdiv").innerHTML = days + " days, "
+ hours + " hrs, " + minutes + " min, " + seconds + " sec !!! ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("clockdiv").innerHTML = "EXPIRED";
    }
}, 1000);
