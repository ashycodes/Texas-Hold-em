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
        <div class="player d-flex justify-content-between">
          <div class="player-name">${this.name}</div>
          <div class="player-balance">${this.chips}</div>
        </div>
      `;
    }
};


