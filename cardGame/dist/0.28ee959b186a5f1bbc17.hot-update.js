webpackHotUpdate(0,{

/***/ 308:
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nvar _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar React = __webpack_require__(8);\n// const Rebase = require('re-base');\n// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');\n\nvar initialState = {\n    // targetDecks: [\n    // {\n    // cardArray:[\n    // {\n\n    // }\n    // ]\n    // }\n    // ]\n    decks: [{\n        cardArray: [{\n            cardValue: \"1\",\n            cardColor: \"spade\",\n            pictureSrc: \"https://www.google.com.tw/search?newwindow=1&hl=zh-TW&biw=1366&bih=646&site=imghp&tbm=isch&sa=1&q=%E9%BB%91%E6%A1%83a+2&oq=%E9%BB%91%E6%A1%83a+2&gs_l=img.3...39602.40807.0.41142.2.2.0.0.0.0.38.71.2.2.0....0...1c.1.64.img..1.1.37.JYBK3XUiFaY#imgrc=JEDysuiaRPx7lM%3A\"\n        }]\n    }, {\n        cardArray: [{\n            cardValue: \"2\",\n            cardColor: \"spade\",\n            pictureSrc: \"https://www.google.com.tw/search?newwindow=1&hl=zh-TW&biw=1366&bih=646&site=imghp&tbm=isch&sa=1&q=%E9%BB%91%E6%A1%832&oq=%E9%BB%91%E6%A1%832&gs_l=img.3..0.123386.123523.0.123815.2.2.0.0.0.0.223.254.1j0j1.2.0....0...1c.1.64.img..1.1.223.AKhImR4U73M#imgrc=-_CJnkBDYXZSWM%3A\"\n        }]\n    }]\n\n};\n\nvar CardGame = (function (_React$Component) {\n    _inherits(CardGame, _React$Component);\n\n    function CardGame(props) {\n        _classCallCheck(this, CardGame);\n\n        _get(Object.getPrototypeOf(CardGame.prototype), \"constructor\", this).call(this, props);\n        this.state = initialState;\n    }\n\n    // class TargetDecks extends React.Component{\n    // render(){\n    // return(\n    // );\n    // }\n    // }\n\n    // renderTargetDeck(targetDeck, i){\n    // return(\n    // );\n    // }\n\n    _createClass(CardGame, [{\n        key: \"renderCardBlocks\",\n        value: function renderCardBlocks(deck, i) {\n            var cardArray = deck.cardArray;\n\n            return React.createElement(CardBlocks, {\n                src: cardArray.pictureSrc,\n                cardColor: cardArray.cardColor,\n                cardValue: cardArray.cardValue\n            });\n        }\n    }, {\n        key: \"render\",\n        value: function render() {\n            var _state = this.state;\n            var decks = _state.decks;\n            var targetDecks = _state.targetDecks;\n\n            return React.createElement(\n                \"div\",\n                { className: \"cardGame\" },\n                React.createElement(\n                    \"div\",\n                    { className: \"toolBar\" },\n                    React.createElement(\n                        \"h3\",\n                        { className: \"gameButton\" },\n                        \" Game \"\n                    )\n                ),\n                React.createElement(\n                    \"div\",\n                    { className: \"field\" },\n                    \"// \",\n                    React.createElement(\n                        \"div\",\n                        { className: \"mainDeck\" },\n                        \"// \"\n                    ),\n                    \"// \",\n                    React.createElement(\n                        \"div\",\n                        { className: \"targetRow\" },\n                        \"// \",\n                        targetDecks.map(this.renderTargetDecks, this),\n                        \"// \"\n                    ),\n                    React.createElement(\n                        \"div\",\n                        { className: \"row2\" },\n                        decks.map(this.renderCardBlocks, this)\n                    )\n                )\n            );\n        }\n    }]);\n\n    return CardGame;\n})(React.Component);\n\nvar CardBlocks = (function (_React$Component2) {\n    _inherits(CardBlocks, _React$Component2);\n\n    function CardBlocks() {\n        _classCallCheck(this, CardBlocks);\n\n        _get(Object.getPrototypeOf(CardBlocks.prototype), \"constructor\", this).apply(this, arguments);\n    }\n\n    _createClass(CardBlocks, [{\n        key: \"render\",\n        value: function render() {\n            var _props = this.props;\n            var src = _props.src;\n            var cardColor = _props.cardColor;\n            var cardValue = _props.cardValue;\n\n            return React.createElement(\n                \"div\",\n                null,\n                React.createElement(\"img\", { className: \"displayedCard\", src: src, width: \"50\", height: \"100\", alt: \"\", className: \"img\" })\n            );\n        }\n    }]);\n\n    return CardBlocks;\n})(React.Component);\n\nmodule.exports = CardGame;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/cardGame.js\n ** module id = 308\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/cardGame.js?");

/***/ }

})