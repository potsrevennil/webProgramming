const React = require('react') ;
// const Rebase = require('re-base');
// const base = Rebase.createClass('https://chatappoflin.firebaseio.com');

const initialState = {
    decks: [
        {
            cardArray:[
                {
                    cardValue: "1",
                    cardColor: "spade",
                    pictureSrc: "src/images/1/s1.gif",
                    cardBack: "src/images/1/b2fv.gif"
                }
            ]
        },{
            cardArray:[
                {
                    cardValue: "2",
                    cardColor: "spade",
                    pictureSrc: "src/images/1/s2.gif",
                    cardBack: "src/images/1/b2fv.gif"
                },{
                    cardValue: "3",
                    cardColor: "spade",
                    pictureSrc: "src/images/1/s3.gif",
                    cardBack: "src/images/1/b2fv.gif"
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
                cardArray = {cardArray}
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
                    <div className= "playingDecks">
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

    renderCard(card, i){
        const {cardValue, cardColor, pictureSrc, cardBack} = card ;
        return(
            <Card
                index = {i}
                value = {cardValue}
                color = {cardColor}
                pictureSrc = {pictureSrc}
                cardBack = {cardBack}
            />
        );
    }

    render(){
        const {cardArray} = this.props ;
        return(
            <div className= "cards">
                {cardArray.map(this.renderCard,this)}
            </div>
        );
    }
}

class Card extends React.Component{
    render(){
        const {index, value, color, pictureSrc, cardBack} = this.props ;
        return(
            <div>
                <img className= "card" src = {index == 0 ? pictureSrc : cardBack} width = "100" height = "150" alt = "" className = "img" />
            </div>
        );
    }
}

module.exports= CardGame ;
