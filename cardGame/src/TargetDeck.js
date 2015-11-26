const React = require('react') ;
//const DropTarget = require('reat-dnd').DropTarget

//const target ={
  //drop(props, monitor){
    //const{targetDeck}= this.props;
    //const card = monitor.getItem();
    //targetDeck.push(card);
  //}
//}

//function collect(connect, monitor){
  //return{
  //}; 
//}

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

module.exports = TargetDeck ;
