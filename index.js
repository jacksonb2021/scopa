const suits = ["pot","gold","club","sword"];
const ranks = [1,2,3,4,5,6,7,8,9,10]

class Player{
    constructor(){
        this.deck=[];
        this.hand=[];
        this.obtainedCards=[];
    }




    addCardtoDeck(card){
        this.deck.push(card);
    }

    drawHand(){
        this.hand = this.deck.slice(0,3);
        this.deck = this.deck.slice(3);
    }
}

function createDeck(){
    let deck = [];

    for (let suit of suits){
        for (let rank of ranks){
            deck.push({suit,rank})
        }
    }
    return deck;

}


function shuffle(deck){
    for (let i = deck.length-1; i>=1;i--){
        let j = Math.floor(Math.random()*(i+1));
        let temp = deck[j];
        deck[j] = deck[i];
        deck[i]=temp;
    }
    return deck;
}



function dealCards(){


}