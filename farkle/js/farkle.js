class Die {
    constructor(position) {
        this.diePosition = position;
    } 
    roll() {
        //random number 1-6
        let random = Math.floor((Math.random() * 6) + 1);
        //return number
        return random;
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.totalScore = 0;
        this.tempScore = 0;
    }
    takeTurn() {
        let rollButton = document.getElementById("roll-button");
        rollButton.addEventListener("click", rollDice);
    }
    scoreThisTurn() {
        //check score
        let score = checkScore(".kept")
        this.tempScore += score;

        //display total turn score
        let scoreTurn = document.getElementById("score-turn");
        scoreTurn.innerHTML = this.tempScore;

        //display score
    }
    scoreTotal() {
        this.totalScore += this.tempScore;
        this.tempScore = 0;

        return this.totalScore;
    }
    displayScore(score) {
        let keepArea = document.getElementById("keep-area");
        keepArea.appendChild(createElement("h2", score, "display-score"))
    }
}
/*
class AIPlayer extends Player {
    constructor(name) {
        super(name);
        this.totalScore = 0;
        this.tempScore = 0;
    }
    takeTurn() {
        //count dice to roll
        let diceToRoll = document.querySelectorAll(".roll");
        if (diceToRoll.length >= 3) {
            rollDice();
        }


    }
}
*/
//EXTEND PLAYER TO AIPLAYER AND ADD TURN

//Declare turns to increment in order to keep track of turns
let turns = 0;
let players;
// Instantiate Dice
let die1 = new Die(1);
let die2 = new Die(2);
let die3 = new Die(3);
let die4 = new Die(4);
let die5 = new Die(5);
let die6 = new Die(6);

// PLAY! Determine 1 or 2 Players
function play() {

    let main = document.getElementsByTagName("main")[0];
    let cover = main.appendChild(createElement("div", "", "cover"));
    cover.appendChild(createElement("h1", "How many players?", "cover"));

    let onePlayer = cover.appendChild(createElement("button", "1 Player", "cover"));
    onePlayer.setAttribute("id", "one-player");
    onePlayer.addEventListener("click", singlePlayer);

    let twoPlayer = cover.appendChild(createElement("button", "2 Players", "cover"));
    twoPlayer.setAttribute("id", "two-player");
    twoPlayer.addEventListener("click", dualPlayer1);

    //hide play button
    let playButton = document.getElementById("play-button");
    playButton.classList.add("hidden");

    //show roll button
    let rollButton = document.getElementById("roll-button");
    rollButton.classList.remove("hidden");
}


//CREATE FUNCTIONS FOR SINGLE OR MULTIPLAYER GAME
function singlePlayer() {
    players = 1;
    promptName("single-player-name", singlePlayerEnter, "Player 1")
}

function dualPlayer1() {
    players = 2;
    promptName("dual-player1-name", dualPlayer1Enter, "Player 1")
}

function promptName(inputID, eventListenFor, player) {
    let coverDiv = document.querySelectorAll("div.cover")[0];
    //clear content of coverDiv
    coverDiv.innerHTML = "";
    //Prompt player name
    coverDiv.appendChild(createElement("h1", `${player}, what's your name?`));
    let input = coverDiv.appendChild(createElement("input", "What's your name?"));
    input.setAttribute("id", inputID);
    input.focus();
    input.addEventListener("keypress", eventListenFor);
}

function singlePlayerEnter(event) {
    let input = document.getElementById("single-player-name");
    //Instantiate Player
    let active = document.activeElement
    if (event.keyCode == 13 && active === input) {
        let playerName = input.value;
        let cover = document.querySelectorAll("div.cover")[0];
        cover.parentNode.removeChild(cover);
        player1 = new Player(playerName);
        //player2 = new AIPlayer("Johnny Five");

        //Update score area with player names
        let p1Label = document.getElementById("player1");
        p1Label.textContent = `${playerName}: `;
        let p1Span = p1Label.appendChild(createElement("span", 0));
        p1Span.setAttribute("id", "player1-score")
        //let p2Label = document.getElementById("player2");
        //p2Label.textContent = "Johnny Five: ";
        //let p2Span = p2Label.appendChild(createElement("span", 0));
        //p2Span.setAttribute("id", "player2-score");

        let scoreTurn = document.getElementById("score-turn");
        scoreTurn.innerHTML = "0";

        whosTurn();
    }
}

function dualPlayer1Enter(event) {
    let input = document.getElementById("dual-player1-name");
    //Instantiate Player
    let active = document.activeElement
    if (event.keyCode == 13 && active === input) {
        let playerName = input.value;
        player1 = new Player(playerName);
        promptName("dual-player2-name", dualPlayer2Enter, "Player 2")
    }
}

