const React = require('react') ;
// const Rebase = require('re-base');
// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');

const initialState = {
    decks: [
        {
            cardArray:[
                {
                    cardValue:"1",
                    cardColor:"spade",
                    pictureSrc:"./images/1/s1.gif"
                }
            ]
        },{
            cardArray:[
                {
                    cardValue:"2",
                    cardColor:"spade",
                    pictureSrc:"./images/1/s2.gif"
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
    

    renderPlayingDeck(deck, i){
        const {cardArray} = deck ;
        return (
            <PlayingDeck 
                src = {cardArray.pictureSrc}
                cardColor = {cardArray.cardColor}
                cardValue = {cardArray.cardValue}
            />
        );

    }

    render(){
        const { decks } = this.state ; 
        return(
            <div className= "cardGame">
                <div className= "toolBar">
                    <h3 className = "gameButton"> Game </h3>
                </div>
                <div className= "field">
                    <div className= "playingRow">
                        {decks.map(this.renderPlayingDeck, this)}
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

class PlayingDeck extends React.Component{
    render(){
        const {src, cardColor, cardValue} = this.props ;
        return(
            <div>
                <img className = "displayedCard" src = {src} width = "50" height = "100" alt = "" className = "img" />
            </div>
        );
    }
}


module.exports= CardGame ;
