import {player} from "./player.js";
import { gameSetup } from "../screens/gamesetup.js";
import { gameBoard } from "../screens/gameboard.js";
import { playerAction } from "../screens/playerActionScreen.js";
import {deckOfCards, card} from "./deck.js";
import { LocalStorageInterface } from "./localstorageinterface.js";

//game manager class 
//how any players
export class gameManager {
  constructor() {
      this.registerEventHandlers(this);
      this.deck = new deckOfCards();
      this.sharedHand = [];
      this.storage = new LocalStorageInterface();

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
            self.storage.updatePlayer(_);
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

    $("#resetGame").on("click", function(){
      self.resetGame();
      self.initiate();
    });
  }

  initiate(){
    if(this.activePlayersArr.length > 0){ this.resumeActiveGame(); }
    else { this.setupGame(); }
  }

  setupGame(){
      this.setupScreen.show();
  }

  resumeActiveGame(){
    this.showGameBoard();
      // initiate play loop
  }

  onSetupCompleted(){
    this.setupScreen.hide();
    // this.initialDeal()
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
    this.gameboardScreen.hide();
    this.storage.resetGame();
  }

  initialDeal() {
      this.activePlayersArr.forEach(player => {
          this.dealCards(2, player.hand)
      })
  };

  dealCards(count, dest){
    for(let i = 0; i < count; i++){
      dest.unshift(this.deck.dealCard)
    }
  }

  get activePlayersArr(){
    return this.storage.getActivePlayers();
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