import {player} from "./player.js";
import { gameSetup } from "../screens/gamesetup.js";
import { gameBoard } from "../screens/gameboard.js";
import {deckOfCards, card} from "./deck.js";

//game manager class 
//how any players
export class gameManager {
  constructor() {
      this.activePlayersArr = []
      this.registerEventHandlers(this);
      this.deck = new deckOfCards();

      this.setupScreen = new gameSetup();
      this.gameboardScreen = new gameBoard();
  }

  registerEventHandlers(self){
    $("body").on("PlayerRegistrationComplete", (e, names) => {
        self.resetGame();
        for (let i = 1; i <= names.length; i++){
            var name = names[i-1];
            const _ = new player(i, name, 1000);
            self.activePlayersArr.push(_);
        }

        self.setupScreen.hide()
        self.showGameBoard();
    })
  }

  setupGame(){
      this.setupScreen.show();
  }

  showGameBoard(){
      this.gameboardScreen.render(this.deck, this.activePlayersArr)
      this.gameboardScreen.show();
  }

  resetGame(){
    this.activePlayersArr = [];
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