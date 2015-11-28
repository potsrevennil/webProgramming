const React = require('react') ;
const PlayingDeck = require('./PlayingDeck') ;
const MainDeckCard = require('./MainDeckCard') ;
const DealDeckCard = require('./DealDeckCard') ;
const TargetDeck = require('./TargetDeck') ;
const initialState = require('./initialState') ;
const DragDropContext = require('react-dnd').DragDropContext;
const HTML5Backend = require('react-dnd-html5-backend');
// const Rebase = require('re-base');
// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');
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
    var targetDeck= [];
      targetDeck= deck;
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
    var playingDeck= [];
    playingDeck= deck;
    const{imagePath}= this.state;
    return (
      <PlayingDeck
        index= {i}
        src= {imagePath}
        playingDeck= {playingDeck}
      />
    );
  }

  render(){
    const { imagePath, mainDeck, dealDeck, targetDecks, playingDecks } = this.state ; 
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
            <DealDeckCard src= {imagePath} deck= {dealDeck} />
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

module.exports= DragDropContext(HTML5Backend)(CardGame) ;