function dualPlayer2Enter(event) {
    let input = document.getElementById("dual-player2-name");
    //Instantiate Player
    let active = document.activeElement
    if (event.keyCode == 13 && active === input) {
        let playerName = input.value;
        let cover = document.querySelectorAll("div.cover")[0];
        cover.parentNode.removeChild(cover);
        player2 = new Player(playerName);

        //Update score area with player names
        let p1Label = document.getElementById("player1");
        p1Label.textContent = `${player1.name}: `;
        let p1Span = p1Label.appendChild(createElement("span", 0));
        p1Span.setAttribute("id", "player1-score")
        let p2Label = document.getElementById("player2");
        p2Label.textContent = `${player2.name}: `;
        let p2Span = p2Label.appendChild(createElement("span", 0));
        p2Span.setAttribute("id", "player2-score");

        let scoreTurn = document.getElementById("score-turn");
        scoreTurn.innerHTML = "0";

        whosTurn();
    }
}

//Start turn based on turns odd/even
function whosTurn() {
    turns++;
    let scoreTurn = document.getElementById("score-turn");
    scoreTurn.innerHTML = 0;

    //Remove eventListener from keepButton
    let keepButton = document.getElementById("keep-button");
    keepButton.removeEventListener("click", keepPoints);


    if (players == 2) {
        //if turns is odd, Player 1's turn
        if (turns % 2 == 1) {
            let whichPlayer = document.getElementById("which-player");
            whichPlayer.innerHTML = `${player1.name}'s Turn`;
            player1.takeTurn();
        } else {
            let whichPlayer = document.getElementById("which-player");
            whichPlayer.innerHTML = `${player2.name}'s Turn`;
            player2.takeTurn();
        }
    } else {
        let whichPlayer = document.getElementById("which-player");
        whichPlayer.innerHTML = `${player1.name}'s Turn`;
        player1.takeTurn();
    }
}


            
    //animate +score float up/opacity 1 to 0
            

             


        

//Repeat until choose to keep or Farkle
function rollDice() {
    //if turns is odd, Player 1's turn
    let player;

    if (players == 2) {
        if (turns % 2 == 1) {
            player = player1;
        } else {
            player = player2;
        }
    } else {
        player = player1;
    }
    //calculate score of kept dice
    player.scoreThisTurn();

    //flip remaining dice back to .roll
    let rolledDice = document.querySelectorAll(".rolled");
    for (let i = 0; i < rolledDice.length; i++) {
        rolledDice[i].classList.remove("rolled");
        rolledDice[i].classList.add("roll");
    }

    //flip kept dice to saved
    let keptDice = document.querySelectorAll(".kept");
    for (let i = 0; i < keptDice.length; i++) {
        keptDice[i].classList.remove("kept");
        keptDice[i].classList.add("saved");
        keptDice[i].removeEventListener("click", dontKeepDie);
        keptDice[i].removeEventListener("click", keepDie);
    }

    //check for remaining dice. if none, flip saved dice to roll
    let saved = document.querySelectorAll(".saved");
    if (saved.length == 6) {
        for (i = 0; i < saved.length; i++) {
            saved[i].classList.remove("saved");
            saved[i].classList.add("roll");
        }
    }

    //Roll remaining dice
    let diceToRoll = document.querySelectorAll(".roll");
    let num;
    let id;

    //roll and render the dice
    let rollAndRender = (die) => {
        let id = parseInt(die.getAttribute("id"));
        switch (id) {
            case 1: num = die1.roll();
                break;
            case 2: num = die2.roll();
                break;
            case 3: num = die3.roll();
                break;
            case 4: num = die4.roll();
                break;
            case 5: num = die5.roll();
                break;
            case 6: num = die6.roll();
                break;
        }
        //Clear render class from die child
        die.className = "";
        //Add render class to die child
        die.classList.add(`render${num}`);
        // switch class "rolled" to rolled dice
        die.classList.add("die");
        //change name of die to number
        die.setAttribute("name", num)
        // switch class "rolled" to rolled dice
        diceToRoll[i].classList.add("rolled");
    }

    //Render 3-4 images of die front .3s each. Use timeout to change class. array 1-6, random
    setTimeout(function () {
        for (i = 0; i < diceToRoll.length; i++) {
            rollAndRender(diceToRoll[i])
        }
    }, 100);
    setTimeout(function () {
        for (i = 0; i < diceToRoll.length; i++) {
            rollAndRender(diceToRoll[i])
        }
    }, 200);
    setTimeout(function () {
        for (i = 0; i < diceToRoll.length; i++) {
            rollAndRender(diceToRoll[i])
        }
    }, 300);
    setTimeout(function () {
        for (i = 0; i < diceToRoll.length; i++) {
            rollAndRender(diceToRoll[i])
        }
    }, 400);

    setTimeout(function () {
        for (i = 0; i < diceToRoll.length; i++) {
            rollAndRender(diceToRoll[i])
        }

        //Check for Farkle
        let scoreForRoll = checkScore(".rolled");

        //If no Farkle
        if (scoreForRoll != 0) {
            for (i = 0; i < diceToRoll.length; i++) {
                //set event listeners to dice
                diceToRoll[i].addEventListener("click", keepDie);
            }
            //Show keep button
            let keepButton = document.getElementById("keep-button");
            keepButton.classList.remove("hidden");
            keepButton.addEventListener("click", keepPoints)
        //If Farkle
        } else {
            
            //reset temp score
            player.tempScore = 0;
            //display FARKLE
            let main = document.getElementsByTagName("main")[0];
            let farkleCover = main.appendChild(createElement("div", "", "farkle-cover"));
            farkleCover.appendChild(createElement("h1", "FARKLE", "farkle-cover"));
            let scoreTurn = document.getElementById("score-turn");
            scoreTurn.innerHTML = "0";
            //remove Farkle display
            setTimeout(function () {
                main.removeChild(farkleCover);
                resetDice();
                whosTurn()
            }, 2000)
        }
    }, 450);
}

