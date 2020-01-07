import React, {Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component {
    render() {
        
        // Step2 : Create a Reducer. Need state & action
        const reducer = (state, action) => {
            if(action.type === 'ATTACK') { // Current state of the city is not in control trigger an action ATTACK and send Iron Man
                return action.payload
            }
            if(action.type === 'GREENATTACK') { // current state of the city is a war trigger an action GREENATTACK & send HULK
                return action.payload
            }
            if(action.type === 'Peace') { // current state of the city is under control then trigger an action Peace & send Buddha
                return action.payload
            }
            return state;
        }

        // Step1 : Create Store.
        const store = createStore(reducer, 'Peace'); // we need a reducer and state to create a store
        
        // Step3: Subscribe
        store.subscribe(() => {
            console.log('Agency is sending', store.getState());
        });

        // Step4: Dispatch Action
        store.dispatch({type:'ATTACK', payload: 'Iron Man'});
        store.dispatch({type:'GREENATTACK', payload: 'HULK'});
        store.dispatch({type:'Peace', payload: 'Buddha'});
        // So, based on your project requirements and its conditions, you need to dispatch an action with payload

        return (
            <div>
                Redux Demo. Check comments in code followed by console.
            </div>
        )
    }
}

export default ReduxDemo
