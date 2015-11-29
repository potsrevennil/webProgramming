const React = require('react') ;
const Card = require('./Card') ;

class MainDeck extends React.Component{
  render(){
    const {index, deck, onClick, imgDir} = this.props ;
    return(
      <div className= 'card' style= {{bottom: index* -0.2, left: index* 0.3}} onClick= {onClick}>
        <Card
          imgDir= {imgDir}
          index= {index}
          deck= {deck}
          display= {'back'}
        />
      </div>
    );
  }
}

module.exports = MainDeck ;
