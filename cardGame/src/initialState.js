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
  targetDecks:[ 
          [
            {
              cardValue: '5',
              cardType: 'spade'
            }
          ],[
          ],[
          ],[
          ]
  ],
  playingDecks: [
    [],
    [
        {
          cardValue: '2',
          cardType: 'spade',
        },
        {
          cardValue: '3',
          cardType: 'spade',
        }
    ],
    [],
    [],
    [],
    [],
    []
  ]
}

module.exports = initialState; 
