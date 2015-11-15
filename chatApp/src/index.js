const React = require('react') ;
const {render} = require('react-dom') ;
const ChatApp = require('./ChatApp') ;
// require.config({
    // path: 'http://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css'
// });
require('./reset.css') ;
require('./style.css') ;



render(<ChatApp />, document.getElementById('root')) ;
