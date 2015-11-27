const React = require('react') ;
const Card = require('./Card') ;

class DealDeckCard extends React.Component{
  render(){
    const {src, deck}= this.props;
    const deckTop= deck[deck.length- 1] || {};
    const deckTopid= deck.length? `${deckTop.cardType[0]}${deckTop.cardValue}` : '' ;
    const deckTopCardFront= deck.length? src+ deckTopid+ '.gif' : null;
    return(
      <Card  src= {deckTopCardFront} ID= {deckTopid} />
    );
  }
}

module.exports= DealDeckCard;
