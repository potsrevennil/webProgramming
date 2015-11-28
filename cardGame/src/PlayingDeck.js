const React = require('react');
const Card = require('./Card');

class PlayingDeck extends React.Component{
  renderPlayingDeckCard(card, i){
    const{ cardValue, cardType}= card ;
    const{src, playingDeck}= this.props;
    const id= playingDeck.length== 0? '': `${cardType}${cardValue}`;
    const cardFront= src+ id+ '.gif';
    const cardBack= src+ 'b2fv.gif';
    const deckSize= playingDeck.length; 
    return(
      <div className= 'card' style= {{top: i* 5}}>
       <Card src= { deckSize- 1== i? cardFront: cardBack} ID= {id}/>  
      </div>
    );
  }

  render(){
    const {playingDeck} = this.props ;
    return(
      <div className= 'deck'>
        {playingDeck.map(this.renderPlayingDeckCard,this)}
      </div>
    );
  }
}

module.exports = PlayingDeck ;
