

//Texas Hold'em!

import {deckOfCards, card} from "./Classes/deck.js";
import {gameBoard} from "./Classes/gameboard.js";
import {player} from "./Classes/player.js";




const deck = new deckOfCards();
const board = new gameBoard(deck);


//board.render()

//game manager class 
//how any players
class gameManager {
    constructor(activePlayers) {
        this.activePlayersArr = []
    }




    get startGame() {
        this.activePlayers.forEach(player => {
            for (let i = 1; i <= activePlayers; i++) {
                activePlayersArr.hand.unshift(deck.dealCard);
            };

    })

};

//startGame func - dealing out cards to players and accepting buyin
//roundBetting func 
//flop func
//betting/turn phase 
//turn
//betting
//river
//betting
//logic for players hands
//split pot
//clear players hands
//shuffle new deck





};





const player1 = new player(1, "Ashy", 1000);
player1.hand.unshift(deck.dealCard);
player1.hand.unshift(deck.dealCard);
console.log(player1.hand);
console.log(deck);




const start = new gameManager(player1); 
//console.log(start.startGame)



