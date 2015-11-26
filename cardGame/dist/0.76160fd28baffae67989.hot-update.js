webpackHotUpdate(0,{

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(8);\nvar PlayingDeck = __webpack_require__(309);\nvar MainDeckCard = __webpack_require__(310);\nvar DealDeckCard = __webpack_require__(449);\nvar TargetDeck = __webpack_require__(311);\nvar initialState = __webpack_require__(312);\n//const DragDropContext = require('react-dnd').DragDropContext;\n//const HTML5Backend = require('react-dnd-html5-backend');\n// const Rebase = require('re-base');\n// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');\n\nvar CardGame = (function (_React$Component) {\n  _inherits(CardGame, _React$Component);\n\n  function CardGame(props) {\n    _classCallCheck(this, CardGame);\n\n    _get(Object.getPrototypeOf(CardGame.prototype), 'constructor', this).call(this, props);\n    this.state = initialState;\n  }\n\n  _createClass(CardGame, [{\n    key: 'flipCard',\n    value: function flipCard() {\n      var _state = this.state;\n      var mainDeck = _state.mainDeck;\n      var dealDeck = _state.dealDeck;\n\n      if (mainDeck.length == 1 && dealDeck.length != 0) {\n        var reverse = dealDeck.splice(0, dealDeck.length).reverse();\n        mainDeck.splice.apply(mainDeck, [0, 0].concat(reverse));\n      }\n      var mainDeckTop = mainDeck[mainDeck.length - 1];\n      mainDeck.pop();\n      dealDeck.push(mainDeckTop);\n      this.setState({\n        mainDeck: mainDeck,\n        dealDeck: dealDeck\n      });\n    }\n  }, {\n    key: 'renderMainDeckCard',\n    value: function renderMainDeckCard(card, i) {\n      var cardValue = card.cardValue;\n      var cardType = card.cardType;\n      var imagePath = this.state.imagePath;\n\n      return React.createElement(MainDeckCard, {\n        index: i,\n        value: cardValue,\n        type: cardType,\n        onClick: this.flipCard.bind(this),\n        src: imagePath\n      });\n    }\n  }, {\n    key: 'renderTargetDeck',\n    value: function renderTargetDeck(deck, i) {\n      var targetDeck = deck.targetDeck;\n      var imagePath = this.state.imagePath;\n\n      return React.createElement(TargetDeck, {\n        index: i,\n        src: imagePath,\n        targetDeck: targetDeck\n      });\n    }\n  }, {\n    key: 'renderPlayingDeck',\n    value: function renderPlayingDeck(deck, i) {\n      var playingDeck = deck.playingDeck;\n      var imagePath = this.state.imagePath;\n\n      return React.createElement(PlayingDeck, {\n        index: i,\n        src: playingDeck.length == 0 ? null : imagePath,\n        playingDeck: playingDeck\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _state2 = this.state;\n      var imagePath = _state2.imagePath;\n      var mainDeck = _state2.mainDeck;\n      var dealDeck = _state2.dealDeck;\n      var targetDecks = _state2.targetDecks;\n      var playingDecks = _state2.playingDecks;\n\n      var dealDeckTop = dealDeck[dealDeck.length - 1] || {};\n      var dDTCardFront = dealDeck.length ? imagePath + ('' + dealDeckTop.cardType[0] + dealDeckTop.cardValue + '.gif') : null;\n      return React.createElement(\n        'div',\n        { className: 'cardGame' },\n        React.createElement(\n          'div',\n          { className: 'toolBar' },\n          React.createElement(\n            'h3',\n            { className: 'gameButton' },\n            ' Game '\n          )\n        ),\n        React.createElement(\n          'div',\n          { className: 'field' },\n          React.createElement(\n            'div',\n            { className: 'decks', id: 'mainDeck' },\n            mainDeck.map(this.renderMainDeckCard, this)\n          ),\n          React.createElement(\n            'div',\n            { className: 'decks', id: 'dealDeck' },\n            React.createElement(DealDeckCard, { src: dDTCardFront })\n          ),\n          React.createElement(\n            'div',\n            { className: 'decks', id: 'targetDecks' },\n            targetDecks.map(this.renderTargetDeck, this)\n          ),\n          React.createElement(\n            'div',\n            { className: 'decks', id: 'playingDecks' },\n            playingDecks.map(this.renderPlayingDeck, this)\n          )\n        )\n      );\n    }\n  }]);\n\n  return CardGame;\n})(React.Component);\n\nmodule.exports = CardGame;\n//module.exports= DragDropContext(HTML5Backend)(CardGame) ;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/CardGame.js\n ** module id = 308\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/CardGame.js?");

/***/ }

})