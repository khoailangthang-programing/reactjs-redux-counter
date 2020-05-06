import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let counterVal = this.props.counter;
        return (
            <span className="counter">{counterVal.counter.value}</span>
        );
    }
}

const CounterContent = connect(state => ({counter: state}))(Counter);

export default CounterContent;