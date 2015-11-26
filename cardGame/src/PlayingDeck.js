const React = require('react');

class PlayingDeck extends React.Component{
  renderPlayingDeckCard(card, i){
    const{ cardValue, cardType}= card ;
    const{src, playingDeck}= this.props;
    return(
      <PlayingDeckCard
        deckSize= {playingDeck.length}
        index= {i}
        value= {cardValue}
        type= {cardType}
        src= {src}
      />
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

class PlayingDeckCard extends React.Component{
  render(){
    const{ deckSize, index, value, type, src} = this.props ;
    const cardFront= src== null? src: src+ `${type[0]}${value}.gif`;
    const cardBack= src== null? src: src+ 'b2fv.gif';
    return(
      <div className= 'card' style= {{top: index* 5}}>
        <img  
          src= { deckSize- 1== index? cardFront: cardBack}  
          className= 'img'
        />
      </div>
    );
  }
}

module.exports = PlayingDeck ;
