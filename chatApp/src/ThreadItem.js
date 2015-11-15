const React = require('react') ;

class ThreadItem extends React.Component {
    render() {
        const{picSrc, personName, msg, msgTime, onClick} = this.props ;
        return (
            <li className="thread-item" onClick = {onClick}>
                <div className="clearfix">
                    <div className="thread-item_left">
                        <img className="img-circle" src= {picSrc} width="50" height="50" alt="" className="img" />
                    </div>
                    <div className="thread-item_right">
                        <div className="thread-from">
                            {personName}
                        </div>
                        <div>
                            <span className="thread-content">{msg}</span>
                        </div>
                        <span className="thread-time">{msgTime}</span>
                    </div>
                </div>
            </li>
          // html -> jsx
        );
    }
}

module.exports = ThreadItem ;
