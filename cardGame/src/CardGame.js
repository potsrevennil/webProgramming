const React = require('react') ;
// const Rebase = require('re-base');
// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');
//const imgPath = 'images/1';
const cardDeck= [];
const cardTypes= ['spade', 'heart', 'diamond', 'club'];
cardTypes.forEach((type) => {
  for (let i = 1; i <= 13; i++) {
    cardDeck.push({
      cardValue: `${i}`,
      cardType: type,
    });
  }
});


const initialState = {
  imagePath:'images/1/',
  mainDeck: cardDeck,
  dealDeck: [],
  targetDecks: [
    {
      targetDeck:[]
    },{
      targetDeck:[
        {
          cardValue: '5',
          cardType: 'spade',
        }
      ]
    },{
      targetDeck:[]
    },{
      targetDeck:[]
    }
  ],
  playingDecks: [
    {
      playingDeck:[]
    },{
      playingDeck:[
        {
          cardValue: '2',
          cardType: 'spade',
        },
        {
          cardValue: '3',
          cardType: 'spade',
        }
      ]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    },{
      playingDeck:[]
    }
  ]
}

class CardGame extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = initialState ;
  }
  flipCard(){
    var{mainDeck, dealDeck}= this.state;
    if(mainDeck.length== 1 && dealDeck.length!= 0){
      let reverse= dealDeck.splice(0,dealDeck.length).reverse();
      mainDeck.splice.apply(mainDeck, [0,0].concat(reverse));
    }
    const mainDeckTop= mainDeck[mainDeck.length-1]; 
    mainDeck.pop();
    dealDeck.push(mainDeckTop);
    this.setState({
        mainDeck: mainDeck,
        dealDeck: dealDeck
    });
  }
  renderMainDeckCard(card, i){
    const{ cardValue, cardType}= card;
    const{ imagePath}= this.state;
    return(
      <MainDeckCard
        index= {i}
        value= {cardValue}
        type= {cardType}
        onClick= {this.flipCard.bind(this)}
        src= {imagePath}
      />
    );
  }
  
  renderTargetDeck(deck, i){
    const{ targetDeck}= deck;
    const{imagePath}= this.state;
    return (
        <TargetDeck
          index= {i}
          src= {imagePath}
          targetDeck= {targetDeck}
        />
    );
  }
  renderPlayingDeck(deck, i){
    const{ playingDeck}= deck;
    const{imagePath}= this.state;
    return (
      <PlayingDeck
        index= {i}
        src= {playingDeck.length==0 ? null: imagePath}
        playingDeck= {playingDeck}
      />
    );
  }

  render(){
    const { imagePath, mainDeck, dealDeck, targetDecks, playingDecks } = this.state ; 
    const mainDeckTop= mainDeck[mainDeck.length- 1] || {};
    const mDTCardBack= imagePath+ 'b2fv.gif';
    const dealDeckTop= dealDeck[dealDeck.length- 1] || {};
    const dDTCardFront= dealDeck.length? imagePath+`${dealDeckTop.cardType[0]}${dealDeckTop.cardValue}.gif` : null;
    return(
      <div className= 'cardGame'>
        <div className= 'toolBar'>
          <h3 className = 'gameButton'> Game </h3>
        </div>
        <div className= 'field'>
          <div className= 'decks' id= 'mainDeck'>
            {mainDeck.map(this.renderMainDeckCard, this)}
          </div>
          <div className= 'decks' id= 'dealDeck'>
            <img
            src= {dDTCardFront} 
            className= 'img' 
            />
          </div>
          <div className= 'decks' id= 'targetDecks'>
            {targetDecks.map(this.renderTargetDeck, this)}
          </div>
          <div className= 'decks' id= 'playingDecks'>
            {playingDecks.map(this.renderPlayingDeck, this)}
          </div>
        </div>
      </div>
    );
  }
}

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

class TargetDeck extends React.Component{
  render(){
    const{index, src, targetDeck}= this.props;
    const targetDeckTop= targetDeck[targetDeck.length- 1]|| {}; 
    const tDTCardFront= targetDeck.length? src+`${targetDeckTop.cardType[0]}${targetDeckTop.cardValue}.gif` : null;
    return(
      <div className= 'deck'>
        <img
        src= {tDTCardFront} 
        className= 'img' 
        />
      </div>
    );
  }
}

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

module.exports= CardGame ;
