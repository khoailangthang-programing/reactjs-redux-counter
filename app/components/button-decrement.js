import React from 'react';
import { connect } from 'react-redux';
import { decrement } from '../statements/actions';

class BtnDecrement extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(decrement());
    }

    render() {
        return (
            <button onClick={this.handleClick} className="btn btn-left">
                -
            </button>
        );
    }
}

const BtnDecrementContent = connect(state => ({counter: state}))(BtnDecrement);

export default BtnDecrementContent;