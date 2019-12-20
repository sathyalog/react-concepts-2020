import React, { Component } from 'react'
import LifeCycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Sathya'
        }
        console.log('LifeCycleA constructor called')
    }

    static getDerivedStateFromProps(props,state) {
        console.log('LifeCycleA getDerivedStateFromProps called')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount called')
    }
    
    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name:'Sathya Vakacharla'
        })
    }
    render() {
        console.log('LifeCycleA render called')
        return (
            <div>
                LifeCycle A<br/>
                <button onClick={this.changeState}>Change State to trigger update lifecycle methods</button><br/>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifecycleA
