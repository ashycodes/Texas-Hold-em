//choose how many players at least 2 
// player class, handles hands 
export class player {
    constructor(id, name, chips, hand){
      this.id = id;
      this.name = name;
      this.chips = chips;
      this.hand = [];
    };


    buyIn() {
      this.chips -= 5;
  
    };
  
    call() {
  
    };
  
    check() {
  
    };
  
    raise() {
  
    };
  
    fold() {
  
    };
    
    get playerPreviewHtml(){
      return `
        <div class="player-row card bg-secondary mb-3 p-3">
          <div class="player-summary d-flex justify-content-between mb-3">
            <div class="player-name">${this.name}</div>
            <div class="player-balance">$${this.chips}</div>
          </div>

          <div class="active-turn">
            <button class="btn btn-primary form-control take-action" data-pid="${this.id}">Take Action</button>
          </div>
        </div>
      `;
    }
};


