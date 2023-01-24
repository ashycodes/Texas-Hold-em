

//Texas Hold'em!




//store cards in an object
//52 cards all assigned a value based on rank and suit 


class deckOfCards {
    constructor(rank, suit){
        this.rank = rank;
        this.suit = suit;
    }
};


const aceOfHearts = new deckOfCards(1, "Hearts");
const aceOfDiamonds = new deckOfCards(1, "Diamonds");
const aceOfSpades = new deckOfCards(1, "Spades");
const aceOfClubs = new deckOfCards(1, "Clubs");
const twoOfHearts = new deckOfCards(2, "Hearts");
const twoOfDiamonds = new deckOfCards(2, "Diamonds");
const twoOfSpades = new deckOfCards(2, "Spades");
const twoOfClubs = new deckOfCards(2, "Clubs");
const threeOfHearts = new deckOfCards(3, "Hearts");
const threeOfDiamonds = new deckOfCards(3, "Diamonds");
const threeOfSpades = new deckOfCards(3, "Spades");
const threeOfClubs = new deckOfCards(3, "Clubs");
const fourOfHearts = new deckOfCards(4, "Hearts");
const fourOfDiamonds = new deckOfCards(4, "Diamonds");
const fourOfSpades = new deckOfCards(4, "Spades");
const fourOfClubs = new deckOfCards(4, "Clubs");
const fiveOfHearts = new deckOfCards(5, "Hearts");
const fiveOfDiamonds = new deckOfCards(5, "Diamonds");
const fiveOfSpades = new deckOfCards(5, "Spades");
const fiveOfClubs = new deckOfCards(5, "Clubs");
const sixOfHearts = new deckOfCards(6, "Hearts");
const sixOfDiamonds = new deckOfCards(6, "Diamonds");
const sixOfSpades = new deckOfCards(6, "Spades");
const sixOfClubs = new deckOfCards(6, "Clubs");
const sevenOfHearts = new deckOfCards(7, "Hearts");
const sevenOfDiamonds = new deckOfCards(7, "Diamonds");
const sevenOfSpades = new deckOfCards(7, "Spades");
const sevenOfClubs = new deckOfCards(7, "Clubs");
const eightOfHearts = new deckOfCards(8, "Hearts");
const eightOfDiamonds = new deckOfCards(8, "Diamonds");
const eightOfSpades = new deckOfCards(8, "Spades");
const eightOfClubs = new deckOfCards(8, "Clubs");
const nineOfHearts = new deckOfCards(9, "Hearts");
const nineOfDiamonds = new deckOfCards(9, "Diamonds");
const nineOfSpades = new deckOfCards(9, "Spades");
const nineOfClubs = new deckOfCards(9, "Clubs");
const tenOfHearts = new deckOfCards(10, "Hearts");
const tenOfDiamonds = new deckOfCards(10, "Diamonds");
const tenOfSpades = new deckOfCards(10, "Spades");
const tenOfClubs = new deckOfCards(10, "Clubs");
const jackOfHearts = new deckOfCards(11, "Hearts");
const jackOfDiamonds = new deckOfCards(11, "Diamonds");
const jackOfSpades = new deckOfCards(11, "Spades");
const jackOfClubs = new deckOfCards(11, "Clubs");
const queenOfHearts = new deckOfCards(12, "Hearts");
const queenOfDiamonds = new deckOfCards(12, "Diamonds");
const queenOfSpades = new deckOfCards(12, "Spades");
const queenOfClubs = new deckOfCards(12, "Clubs");
const kingOfHearts = new deckOfCards(13, "Hearts");
const kingOfDiamonds = new deckOfCards(13, "Diamonds");
const kingOfSpades = new deckOfCards(13, "Spades");
const kingOfClubs = new deckOfCards(13, "Clubs");


// Empty array to push card objects
const cardArray = [];
cardArray.push(
    kingOfClubs, 
    kingOfSpades, 
    kingOfDiamonds, 
    kingOfHearts, 
    queenOfClubs, 
    queenOfSpades, 
    queenOfDiamonds, 
    queenOfHearts, 
    jackOfClubs, 
    jackOfSpades, 
    jackOfDiamonds, 
    jackOfHearts,
    tenOfClubs,
    tenOfSpades,
    tenOfDiamonds,
    tenOfHearts,
    nineOfClubs,
    nineOfSpades,
    nineOfDiamonds,
    nineOfHearts,
    eightOfClubs,
    eightOfSpades,
    eightOfDiamonds,
    eightOfHearts,
    sevenOfClubs,
    sevenOfSpades,
    sevenOfDiamonds,
    sevenOfHearts,
    sixOfClubs,
    sixOfSpades,
    sixOfDiamonds,
    sixOfHearts,
    fiveOfClubs,
    fiveOfSpades,
    fiveOfDiamonds,
    fiveOfHearts,
    fourOfClubs,
    fourOfSpades,
    fourOfDiamonds,
    fourOfHearts,
    threeOfClubs,
    threeOfSpades,
    threeOfDiamonds,
    threeOfHearts,
    twoOfClubs,
    twoOfSpades,
    twoOfDiamonds,
    twoOfHearts,
    aceOfClubs,
    aceOfSpades,
    aceOfDiamonds,
    aceOfHearts
);

//shuffle fuction based on Fisher-Yates Algorithm. Wouuld be cool to shuffle using cloudflare or random.org api
const shuffle = (deck) => {
  for (var i = deck.length - 1; i > 0; i--) {
    const swapIndex = Math.floor(Math.random() * (i + 1))
    const currentCard = deck[i]
    const cardToSwap = deck[swapIndex]
    deck[i] = cardToSwap
    deck[swapIndex] = currentCard
  }
  return deck
}




shuffle(cardArray)
console.log(cardArray);




















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