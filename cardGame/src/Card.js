const React = require('react') ;
const DragSource = require('react-dnd').DragSource ;

const Types= {
  CARD: 'card'
};

const cardSource= {
  //canDrag(props){
    //return props.isReady;
  //},
  //isDragging(props, monitor){
    //console.log('isDragging') ;
    //return monitor.getItem().id === props.id;
  //},
  beginDrag(props){
    console.log('beginDrag') ;
    const card= {
      value: props.deck[props.index].cardValue,
      type: props.deck[props.index].cardType
    };
    console.log(props.deck[props.index].cardValue);
    return card;
  },
  endDrag(props, monitor, component){
    const card= monitor.getItem();
    if(monitor.didDrop()){
      //console.log('did drop');
      //props.deck.pop();     
      //console.log(props.deck[0]);
      //console.log(props.deck[1]);
      return;
    }
  }
};

function collect(connect, monitor){
  return{
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card extends React.Component{
  render(){
    const{ imgDir, index, deck, display, isDragging, connectDragSource} = this.props;
    var src= null;
    if(deck.length != 0){
      const cardFront= imgDir+ deck[index].cardType+ deck[index].cardValue+ '.gif';
      const cardBack= imgDir+ 'b2fv.gif';
      if(display== 'back'){
        src= cardBack;
      }
      else if(display== 'front'){
        src= cardFront;
      }
      else{
        src= index != deck.length- 1 ? cardBack: cardFront;
      }
    }
    return connectDragSource(
      <img 
        src= {src}
        className= 'img'
      />
    );
  }
}

module.exports= DragSource(Types.CARD, cardSource, collect)(Card);
