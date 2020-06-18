// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

function endTurn()  {
  let turnScoreArray = [];
  $(".roll-number").text(0);
  $(".turn-number").text(0);
  return totalScore.push(turnScoreSum);
}

function User(userName, turnScore, totalScore) {
  this.userName = userName,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}
let user1 = new User([""], 6, 21);
let userOneName = user[0];
function PigDice(diceRoll, ) {

}

User.prototype.addUserName = function(){
  $("input#user-name").text(".name");

}

User.prototype.addTurnScore = function(){

}
User.prototype.addTotalScore = function(){
  
}

let totalScore = 0;

// function addToTotalScore(totalScore) {
//   return this.totalScore += turnScoreSum
// }

function addDiceRollValues(diceRollValue, diceRollValue){
  return diceRollValue + diceRollValue
}
// let turnScoreArray = [];
// let diceRollValue = rollDice();
// $(".roll-number").text(diceRollValue);
// let turnScoreSum = turnScoreArray.push(diceRollValue);
// turnScoreArray.forEach(function(element) {
// turnScoreSum += element - 1;
// });

// User Interface
$(document).ready(function() {

  // let user1 = new User(newUserName)
  // let user2 = new User(newUserName)
  let turnScoreArray = [];
  $("form#name1").submit(function(event){
    event.preventDefault();
    let newUserName = $("#user-name1").val();
    $(".name1").text(newUserName);
    $("#user-name1").val("");
  });
    $("form#name2").submit(function(event){
      event.preventDefault();
      let newUserName = $("#user-name2").val();
      $(".name2").text(newUserName);
      $("#user-name2").val("");
  }); 
  $("#halt-btn").click(function(){
    let totalScore = endTurn();
    $(".total-number").text(totalScore);
    console.log(totalScore);
  });
  $("#roll-btn").click(function() {
    rollDice();
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
});

