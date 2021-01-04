var noOfButtons = document.querySelectorAll(".drum").length;

function playMusic(source) {
  var audio = new Audio(source);
  audio.play();
}

for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    getSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

/* Event Listener for key down */
document.addEventListener("keydown", function(event) {
  getSound(event.key);
  buttonAnimation(event.key);

});

/* To get sounds for corresponding button click */
function getSound(key) {
  switch (key) {
    case "w":
      playMusic("sounds/tom-1.mp3");
      break;
    case "a":
      playMusic("sounds/tom-2.mp3");
      break;
    case "s":
      playMusic("sounds/tom-3.mp3");
      break;
    case "d":
      playMusic("sounds/tom-4.mp3");
      break;
    case "j":
      playMusic("sounds/snare.mp3");
      break;
    case "k":
      playMusic("sounds/crash.mp3");
      break;
    case "l":
      playMusic("sounds/kick-bass.mp3");
      break;
    default:

  }
}

/* Animation for button when clicked */
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}
