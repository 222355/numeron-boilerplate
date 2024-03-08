// Iteration 5: Store the player score and display it on the game over screen

const scoreValue = localStorage.getItem("score");
console.log(scoreValue)

const scoreBox = document.getElementById("score-board");
scoreBox.textContent=scoreValue;


const playAgain = document.getElementById("play-again-button");
playAgain.addEventListener("click",function(){
    window.open('index.html','_self')
})