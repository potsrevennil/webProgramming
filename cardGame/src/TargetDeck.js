const React = require('react') ;
const Card = require('./Card') ;
const DropTarget = require('react-dnd').DropTarget ;

const Types ={
  CARD: 'card'
};

const cardTarget= {
  drop(props, monitor, component){
    const card= monitor.getItem()
    props.targetDeck.push({
      cardValue: card.id.substring(1,card.id.length), 
      cardType: card.id[0]
    });
    return;
  }
};

function collect(connect, monitor){
  return{
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  }; 
}

class TargetDeck extends React.Component{
  render(){
    const{src, targetDeck, isOver, connectDropTarget}= this.props;
    const targetDeckTop= targetDeck[targetDeck.length- 1]|| {}; 
    const tDTid= targetDeck.length? `${targetDeckTop.cardType}${targetDeckTop.cardValue}`: ''
    const tDTCardFront= targetDeck.length? src+ tDTid+ '.gif' : null;

    return connectDropTarget(
      <div className= 'deck'>
        <Card
          src= {tDTCardFront} 
          ID=  {tDTid}
        />
      </div>
    );
  }
}

module.exports = DropTarget(Types.CARD, cardTarget, collect)(TargetDeck) ;
