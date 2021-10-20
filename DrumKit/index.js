let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", () => {
    let drum = drums[i].innerHTML;
    makeSound(drum);
    buttonAnimation(drum);
  });
}

document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "a":
      sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "s":
      sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "d":
      sound = new Audio("sounds/tom-4.mp3");
      sound.play();
    case "j":
      sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "k":
      sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "l":
      sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    default:
      console.log(event.key);
  }
}

function anotherEventListener(typeOfEvent, callback) {
  let eventThatHappened = {
    eventType: "keypress",
    key: "p",
    durationOfKeyPress: 2,
  };

  if (eventThatHappened.eventType === typeOfEvent) {
    callback(eventThatHappened);
  }
}

anotherEventListener("keypress", function (event) {
  console.log(event);
});

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
