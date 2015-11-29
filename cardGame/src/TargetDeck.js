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
      cardValue: card.value, 
      cardType: card.type
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
    const{imgDir, targetDeck, isOver, connectDropTarget}= this.props;

    return connectDropTarget(
      <div className= 'deck'>
        <Card
          imgDir= {imgDir} 
          index= {targetDeck.length- 1}
          deck=  {targetDeck}
          display= {'front'}
        />
      </div>
    );
  }
}

module.exports = DropTarget(Types.CARD, cardTarget, collect)(TargetDeck) ;
