webpackHotUpdate(0,{

/***/ 313:
/***/ function(module, exports) {

	eval("'use strict';\n\nvar cardDeck = [];\nvar cardTypes = ['spade', 'heart', 'diamond', 'club'];\ncardTypes.forEach(function (type) {\n  for (var i = 1; i <= 13; i++) {\n    cardDeck.push({\n      cardValue: '' + i,\n      cardType: type\n    });\n  }\n});\n\nvar initialState = {\n  imagePath: 'images/1/',\n  mainDeck: cardDeck,\n  dealDeck: [],\n  targetDecks: [[{\n    cardValue: '5',\n    cardType: 'spade'\n  }], [], [], []],\n  playingDecks: [[], [{\n    cardValue: '2',\n    cardType: 'spade'\n  }, {\n    cardValue: '3',\n    cardType: 'spade'\n  }], [], [], [], [], []]\n};\n\nmodule.exports = initialState;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/initialState.js\n ** module id = 313\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/initialState.js?");

/***/ }

})