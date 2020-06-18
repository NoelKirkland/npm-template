
// this is the object constructor that with retain all of our little elements
function PigDiceGame(turn, turnTotal, totalScore, users, winner){
  this.turn = turn,
  this.turnTotal = turnTotal,
  this.totalScore = totalScore,
  this.users = [user1, user2, user3]
  this.winner = winner
}
users.forEach(function(user) {
  
})
PigDiceGame.users[0] = user1
PigDiceGame.users[1] = 

// this is our object constructor that will keep our user name and that users total score
function UserName(UserName, totalscore){
  this.UserName = UserName,
  this.totalscore = totalscore
}

PigDiceGame.prototype.addToTurnTotal = function(roll) {
  this.turnTotal += roll;
}

PigDiceGame.prototype.addTurnTotaltoTotalScore = function() {
  this.turnTotal += this.totalScore
}

function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

// User interface

let newUserName = $("#user-name").val();

var roll = rollDice();
var rollTotal = object.addToTurnTotal(roll);