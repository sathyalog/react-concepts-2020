import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comment:'',
             dropdown:'angular'
        }
    }

    nameHandler = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    commentHandler = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    dropdownHandler = (e) => {
        this.setState({
            dropdown: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.dropdown}`);
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label>Username: </label>
                <input type="text" value={this.state.username} onChange={this.nameHandler}></input><br/>
                <label>Comments:</label>
                <textarea value={this.state.comment} onChange={this.commentHandler}></textarea><br/>
                <select value={this.state.dropdown} onChange={this.dropdownHandler}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                </select><br/>
                <button>Submit</button>
                </form>
                <br/><br/><br/>
            </div>
        )
    }
}

export default Form
