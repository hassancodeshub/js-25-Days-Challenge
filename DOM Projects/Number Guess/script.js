let random = Math.floor(Math.random()*(100))+1;

let submit = document.querySelector('#sbm');
let input = document.querySelector('#guess');
let remaining = document.querySelector('#left');
let prev = document.querySelector('#guesses');
let hint = document.querySelector('#hint');
let result = document.querySelector('.results');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame)
{
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(input.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100)
    {
        alert("Please enter a valid number!");
    }
    else
    {
        prevGuess.push(guess);
        if(numGuess===11)
        {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${random}`);
            endGame();
        }
        else
        {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess === random)
    {
        displayMessage("You guesse it right!");
        endGame();
    }
    else if(guess<random)
    {
        displayMessage("Number is TOOO LOW!");
    }
    else if(guess>random)
        {
            displayMessage("Number is TOOO HIGH!");
        }
}

function displayGuess(guess){
    input.value = "";
    prev.innerHTML+=`  ${guess}`;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

function displayMessage(message){
    hint.innerHTML = `<h2>${message}</h2>`
}


function endGame(){
    input.value = "";
    input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = 'Start New Game';
    result.appendChild(p);
    playGame = 0;
    p.addEventListener('click',newGame)
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    random = Math.floor(Math.random()*(100))+1;
    prevGuess =[];
    numGuess = 1;
    prev.innerHTML = "";
    remaining.innerHTML = 10;
    input.removeAttribute('disabled');
    result.removeChild(p);
    playGame = true;
    
}
