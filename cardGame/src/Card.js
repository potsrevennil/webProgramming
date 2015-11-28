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
    var item= {id: props.ID};
    console.log(props.ID);
    return item;
  }
  //endDrag(props, monitor, component){
    //if(!monitor.didDrop()){
      //console.log('Did not drop');
      //return;
    //}
    //var item= monitor.getItem();
    //var dropResult = monitor.getDropResult();
    //CardActions.moveCArdToList(item.id, dropResult.listid);
  //}
};

function collect(connect, monitor){
  return{
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Card extends React.Component{
  render(){
    const{ src, ID} = this.props;
    const{isDragging, connectDragSource} = this.props;
    return connectDragSource(
      <img 
        src= {src}
        className= 'img'
      />
    );
  }
}

module.exports= DragSource(Types.CARD, cardSource, collect)(Card);
