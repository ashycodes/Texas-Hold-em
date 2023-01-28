import { gameScreen } from "./gameScreen.js";


export class gameBoard extends gameScreen{
    constructor(){
      super("#gameBoard");
    }
    
    render = (deck, players) => {
      var $cardcontainer = $(".card-container");
      deck.cards.forEach(card => {
        $cardcontainer.append(card.getHtml);
      })

      players.forEach(player => {
        $(".player-preview").append(player.playerPreviewHtml);
      })
    }
  };


