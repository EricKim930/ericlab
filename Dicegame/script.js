let playerScore = 0;
let computerScore = 0;
let rollCount = 0;

document.getElementById('rollButton').addEventListener('click', rollDice);
document.getElementById('resetButton').addEventListener('click', resetGame);

function rollDice() {
    if (rollCount < 3) {
        let playerDice = rollPairOfDice();
        let computerDice = rollPairOfDice();

        updateDiceDisplay('playerDice', 'Player Dice: ', playerDice);
        updateDiceDisplay('computerDice', 'Computer Dice: ', computerDice);
        updateDiceImages(playerDice, computerDice);

        playerScore += calculateScore(playerDice);
        computerScore += calculateScore(computerDice);

        updateScoreDisplay();
        rollCount++;

        if (rollCount === 3) {
            declareWinner();
        }
    }
}

function rollPairOfDice() {
    return [getRandomDiceRoll(), getRandomDiceRoll()];
}

function getRandomDiceRoll() {
    return Math.floor(Math.random() * 6) + 1;
}

function calculateScore(dice) {
    if (dice.includes(1)) {
        return 0;
    } else if (dice[0] === dice[1]) {
        return (dice[0] + dice[1])*2 ;
    } else {
        return dice[0] + dice[1];
    }
    
}

function updateDiceDisplay(elementId, prefixText, dice) {
    document.getElementById(elementId).innerText = `${prefixText} ${dice[0]}, ${dice[1]}`;
}

function updateDiceImages(playerDice, computerDice) {
    document.getElementById('playerDice1').src = `images/dice${playerDice[0]}.png`;
    document.getElementById('playerDice2').src = `images/dice${playerDice[1]}.png`;
    document.getElementById('computerDice1').src = `images/dice${computerDice[0]}.png`;
    document.getElementById('computerDice2').src = `images/dice${computerDice[1]}.png`;
}

function updateScoreDisplay() {
    document.getElementById('playerScore').innerText = `Player Score: ${playerScore}`;
    document.getElementById('computerScore').innerText = `Computer Score: ${computerScore}`;
}

function declareWinner() {
    let winner = playerScore > computerScore ? 'Player win!' : 'Computer win!';
    let winnerElement = document.getElementById('winner');
    
    winnerElement.innerHTML = `Winner: <span id="winnerName">${winner}</span>`;
    let winnerNameElement = document.getElementById('winnerName');

    if (winner === 'Player win!') {
        winnerNameElement.style.color = 'blue';
    } else {
        winnerNameElement.style.color = 'red';
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    rollCount = 0;
    updateScoreDisplay();
    let winnerElement = document.getElementById('winner');
    winnerElement.innerHTML = 'Winner: ';
    document.getElementById('playerDice').innerText = `Player Dice: `;
    document.getElementById('computerDice').innerText = `Computer Dice: `;
}


window.onload = function() {
    var modal = document.getElementById("rulesModal");
    modal.style.display = "block";
    setTimeout(function() {
        modal.style.opacity = 1;
    }, 10); 
};


var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
    var modal = document.getElementById("rulesModal");
    modal.style.opacity = 0;
    setTimeout(function() {
        modal.style.display = "none";
    }, 500); 
};














