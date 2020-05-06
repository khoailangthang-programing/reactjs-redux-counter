import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './statements/store';
import CounterContent from './components/counter';
import BtnDecrementContent from './components/button-decrement';
import BtnIncrementContent from './components/button-increment';
import './index.css';

class App extends React.Component {

    render() {
        return (
            <div>
                <BtnDecrementContent />
                <CounterContent />
                <BtnIncrementContent />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);