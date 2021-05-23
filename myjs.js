m = 0;
var y;
var audio = document.getElementById("audio");

function start() {
    y = setInterval(run, 50);

    function run() {
        // add music 
        audio.play();

        // btn-disable 
        document.getElementById("start-btn").disabled = true;
        document.getElementById("stop-btn").disabled = false;


        if (m == 1200) {
            clearInterval(y);
            m = 0;

        } else {
            m += 5;
            var img = document.getElementById("img");
            img.style.marginLeft = m + "px";
        }
    }
}

function stop() {
    clearInterval(y);
    audio.pause();
    document.getElementById("stop-btn").disabled = true;
    document.getElementById("start-btn").disabled = false;

}