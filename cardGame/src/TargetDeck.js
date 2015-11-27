const React = require('react') ;
const Card = require('./Card') ;
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
    const{src, targetDeck}= this.props;
    const targetDeckTop= targetDeck[targetDeck.length- 1]|| {}; 
    const tDTid= targetDeck.length? `${targetDeckTop.cardType[0]}${targetDeckTop.cardValue}`: ''
    const tDTCardFront= targetDeck.length? src+ tDTid+ '.gif' : null;

    return(
      <div className= 'deck'>
        <Card
          src= {tDTCardFront} 
          ID=  {tDTid}
        />
      </div>
    );
  }
}

module.exports = TargetDeck ;
