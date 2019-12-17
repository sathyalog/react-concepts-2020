import React, {Component} from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Please Subscribe: '
        }
    }
    changeMsg() {
        this.setState({
            message: 'Thanks for subscribing..'
        })
    }
    render() {
        return (
            <React.Fragment>
                <h3>{this.state.message} <button onClick={() => this.changeMsg()}>Subscribe</button></h3>
            </React.Fragment>
        )
    }
}

export default Message;