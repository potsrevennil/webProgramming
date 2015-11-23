const React = require('react') ;
// const Rebase = require('re-base');
// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');
//const imgPath = 'images/1';
const cardDeck= [];
const cardColors = ['spade', 'heart', 'diamond', 'club'];
for (let i = 1; i <= 13; i++) {
  cardColors.forEach((color) => {
    cardDeck.push({
      cardValue: `${i}`,
      cardColor: color,
      cardFront: `images/1/${color[0]}${i}.gif`,
      cardBack: 'images/1/b2fv.gif',
    });
  });
}

const initialState = {
    mainDeck: cardDeck,
    dealDeck: [],
    playingDecks: [
      {
        playingDeck:[
          {
            cardValue: '1',
            cardColor: 'spade',
            cardFront: 'images/1/s1.gif',
            cardBack: 'images/1/b2fv.gif'
          }
        ]
      },{
        playingDeck:[
          {
            cardValue: '2',
            cardColor: 'spade',
            cardFront: 'images/1/s2.gif',
            cardBack: 'images/1/b2fv.gif'
          },{
            cardValue: '3',
            cardColor: 'spade',
            cardFront: 'images/1/s3.gif',
            cardBack: 'images/1/b2fv.gif'
          }
        ]
      }
    ]
}

class CardGame extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = initialState ;
  }
  flipCard(mainDeckTop){
    var{mainDeck, dealDeck}= this.state;
    //const mainDeckTop= mainDeck[mainDeck.length-1]; 
    mainDeck.pop();
    dealDeck.push(mainDeckTop);
    this.setState({
        mainDeck: mainDeck,
        dealDeck: dealDeck
    });
  }
  renderMainDeckCard(card, i){
    const{ cardValue, cardColor, cardFront, cardBack}= card;
    return(
      <MainDeckCard
        index= {i}
        value= {cardValue}
        color= {cardColor}
        cardBack= {cardBack}
      />
    );
  }

  renderPlayingDeck(deck, i){
    const{ playingDeck}= deck;
    return (
      <PlayingDeck
        index= {i}
        playingDeck= {playingDeck}
      />
    );
  }

  render(){
    const { mainDeck, dealDeck, playingDecks } = this.state ; 
    const mainDeckTop= mainDeck[mainDeck.length- 1];
    const dealDeckTop= dealDeck[dealDeck.length- 1] || {};
    return(
      <div className= 'cardGame'>
        <div className= 'toolBar'>
          <h3 className = 'gameButton'> Game </h3>
        </div>
        <div className= 'field'>
          <div className= 'mainDeck'>
            <img className= 'card' 
              src= {mainDeckTop.cardBack}
              onClick= {this.flipCard.bind(this,mainDeckTop)}
              className= 'img' 
            />
          </div>
          <div className= 'dealDeck'>
            <img className= 'card'
            src= {dealDeckTop.cardFront} 
            className= 'img' 
            />
          </div>
          <div className= 'playingDecks'>
            {playingDecks.map(this.renderPlayingDeck, this)}
          </div>
        </div>
      </div>
    );
  }
}

// class TargetDecks extends React.Component{
    // render(){
        // return(
        // );
    // }
// }


class MainDeckCard extends React.Component{
  render(){
    const {index, value, color, cardBack} = this.props ;
    return(
      <div>
        <img className= 'mainDeckCard' src= {cardBack} alt= '' className= 'img' />
      </div>
    );
  }
}

class PlayingDeck extends React.Component{
  renderPlayingDeckCard(card, i){
    const{ cardValue, cardColor, cardFront, cardBack}= card ;
    return(
      <PlayingDeckCard
        index = {i}
        value = {cardValue}
        color = {cardColor}
        cardFront = {cardFront}
        cardBack = {cardBack}
      />
    );
  }

  render(){
    const {playingDeck} = this.props ;
    return(
      <div className= 'cards'>
        {playingDeck.map(this.renderPlayingDeckCard,this)}
      </div>
    );
  }
}

class PlayingDeckCard extends React.Component{
  render(){
    const {index, value, color, cardFront, cardBack} = this.props ;
    return(
      <div>
        <img className= 'playingDeckCard' src= {index== 0? cardFront: cardBack}  alt= '' className= 'img' />
      </div>
    );
  }
}

module.exports= CardGame ;
