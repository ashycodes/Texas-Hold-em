

//Texas Hold'em!




//store cards in an object
//52 cards all assigned a value based on rank and suit 
class gameBoard {
  constructor(deck){
    this.deck = deck;
  }
  
  render = () => {
    var $cardcontainer = $(".card-container");
    deck.cards.forEach(card => {
      $cardcontainer.append(card.getHtml);
    })
  }
}


class card {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }

    get getHtml() {
      return `
        <div class="card ${this.suit}" id="${this.rank}">
          <div class="upper-corner">${this.rank}</div>
          <div class="center"></div>
          <div class="lower-corner">${this.rank}</div>
        </div>
      `
    }
};

class deckOfCards {
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
};

const deck = new deckOfCards();
const board = new gameBoard(deck);

board.render()


//(carry over chips)

//(buy in)

//deal the cards (1 player no computer)

//betting

//reveal first 3 cards

//betting/end

//reaveal next card

//final betting/end

//reveal cards

//decide winner based on hand

//(calculate and disperse chips for next round)