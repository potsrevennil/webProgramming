const React = require('react') ;

class MainDeckCard extends React.Component{
  render(){
    const {index, value, type, onClick, src} = this.props ;
    return(
      <div className= 'card' style= {{bottom: index* -0.2, left: index* 0.3}}>
        <img 
          src= {src+ 'b2fv.gif'}
          onClick= {onClick}
          className= 'img' />
      </div>
    );
  }
}

module.exports = MainDeckCard ;
