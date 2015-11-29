const React = require('react') ;
const Card = require('./Card') ;

class DealDeck extends React.Component{
  render(){
    const {imgDir, deck}= this.props;
    return(
      <Card  
        imgDir= {imgDir} 
        index= {deck.length- 1}
        deck= {deck}
        display= {'front'}
      />
    );
  }
}

module.exports= DealDeck;
