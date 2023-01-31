import { gameScreen } from "./gameScreen.js";


export class gameBoard extends gameScreen{
    constructor(){
      super("#gameBoard");
      this.registerEventHandlers(this);
    }

    registerEventHandlers(){
      $("body").on("click", ".player-row .take-action", function(){
          var pid = parseInt($(this).data('pid'));
          $("body").trigger("PlayerActionInitiated", pid);
      });
    }
    
    render = (sharedHand, players) => {
      console.log(players)
      var $cardcontainer = $(".shared-hand");
      sharedHand.forEach(card => {
        $cardcontainer.append(card.getHtml);
      });

      players.forEach(player => {
        $(".player-preview").append(player.playerPreviewHtml);
      })
    }
  };


