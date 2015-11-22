const React = require('react') ;
const {render} = require('react-dom') ;
const CardGame = require('./CardGame') ;

require('./style.css');

render(<CardGame />, document.getElementById('root')) ;
