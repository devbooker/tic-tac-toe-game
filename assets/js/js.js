var player, winner = null;
var selectedPlayer = document.getElementById( elementid = 'selected-player');
var selectedWinner = document.getElementById( elementid = 'selected-winner');
var squares = document.getElementsByClassName(classNames = 'square');

changePlayer(value = 'X')

function chooseSquare(id){
    if(winner !== null){
        return;
    }

    var square = document.getElementById(id); 
    if(square.innerHTML !== '-'){
        return;
    }

    square.innerHTML = player;
    square.style.color = '#000';

    if(player === 'X') {
        player = 'O';
    } else{
        player = 'X';
    }

    changePlayer(player);
    checkWinner();
}

function changePlayer(value){
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWinner(){
    var square1 = document.getElementById(elementid = '1');
    var square2 = document.getElementById(elementid = '2');
    var square3 = document.getElementById(elementid = '3');
    var square4 = document.getElementById(elementid = '4');
    var square5 = document.getElementById(elementid = '5');
    var square6 = document.getElementById(elementid = '6');
    var square7 = document.getElementById(elementid = '7');
    var square8 = document.getElementById(elementid = '8');
    var square9 = document.getElementById(elementid = '9');

    if(checkSequence(square1, square2, square3)){
        changeSquareColor(square1, square2, square3);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square4, square5, square6)){
        changeSquareColor(square4, square5, square6);
        changeWinner(square4);
        return;
    }

    if(checkSequence(square7, square8, square9)){
        changeSquareColor(square7, square8, square9);
        changeWinner(square7);
        return;
    }

    if(checkSequence(square1, square4, square7)){
        changeSquareColor(square1, square4, square7);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square2, square5, square8)){
        changeSquareColor(square2, square5, square8);
        changeWinner(square2);
        return;
    }

    if(checkSequence(square3, square6, square9)){
        changeSquareColor(square3, square6, square9);
        changeWinner(square3);
        return;
    }

    if(checkSequence(square1, square5, square9)){
        changeSquareColor(square1, square5, square9);
        changeWinner(square1);
        return;
    }

    if(checkSequence(square7, square5, square3)){
        changeSquareColor(square7, square5, square3);
        changeWinner(square7);
        return;
    }
}

function changeWinner(square){
    winner = square.innerHTML;
    selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3){
    square1.style.background = '#FF0000';
    square1.style.color = '#FFFF00';
    square2.style.background = '#FFFFFF';
    square2.style.color = '#FFFF00';
    square3.style.background = '#000000';
    square3.style.color = '#FFFF00';
}

function checkSequence(square1, square2, square3){
    var equal = false;

    if(square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML){
        equal = true;
    }

    return equal;
}

function playAgain(){
    winner = null;
    selectedWinner.innerHTML = '';

    for(var i = 1; i <= 9; i++){
        var square = document.getElementById(i);
        square.style.background = '#A4A4A4';
        square.style.color = '#A4A4A4';
        square.innerHTML = '-';
    }

    changePlayer(value = 'X');
}