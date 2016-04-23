// COUNTDOWNTIMER //

var done = document.getelementById("countdown");
var time = 10;
var element = document.getelementById("countdown");
element.innerHTML = "10";
var id;

done.parentNode.replaceChild(done);

id = setInterval(function() {
    time--;
    if(time < 0) {
        element.parentNode.replaceChild(done, element);
        clearInterval(id);
    } else {
        element.innerHTML = "time.toString()";
    }
}, 1000);
