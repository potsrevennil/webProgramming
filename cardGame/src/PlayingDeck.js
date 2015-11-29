const React = require('react');
const Card = require('./Card');

class PlayingDeck extends React.Component{
  renderPlayingDeckCard(card, i){
    const{ cardValue, cardType}= card ;
    const{imgDir, playingDeck}= this.props;
    return(
      <div className= 'card' style= {{top: i* 5}}>
       <Card
          imgDir= {imgDir}
          index= {i}
          deck= {playingDeck}
          display= {''}
        />  
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
