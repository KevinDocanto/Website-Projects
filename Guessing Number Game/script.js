let guess = document.getElementById('guess');
let score = document.getElementById('score');
let highScore = document.getElementById('high-score');
let correctGuess = document.getElementById('correct-number');
let startGuessing = document.getElementById('start-guessing');

let element_number = 20;
let get_highScore = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

let randomNumber = getRandomInt(20);

let checkButton = document
  .getElementById('check')
  .addEventListener('click', function () {
    if (guess.value == randomNumber) {
      correctGuess.innerHTML = randomNumber;
      document.body.style.backgroundColor = 'green';
      guess.style.backgroundColor = 'green';
      guess.style.borderColor = 'green';
      startGuessing.innerHTML = '🏆 You got it, congrats!';

      if (element_number > get_highScore) {
        get_highScore = element_number;
        highScore.innerHTML = '🥇 Highscore: ' + get_highScore;
      }
    } else {
      if (guess.value > randomNumber) {
        startGuessing.innerHTML = '📈 Too high!';
      } else {
        startGuessing.innerHTML = '📉 Too low';
      }
      score.innerHTML = '💯 Score: ' + --element_number;
    }

    console.log(guess.value);
    console.log(randomNumber);
  });

let restart = document
  .getElementById('again')
  .addEventListener('click', function () {
    document.body.style.backgroundColor = 'rgb(39, 37, 37)';
    guess.style.backgroundColor = 'rgb(39, 37, 37)';
    guess.style.borderColor = 'rgb(39, 37, 37)';
    element_number = 20;
    score.innerHTML = '💯 Score: ' + element_number;
    randomNumber = getRandomInt(20);
    startGuessing.innerHTML = 'Start guessing...';
    correctGuess.innerHTML = '?';
  });
