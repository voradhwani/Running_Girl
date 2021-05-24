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
  
  isCharacterFacingLeft = img.classList.contains("flipped-character");
  
  if(isCharacterFacingLeft){
    // Note: The character should be moving towards Left.
    if (m > 0){
      m -= 50;
      img.style.marginLeft = m + "px";
    } else {
      stop();
      flipCharacter();
    }
  } else {
    // Note: The character should be moving towards Right.
    if (m < 1200){
      m += 50;
      img.style.marginLeft = m + "px";
    } else {
      stop();
      flipCharacter();
    }
  }
}

function start() {
  console.log('start called');
  y = setInterval(run, 10); 
}

function stop() {
  y = clearInterval(y);
  audio.pause();
  document.getElementById("stop-btn").disabled = true;
  document.getElementById("start-btn").disabled = false;
}

function flipCharacter() {
  let img = document.getElementById("img");
  isCharacterFacingLeft = img.classList.contains("flipped-character");

  if(isCharacterFacingLeft){
    img.classList.remove('flipped-character');
  } else {
    img.classList.add('flipped-character');
  }
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