function keepPoints() {
    
    let scoreDisplay;
    
    if (players == 2) {
        //if turns is odd, Player 1's turn
        if (turns % 2 == 1) {
            player1.scoreThisTurn();
            scoreDisplay = document.getElementById("player1-score");
            scoreDisplay.innerHTML = player1.scoreTotal();
        } else {
            player2.scoreThisTurn();
            scoreDisplay = document.getElementById("player2-score");
            scoreDisplay.innerHTML = player2.scoreTotal();
        }
    } else {
        player1.scoreThisTurn();
        scoreDisplay = document.getElementById("player1-score");
        scoreDisplay.innerHTML = player1.scoreTotal();
    }

    //flip remaining dice back to .roll
    resetDice();

    //if turns is odd, Player 1's turn
    if (turns % 2 == 1) {
        if (player1.totalScore >= 10000) {
            win(player1.name);
        }
    } else {
        if (player2.totalScore >= 10000) {
            win(player2.name);
        }
    }
    whosTurn();
}

function win(player) {
    //display winner
    let main = document.getElementsByTagName("main")[0];
    let cover = main.appendChild(createElement("div", "", "cover"));
    let h1 = cover.appendChild(createElement("h1", `${player} Wins!`, "win-cover"));
    cover.addEventListener("click", removeWin);
}

function removeWin() {
    let main = document.querySelectorAll("main")[0];
    let cover = document.querySelectorAll(".cover")[0];
    main.removeChild(cover);

    //Reset Dice
    resetDice();

    //show play button
    let playButton = document.getElementById("play-button");
    playButton.classList.remove("hidden");

    //hide save button 
    let keepButton = document.getElementById("keep-button");
    keepButton.classList.add("hidden");

    //hide roll-button
    let rollButton = document.getElementById("roll-button");
    rollButton.classList.add("hidden");

    //reset scoreTurn
    let scoreTurn = document.getElementById("score-turn");
    scoreTurn.innerHTML = "";

    //reset whichPlayer
    let whichPlayer = document.getElementById("which-player");
    whichPlayer.innerHTML = "";

    //reset player1 & player2 scores
    let player1Score = document.getElementById("player1");
    player1Score.innerHTML = "";
    let player2Score = document.getElementById("player2");
    player2Score.innerHTML = "";
}

function resetDice() {
    //flip remaining dice back to .roll
    let allDice = document.querySelectorAll(".die");
    for (let i = 0; i < allDice.length; i++) {
        allDice[i].className = "";
        allDice[i].classList.add(`render${i + 1}`);
        allDice[i].classList.add("roll");
        allDice[i].classList.add("die");
        allDice[i].removeEventListener("click", dontKeepDie);
        allDice[i].removeEventListener("click", keepDie);
    }
}

function combo6(dice) {
    //Check for combos of 6
    let straight, twoSets, threeSets;
    let score = 0;
    if (dice.length == 6) {
        //check for straight
        straight = true;
        for (let i = 0; i < dice.length; i++) {
            if (dice[i] != i + 1) { straight = false; }
        }
        //check of 2 sets of 3
        twoSets = false;
        if (dice[0] == dice[2] && dice[3] == dice[5]) {
            twoSets = true;
        }
        //check for 3 sets of 2
        threeSets = false;
        if (dice[0] == dice[1] && dice[2] == dice[3] && dice[4] == dice[5]) {
            threeSets = true;
        }

        if (straight == true || twoSets == true || threeSets == true) {
            score = 1500;
        }

        return score;
    }
}

