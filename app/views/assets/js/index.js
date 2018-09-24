window.onload = function() {
    document.getElementById("my_audio").play();

    var timer = setTimeout(function() {
        window.location='/welcome'
    }, 45000);

    timer();


    document.getElementById("#skipper").onclick = function () {
        window.location = "/welcome";
    };
}

