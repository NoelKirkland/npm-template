// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
} 

function User(userName, turnScore, totalScore){
  this.userName = userName,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}
let totalScore = 0;

// function addToTotalScore(totalScore) {
//   return this.totalScore += turnScoreSum
// }

function addDiceRollValues(diceRollValue, diceRollValue){
  return diceRollValue + diceRollValue
}
let turnScoreArray = [];
let diceRollValue = rollDice();
$(".roll-number").text(diceRollValue);
let turnScoreSum = turnScoreArray.push(diceRollValue);
turnScoreArray.forEach(function(element) {
turnScoreSum += element - 1;
});

// User Interface
$(document).ready(function() {

  $("#halt-btn").click(function(){
    let totalScore = turnScoreSum;
    console.log(totalScore);
  });

    let turnScoreArray = [];
  $("#roll-btn").click(function() {
    let diceRollValue = rollDice();
    $(".roll-number").text(diceRollValue);
    let turnScoreSum = turnScoreArray.push(diceRollValue);
    turnScoreArray.forEach(function(element) {
    turnScoreSum += element - 1;
    $(".turn-number").text(turnScoreSum);
    });
    console.log(turnScoreArray);
    console.log(turnScoreSum);
  });
  $("form#name").submit(function(event){
    event.preventDefault();
    let newUserName = $("#user-name").val();
    $(".name").text(newUserName);
    $("#user-name").val("");
    let user1 = new User(newUserName);
    console.log(user1);
  }); 
});