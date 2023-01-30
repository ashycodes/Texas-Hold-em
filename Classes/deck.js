


export class card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    get getHtml() {
      return `
        <div class="playing-card ${this.suit}" id="${this.rank}">
          <div class="upper-corner">${this.rank}</div>
          <div class="center"></div>
          <div class="lower-corner">${this.rank}</div>
        </div>
      `
    }
};

export class deckOfCards {
    constructor(suits, cards){
      this.suits = ["diamonds", "hearts", "spades", "clubs"];
      this.cards = [];

      var self = this;

      // containing this in the constructor because it doesn't need to be called otherwise
      this.suits.forEach(suit => {
        for (let i = 1; i <= 13; i++) {
          var _ = new card(i, suit);
          self.cards.push(_);
        }
      });
        

      this.shuffle;
    }

    get shuffle() {
      for (var i = this.cards.length - 1; i > 0; i--) {
        const swapIndex = Math.floor(Math.random() * (i + 1))
        const currentCard = this.cards[i]
        const cardToSwap = this.cards[swapIndex]
        this.cards[i] = cardToSwap
        this.cards[swapIndex] = currentCard
      }
      return this.cards
    }


    get dealCard(){
        const nextCard = this.cards.shift();

        return nextCard;
    };
    //deal card function - take item out of deck and return, also removes card from deck
    //console log card that calls deal card functions

};



