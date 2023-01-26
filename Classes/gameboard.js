


export class gameBoard {
    constructor(deck){
      this.deck = deck;
    }
    
    render = () => {
      var $cardcontainer = $(".card-container");
      this.deck.cards.forEach(card => {
        $cardcontainer.append(card.getHtml);
      })
    }
  };


