let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;

function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;


    document.getElementsByClassName("nav-bar")[0].style.visibility = "visible";
}
// ----------------------------------****-----------------------------

function restartGame(){

  firstPlayerScore = 0;
  secondPlayerScore = 0;

  for(let i = 1;i<3;i++){

    const playerNodes = document.getElementById(`player`+i);

    let disable_attr = "";
    let playerName = firstPlayerName;
    if(i==2){
      disable_attr = "disabled";
      playerName = secondPlayerName;

    }

    let inside = '<h1 class="heading">'
      +playerName 
      +'</h1><h1 class="score">0</h1><div class="dice">'
      +'<img src="images/dice1.png"/></div><div class="input-group button" id="player-'+i+'-button">'
      +'<input type="button" value="Roll Dice" onclick="rollDice('+i+')" '
      +disable_attr
      +'/></div>';

      playerNodes.innerHTML = inside;

    // playerNodes
    //    .querySelector(".dice img")
    //    .setAttribute("src", `images/dice1.png`);
    // playerNodes.getElementsByClassName("score")[0].innerHTML = 0;

    // playerNodes
    // .getElementsByTagName("input")[0]
    // .setAttribute("disabled", true);

  }// endfor

  
  console.log('totalscore: '+totalScore)
 
}


function newGame(){
  window.location.reload();
}
// ----------------------------------xxxx----------------
function rollDice(playerIndex) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  console.log("winning score : " +totalScore);
  console.log("first player : " + firstPlayerScore);
  console.log("second player : " + secondPlayerScore);
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
}
