m = 0;
let y;
let audio = document.getElementById("audio");
let img = document.getElementById("img");
let x;

function run() {
    // add music 
    audio.play();

    // btn-disable 
    document.getElementById("start-btn").disabled = true;
    document.getElementById("stop-btn").disabled = false;



    console.log(m);
    if (m == 1200) {
        stop();
        flipCharacter();
        m -= 50;

    } else {
        if (m >= 0) {
            x = img.classList;
            if (x.contains("flipped-character")) {
                m -= 50;
                img.style.marginLeft = m + "px";
            } else {
                m += 50;
                img.style.marginLeft = m + "px";
            }
        }
        else{
            stop();
        }
    }
}

function start() {
    console.log('start called');
    y = setInterval(run, 150);


}

function stop() {
    y = clearInterval(y);
    audio.pause();
    document.getElementById("stop-btn").disabled = true;
    document.getElementById("start-btn").disabled = false;
}

function flipCharacter() {
    let img = document.getElementById("img");
    img.classList.add('flipped-character');
}

document.onkeyup = function (e) {
    switch (e.key) {
        case " ":
            // running => stop 
            if (y) {
                stop();
            } else {
                start();
            }
            break;
    }
}