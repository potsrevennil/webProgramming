webpackHotUpdate(0,{

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(8);\n// const Rebase = require('re-base');\n// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');\n//const imgPath = 'images/1';\nvar cardDeck = [];\nvar cardColors = ['spade', 'diamond', 'heart', 'club'];\n\nvar _loop = function (i) {\n  cardColors.forEach(function (color) {\n    cardDeck.push({\n      cardValue: '' + i,\n      cardColor: color,\n      cardFront: 'images/1/' + color[0] + i + '.gif',\n      cardBack: 'images/1/b2fv.gif'\n    });\n  });\n};\n\nfor (var i = 1; i <= 13; i++) {\n  _loop(i);\n}\n\nvar initialState = {\n  mainDeck: cardDeck,\n  dealDeck: [],\n  playingDecks: [{\n    playingDeck: [{\n      cardValue: \"1\",\n      cardColor: \"spade\",\n      cardFront: \"images/1/s1.gif\",\n      cardBack: \"images/1/b2fv.gif\"\n    }]\n  }, {\n    playingDeck: [{\n      cardValue: \"2\",\n      cardColor: \"spade\",\n      cardFront: \"images/1/s2.gif\",\n      cardBack: \"images/1/b2fv.gif\"\n    }, {\n      cardValue: \"3\",\n      cardColor: \"spade\",\n      cardFront: \"images/1/s3.gif\",\n      cardBack: \"images/1/b2fv.gif\"\n    }]\n  }]\n};\n\nvar CardGame = (function (_React$Component) {\n  _inherits(CardGame, _React$Component);\n\n  function CardGame(props) {\n    _classCallCheck(this, CardGame);\n\n    _get(Object.getPrototypeOf(CardGame.prototype), 'constructor', this).call(this, props);\n    this.state = initialState;\n  }\n\n  // class TargetDecks extends React.Component{\n  // render(){\n  // return(\n  // );\n  // }\n  // }\n\n  _createClass(CardGame, [{\n    key: 'flipCard',\n    value: function flipCard() {\n      var _state = this.state;\n      var mainDeck = _state.mainDeck;\n      var dealDeck = _state.dealDeck;\n\n      var mainDeckTop = mainDeck[mainDeck.length - 1];\n      mainDeck.pop();\n      //if( dealDeck.length != 0){\n      //mainDeck.splice(0, 0, dealDeck[0]);\n      //dealDeck.pop();\n      //}\n      dealDeck.push(mainDeckTop);\n      this.setState({\n        mainDeck: mainDeck,\n        dealDeck: dealDeck\n\n      });\n    }\n  }, {\n    key: 'renderMainDeckCard',\n    value: function renderMainDeckCard(card, i) {\n      var cardValue = card.cardValue;\n      var cardColor = card.cardColor;\n      var cardFront = card.cardFront;\n      var cardBack = card.cardBack;\n\n      return React.createElement(MainDeckCard, {\n        index: i,\n        value: cardValue,\n        color: cardColor,\n        cardBack: cardBack\n      });\n    }\n  }, {\n    key: 'renderPlayingDeck',\n    value: function renderPlayingDeck(deck, i) {\n      var playingDeck = deck.playingDeck;\n\n      return React.createElement(PlayingDeck, {\n        index: i,\n        playingDeck: playingDeck\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state2 = this.state;\n      var mainDeck = _state2.mainDeck;\n      var dealDeck = _state2.dealDeck;\n      var playingDecks = _state2.playingDecks;\n\n      var mainDeckTop = mainDeck[mainDeck.length - 1];\n      var dealDeckTop = dealDeck[dealDeck.length - 1] || {};\n      return React.createElement(\n        'div',\n        { className: 'cardGame' },\n        React.createElement(\n          'div',\n          { className: 'toolBar' },\n          React.createElement(\n            'h3',\n            { className: 'gameButton' },\n            ' Game '\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'field' },\n          React.createElement(\n            'div',\n            { className: 'mainDeck' },\n            React.createElement('img', { className: 'card',\n              src: mainDeckTop.cardFront,\n              onclick: this.flipCard.bind(this),\n              className: 'img'\n            })\n          ),\n          React.createElement(\n            'div',\n            { className: 'dealDeck' },\n            React.createElement('img', { className: 'card',\n              src: dealDeckTop.cardFront,\n              className: 'img'\n            })\n          ),\n          React.createElement(\n            'div',\n            { className: 'playingDecks' },\n            playingDecks.map(this.renderPlayingDeck, this)\n          )\n        )\n      );\n    }\n  }]);\n\n  return CardGame;\n})(React.Component);\n\nvar MainDeckCard = (function (_React$Component2) {\n  _inherits(MainDeckCard, _React$Component2);\n\n  function MainDeckCard() {\n    _classCallCheck(this, MainDeckCard);\n\n    _get(Object.getPrototypeOf(MainDeckCard.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(MainDeckCard, [{\n    key: 'render',\n    value: function render() {\n      var _props = this.props;\n      var index = _props.index;\n      var value = _props.value;\n      var color = _props.color;\n      var cardBack = _props.cardBack;\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement('img', { className: 'mainDeckCard', src: cardBack, alt: '', className: 'img' })\n      );\n    }\n  }]);\n\n  return MainDeckCard;\n})(React.Component);\n\nvar PlayingDeck = (function (_React$Component3) {\n  _inherits(PlayingDeck, _React$Component3);\n\n  function PlayingDeck() {\n    _classCallCheck(this, PlayingDeck);\n\n    _get(Object.getPrototypeOf(PlayingDeck.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(PlayingDeck, [{\n    key: 'renderPlayingDeckCard',\n    value: function renderPlayingDeckCard(card, i) {\n      var cardValue = card.cardValue;\n      var cardColor = card.cardColor;\n      var cardFront = card.cardFront;\n      var cardBack = card.cardBack;\n\n      return React.createElement(PlayingDeckCard, {\n        index: i,\n        value: cardValue,\n        color: cardColor,\n        cardFront: cardFront,\n        cardBack: cardBack\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var playingDeck = this.props.playingDeck;\n\n      return React.createElement(\n        'div',\n        { className: 'cards' },\n        playingDeck.map(this.renderPlayingDeckCard, this)\n      );\n    }\n  }]);\n\n  return PlayingDeck;\n})(React.Component);\n\nvar PlayingDeckCard = (function (_React$Component4) {\n  _inherits(PlayingDeckCard, _React$Component4);\n\n  function PlayingDeckCard() {\n    _classCallCheck(this, PlayingDeckCard);\n\n    _get(Object.getPrototypeOf(PlayingDeckCard.prototype), 'constructor', this).apply(this, arguments);\n  }\n\n  _createClass(PlayingDeckCard, [{\n    key: 'render',\n    value: function render() {\n      var _props2 = this.props;\n      var index = _props2.index;\n      var value = _props2.value;\n      var color = _props2.color;\n      var cardFront = _props2.cardFront;\n      var cardBack = _props2.cardBack;\n\n      return React.createElement(\n        'div',\n        null,\n        React.createElement('img', { className: 'playingDeckCard', src: index == 0 ? cardFront : cardBack, alt: '', className: 'img' })\n      );\n    }\n  }]);\n\n  return PlayingDeckCard;\n})(React.Component);\n\nmodule.exports = CardGame;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/CardGame.js\n ** module id = 308\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/CardGame.js?");

/***/ }

})