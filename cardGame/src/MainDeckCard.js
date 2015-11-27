const React = require('react') ;
const Card = require('./Card') ;

class MainDeckCard extends React.Component{
  render(){
    const {index, value, type, onClick, src} = this.props ;
    return(
      <div className= 'card' style= {{bottom: index* -0.2, left: index* 0.3}} onClick= {onClick}>
        <Card 
          src= {src+ 'b2fv.gif'}
          ID= {`${type[0]}${value}`}
        />
      </div>
    );
  }
}

module.exports = MainDeckCard ;
