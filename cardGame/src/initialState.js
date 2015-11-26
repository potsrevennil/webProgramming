const cardDeck= [];
const cardTypes= ['spade', 'heart', 'diamond', 'club'];
cardTypes.forEach((type) => {
  for (let i = 1; i <= 13; i++) {
    cardDeck.push({
      cardValue: `${i}`,
      cardType: type,
    });
  }
});

const initialState = {
  imagePath:'images/1/',
  mainDeck: cardDeck,
  dealDeck: [],
  targetDecks: [
    {
      targetDeck:[]
    },{
      targetDeck:[
        {
          cardValue: '5',
          cardType: 'spade',
        }
      ]
    },{
      targetDeck:[]
    },{
      targetDeck:[]
    }
  ],
  playingDecks: [
    {
      playingDeck:[]
    },{
      playingDeck:[
        {
          cardValue: '2',
          cardType: 'spade',
        },
        {
          cardValue: '3',
          cardType: 'spade',
        }
      ]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    }
  ]
}

module.exports = initialState; 
