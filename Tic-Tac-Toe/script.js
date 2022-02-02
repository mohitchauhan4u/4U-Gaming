console.log("Welcome to tic tac toe");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isGameOver = false;
//function to check the turn
/**
 * Change the turn from X to O or vice versa
 * @returns The turn variable is being set to the value of the changeTurn function.
 */
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};
//function to check for a win
/**
 * Check if any of the win conditions are met. If they are, set the game over variable to the current
 * turn, and play the gameover sound
 */
const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " Won";
      isGameOver = turn;
      gameover.play()
      document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px"
    }
  });
};

//game logic
/* The forEach() method calls a provided function once for each array element.

The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable
object.

The addEventListener() method attaches an event handler to the specified element.

The querySelector() method returns the first element that matches a specified CSS selector(s) in the
document.

The innerText property returns the text content of the specified node, and sets the text content of
the specified node.

The changeTurn() method changes the turn */
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!isGameOver) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});
// add onclick listener to reset button

/* The reset button is used to reset the game.

The turn variable is used to keep track of whose turn it is.

The isGameOver variable is used to keep track of whether the game is over or not.

The document.getElementsByClassName("info")[0].innerText is used to display whose turn it is.

The document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width is used to display
the X or O image.

The Array */
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element.innerText=""
    })
    turn="X"
    isGameOver=false
    document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
          document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})