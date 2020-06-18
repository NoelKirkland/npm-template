# _Pig Dice Game_

#### _Dice rolling game where the goal is to get to 100 points, 6/17/2020_

#### By _**Ben Russell, Noel Kirkland, Taylor Phillips**_

## Description

_This Application will allow a user to play a Dice game against a computer opponent. The goal will be to get to 100 points. If user rolls a 1 they will score nothing for that turn and have to let the opponent roll. A roll of 2-6 will be added to total and the user will get to decide to keep rolling or let the opponent have a turn._

## Specifications

Create a button that our user can push to roll a virtual die that returns a number from 1 through 6 and displays that number to the user.
  Input: Click _roll_
  Output: roll: 3

Create a _current total turn score_ display that shows the user's dice roll totals for that turn
  Input: Click _roll_ #1
  Output: roll: 3
  Total: 3
  Input: Click _roll_ #2
  Output: roll: 5
  Total: 8

Create a _current total player score_ display that shows the sum of that players individual turn scores
  Input: _total Player score_ = 14, _total turn score_ = 8, Click _halt_
  Output: _total player score_ = 22

Implement functionality so if a user rolls a 1 their turn automatically ends and their _total turn score score_ is reduced to 0
  Input: Click _roll_ = 1, _turn ends_
  Output total score = 8, _total player score_ = Unchanged

Create a button that our user clicks to halt there turn and keep their current turn score and add it to their total player score
  Input: Click _halt_
  Output: total score = 22

Implement functionality so that multiple user's can play against one another and keep track of their individual totals
  Input: Player #1 _roll_
  Output: total score = 22

  Input: Player #2 _roll_
  Output: total score = 17

  Input: Player #3 _roll_
  Output: total score = 19

When one user either rolls a 1 or clicks the _halt_ button the turn is then cycled to the next sequential player.
  Input: Player #1 _roll_ = 1
  Output: Player #2 begins turn

  Input: Player #2 clicks _halt_
  Output: player #3 begins turn

Implement functionality to stop the game once one player reaches a total score of 100
  Input: Player #1 _roll_
  Output: total score = 88

  Input: Player #2 _roll_
  Output: total score = 75

  Input: Player #3 _roll_
  Output: total score = 100 - _Stop Game_

Create a display for the winning player
 Input: player #1 _total player score_ = 100
 Output: "Player #1 is the bestas and is better than the restas"


## Setup/Installation Requirements

### Open by downloading

1. _Download this repository onto your computer._
2. _Double click index.html to open in your web browser._

### Open via Bash/Gitbash

* _clone this repository onto your computer: https://github.com/brussell36/pig-dice-game.git_
* _Navigate into the portfolio-page directory in VS Code or text editor of choice code ._
* _Open index.html in your preffered browser_
* _Feel free to edit anything you like and push them to your own repo_
* _This is all open source_


## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you have any issues or questions and concerns, please contact me at benjaminrussell36@gmail.com._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _jQuery_
* _JavaScript_

### License

*MIT License*

Copyright (c) 2020 **_Ben Russell_, _Noel Kirkland_, and _Taylor Phillips_**