const cardDeck= [];
const cardTypes= ['spade', 'heart', 'diamond', 'club'];
cardTypes.forEach((type) => {
  for (let i = 1; i <= 13; i++) {
    cardDeck.push({
      cardValue: `${i}`,
      cardType: type[0],
    });
  }
});

const initialState = {
  imgDir:'webProgramming/cardGame/images/1/',
  mainDeck: cardDeck,
  dealDeck: [],
  targetDecks:[ 
          [
            {
              cardValue: '5',
              cardType: 's'
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
          cardType: 's',
        },
        {
          cardValue: '3',
          cardType: 's',
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
