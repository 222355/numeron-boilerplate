// Iteration 2: Generate 2 random number and display it on the screen
function random(){
    const randomNumber1 = Math.floor(Math.random() * 10) + 1;
    const randomNumber2 = Math.floor(Math.random() * 10) + 1;
    Num1.textContent = randomNumber1;
    Num2.textContent = randomNumber2;
}

const Num1=document.getElementById("number1");
const Num2=document.getElementById("number2");


// Iteration 3: Make the options button functional
var score=0;

const greater=document.getElementById("greater-than");
const less=document.getElementById("lesser-than");
const equal=document.getElementById("equal-to");
greater.addEventListener("click",function(){
    checkingRelation("greater")
});
less.addEventListener("click",function(){
    checkingRelation("lesser")
});
equal.addEventListener("click",function(){
    checkingRelation("equal")
});
console.log(Num1.textContent);
console.log(Num2.textContent);
function checkingRelation(guess){
    var relation;
if(Num1.textContent>Num2.textContent){
    relation="greater";
}
else if (Num1.textContent<Num2.textContent){
    relation="lesser";
}
else if(Num1.textContent==Num2.textContent){
    relation ="equal";
}
if (guess==relation){
    score+=1;
    console.log("yes")
    random()
}
else{
    console.log("No")
    random()
}
}


// Iteration 4: Build a timer for the game


let timeInSeconds = 10; 
const timerDisplay = document.getElementById("timer");
timerDisplay.textContent = formatTime(timeInSeconds);
const timerInterval = setInterval(updateTimer, 1000); 

function updateTimer() {
  timeInSeconds--;
  timerDisplay.textContent = formatTime(timeInSeconds);
  if (timeInSeconds <= 0) {
    clearInterval(timerInterval);
    handleGameOver();
  }
}

function formatTime(seconds) {
    return `${seconds < 10 ? '0' : ''}${seconds}`;
}

function handleGameOver() {
    console.log(score)
    redirectToGameOver(score);
}
function redirectToGameOver(score) {
    localStorage.setItem("score", score);
    window.open('gameover.html', '_self'); 
}