function combo5(dice) {
    //Check for combos of 5
    let score = 0;
    if (dice.length == 5) {
        if (dice[0] == dice[4]) {
            if (dice[0] == 1) {
                score += (dice[0] * 3000);
            } else {
                score += (dice[0] * 300);
            }
        }
    } else if (dice.length == 6) {
        if (dice[0] == dice[4]) {
            if (dice[0] == 1) {
                score += (dice[0] * 3000);
            } else {
                score += (dice[0] * 300);
            }
            score += oneOrFive(dice[5])
        } else if (dice[1] == dice[5]) {
            if (dice[1] == 1) {
                score += (dice[1] * 3000);
            } else {
                score += (dice[1] * 300);
            }
            score += oneOrFive(dice[0]);
        }
    }
    return score;
}

function combo4(dice) {
    let score = 0;

    switch (dice.length) {
        case 4:
            if (dice[0] == dice[3]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 2000)
                } else {
                    score += (dice[0] * 200)
                }
            }
            break;
        case 5:
            if (dice[0] == dice[3]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 2000)
                } else {
                    score += (dice[0] * 200)
                }
                score += oneOrFive(dice[4])
            } else if (dice[1] == dice[4]) {
                if (dice[1] == 1) {
                    score += (dice[1] * 2000)
                } else {
                    score += (dice[1] * 200)
                }
                score += oneOrFive(dice[0]);
            }
            break;
        case 6:
            if (dice[0] == dice[3]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 2000)
                } else {
                    score += (dice[0] * 200)
                }
                score += oneOrFive(dice[4]);
                score += oneOrFive(dice[5]);
            } else if (dice[1] == dice[4]) {
                if (dice[1] == 1) {
                    score += (dice[1] * 2000)
                } else {
                    score += (dice[1] * 200)
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[5]);
            } else if (dice[2] == dice[5]) {
                if (dice[2] == 1) {
                    score += (dice[2] * 2000)
                } else {
                    score += (dice[2] * 200)
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[1]);
            }
            break;
    }
    return score;
}

function combo3(dice) {
    let score = 0;

    switch (dice.length) {
        case 3:
            if (dice[0] == dice[2]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
            }
            break;
        case 4:
            if (dice[0] == dice[2]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[3]);
            } else if (dice[1] == dice[3]) {
                score += (dice[0] * 100);
                score += oneOrFive(dice[0]);
            }
            break;
        case 5:
            if (dice[0] == dice[2]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[3]);
                score += oneOrFive(dice[4]);
            } else if (dice[1] == dice[3]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[4]);
            } else if (dice[2] == dice[4]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[1]);
            }
            break;
        case 6:
            if (dice[0] == dice[2]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[3]);
                score += oneOrFive(dice[4]);
                score += oneOrFive(dice[5]);
            } else if (dice[1] == dice[3]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[4]);
                score += oneOrFive(dice[5]);
            } else if (dice[2] == dice[4]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[1]);
                score += oneOrFive(dice[5]);
            } else if (dice[3] == dice[5]) {
                if (dice[0] == 1) {
                    score += (dice[0] * 1000);
                } else {
                    score += (dice[0] * 100);
                }
                score += oneOrFive(dice[0]);
                score += oneOrFive(dice[1]);
                score += oneOrFive(dice[2]);
            }
            break;
    }
    return score;
}

function oneOrFive(num) {
    let score = 0;
    if (num == 1) {
        score = 100;
    } else if (num == 5) {
        score = 50;
    }
    return score;
}

function checkScore(dieClass) {
    let kept = document.querySelectorAll(dieClass);
    let dice = new Array();
    let score = 0;
    //put kept stuff into array
    for (let i = 0; i < kept.length; i++) {
        dice.push(kept[i].getAttribute("name"));
    }
    dice.sort();

    if (combo6(dice) > 0) {
        score += combo6(dice);
    } else if (combo5(dice) > 0) {
        score += combo5(dice);
    } else if (combo4(dice) > 0) {
        score += combo4(dice);
    } else if (combo3(dice) > 0) {
        score += combo3(dice);
    } else {
        for (let i = 0; i < dice.length; i++) {
            score += oneOrFive(dice[i]);
        }
    }
    return score;
}

//Move clicked die to keep-area
function keepDie(event) {
    let target = event.target;
    target.classList.add("kept");
    target.removeEventListener("click", keepDie);
    target.classList.remove("rolled");
    target.addEventListener("click", dontKeepDie);
    
}

//Move unclicked die from keep-area
function dontKeepDie(event) {
    let target = event.target;
    target.classList.remove("kept");
    target.removeEventListener("click", dontKeepDie);
    target.classList.add("rolled");
    target.addEventListener("click", keepDie);
}

function createElement(tag, text, className, name) {
    const genElement = document.createElement(tag);
    if (text) { genElement.textContent = text; }
    if (className) { genElement.classList.add(className); }
    if (name) { genElement.setAttribute("name", name); }
    return genElement;
}