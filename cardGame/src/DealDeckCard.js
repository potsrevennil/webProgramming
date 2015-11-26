const React = require('react') ;

class DealDeckCard extends React.Component{
  render(){
    const {src}= this.props;
    return(
      <img  src= {src} className= 'img' />
    );
  }
}

module.exports= DealDeckCard;
