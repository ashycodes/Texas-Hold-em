import { gameScreen } from "./gameScreen.js";

export class gameSetup extends gameScreen {
    constructor (){
        super("#gameSetup");
        this.registerEventHandlers(this);
     }

     registerEventHandlers(self) {
        $(".game-setup #start-game").on("click", function(){
            var players = self.getPlayerNames();
            $("body").trigger('PlayerRegistrationComplete',  [players]);
        });

        $(".game-setup .add-player").on("click", function(){
            self.addNewPlayer();
        });
     }

     addNewPlayer(){
        var usernameHtml = `<input class="form-control mb-2 player-name" type="text">`
        $("#usernames").append(usernameHtml);
     }

     getPlayerNames(){
        var inputs = $("#usernames").find(".player-name");
        var names = [];

        inputs.each(function() {
            names.push($(this).val());
        });

        return names;
     }
}