const React = require('react') ;
const ThreadItem = require('./ThreadItem') ;
const MessageItem = require('./MessageItem') ;

const initialState = {
    inputMsg : '',
    threads : [
        {
            targetName : 'Elsa',
            targetPic : 'http://lorempixel.com/50/50/people/1',
            messages : [
                { msgFromMe : false , msg : '對啊', time : '12:27 a.m.'},
                { msgFromMe : false , msg : 'hello', time : '12:27 a.m.'},
                { msgFromMe : false , msg : 'How are you ?', time : '12:27 a.m.'},
                { msgFromMe : true , msg : 'I\'m fine', time : '12:27 a.m.'},
                { msgFromMe : true , msg : 'Thank you !!', time : '12:27 a.m.'},

            ]
        },
        {
            targetName : 'Katharine',
            targetPic : 'http://lorempixel.com/50/50/people/9',
            messages : [
                { msgFromMe : false , msg : 'Hi', time : '12:27 a.m.'},
                { msgFromMe : true , msg : 'GoodBye~~', time : '12:27 a.m.'},
            ]
        },
        {
            targetName : 'Minami',
            targetPic : 'http://lorempixel.com/50/50/people/5',
            messages : [
                { msgFromMe : false , msg : 'I am Katharine ', time : '12:27 a.m.'},
                { msgFromMe : true , msg : 'GoodBye~~', time : '12:27 a.m.'},
            ]
        }
    ],
    currentIndex : 0
}

class ChatApp extends React.Component {
    constructor(props){
        super(props) ;
        this.state = initialState ;
    }
    
    clickThreadItem(i){
        this.setState(
            {currentIndex : i}
        ) ;
    }

    inputNewMsg(event){
        this.setState(
            {inputMsg :event.target.value }
        );
    }
    
    sendMsg(event){
        if(event.keyCode ==13){
            const{inputMsg, threads, currentIndex} = this.state;
            const d = new Date() ;
            var time = String(d.getHours()) + ':' + String(d.getMinutes()) ;
            if( d.getHours() >= 12){
                time = time + ' p.m.' ;
            }
            else{
                time = time + ' a.m.' ; 
            }
            threads[currentIndex].messages.push(
                {
                    msgFromMe : true,
                    msg : inputMsg,
                    time : time
                }
            );
            this.setState(
                {
                    threads : threads,
                    inputMsg : ''
                }
            );

        }   
    }

    renderThreadItem(thread, i){
        const{targetName, targetPic, messages} = thread ;
        const latestMsg = messages[messages.length - 1] ;
        return(
            <ThreadItem
                key = {i}
                picSrc = {targetPic}
                personName = {targetName}
                msg = {latestMsg.msg}
                msgTime = {latestMsg.time}
                onClick = {this.clickThreadItem.bind(this, i)}
            />
        ) ;
    }
    
    renderMessageItem(message, i){
        return(
            <MessageItem
                key = {i}
                msg = {message.msg}
                msgFromMe = {message.msgFromMe}
            />
        );
    }

    render() {
        const{inputMsg, currentIndex, threads} = this.state ;
        const currentPerson = threads[currentIndex].targetName ;
        const messages = threads[currentIndex].messages ;
        return (
            <div className="chat-app clearfix">
                <div className="chat-app_left">
                    <div className="heading">
                        <h3 className="messenger-title">Messager</h3>
                    </div>
                    <div className="thread-list">
                        {threads.map(this.renderThreadItem, this)}
                    </div>
                </div>
                <div className="chat-app_right">
                    <div className="heading">
                        <div className="current-target">{currentPerson}</div>
                    </div>
                    <div className="message-list">
                        {messages.map(this.renderMessageItem, this)}
                    </div>
                    <div className="footer">
                        <input className="new-message" 
                            type="text"
                            value = {inputMsg}
                            onChange = {this.inputNewMsg.bind(this)}
                            onKeyDown = {this.sendMsg.bind(this)}
                        />
                    </div>
                </div>
            </div>
      // html -> jsx
        );
    }
}

module.exports= ChatApp ;
