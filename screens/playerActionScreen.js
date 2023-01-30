import { gameScreen } from "./gameScreen.js";

export class playerAction extends gameScreen {
    constructor (player){
        super("#playerAction");
        this.registerEventHandlers(this);
        this.player = player;
     }

     registerEventHandlers(self) {

     }

     render(){
        var html = `
            <div class="player-header d-flex justify-content-between">
                <h3 class="text-center">${this.player.name}</h3>
                <h3 class="text-secondary">$${this.player.chips}</h3>
            </div>
            <div class="card-container justify-content-center">
                ${this.player.hand.map((card, index) => `
                    ${card.getHtml}
                `.trim()).join('')}
            </div>
            <button class="btn btn-primary form-control mb-2 fold">Call</button>
            <button class="btn btn-secondary form-control mb-2 fold">Raise</button>
            <button class="btn btn-secondary form-control mb-2 fold">Check</button>
            <button class="btn btn-danger form-control mb-2 fold">Fold</button>
        `;

        super.render("#playerAction", html);
     }
}