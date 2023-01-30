import {player} from "./player.js";
import { gameSetup } from "../screens/gamesetup.js";
import { gameBoard } from "../screens/gameboard.js";
import { playerAction } from "../screens/playerActionScreen.js";
import {deckOfCards, card} from "./deck.js";

//game manager class 
//how any players
export class gameManager {
  constructor() {
      this.activePlayersArr = []
      this.registerEventHandlers(this);
      this.deck = new deckOfCards();
      this.sharedHand = [];

      this.setupScreen = new gameSetup();
      this.gameboardScreen = new gameBoard();
  }

  registerEventHandlers(self){
    $("body").on("PlayerRegistrationComplete", (e, names) => {
        // make sure that there aren't any stale players sitting around so game can be fresh
        self.resetGame();

        // create actual players out of the usernames
        for (let i = 1; i <= names.length; i++){
            var name = names[i-1];
            const _ = new player(i, name, 1000);
            self.activePlayersArr.push(_);
        }

        // initiation of gameplay
        self.onSetupCompleted();
    });

    $("body").on("PlayerActionInitiated", (e, pid) => {
      var player = self.activePlayersArr[pid-1];
      var playerTurnScreen = new playerAction(player);
      playerTurnScreen.render();
      playerTurnScreen.show();
    });
  }

  setupGame(){
      this.setupScreen.show();
  }

  onSetupCompleted(){
    this.setupScreen.hide();
    this.initialDeal()
    this.dealCards(3, this.sharedHand);
    this.showGameBoard();
  }

  enterGameFlow(){
    this.initialDeal();


  }

  playerTurn(){

  }

  showGameBoard(){
      this.gameboardScreen.render(this.sharedHand, this.activePlayersArr)
      this.gameboardScreen.show();
  }

  resetGame(){
    this.activePlayersArr = [];
  }

  initialDeal() {
      this.activePlayersArr.forEach(player => {
          this.dealCards(2, player.hand)
      })
      console.log(this.activePlayersArr);
  };

  dealCards(count, dest){
    for(let i = 0; i < count; i++){
      dest.unshift(this.deck.dealCard)
    }
  }

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