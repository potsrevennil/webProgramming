const React = require('react') ;

class MessageItem extends React.Component {
    render() {
        const{msg, msgFromMe } = this.props ;
        return (
            <div className={`message-item ${msgFromMe ? 'message-from-me' : 'message-from-other'}`}>
                <span>{msg}</span>
            </div>
      // html -> jsx
        );
    }
}

module.exports = MessageItem ;
