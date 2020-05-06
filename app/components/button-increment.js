import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../statements/actions';

class BtnIncrement extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.dispatch(increment());
    }

    render() {
        return (
            <button onClick={this.handleClick} className="btn btn-right">
                +
            </button>
        );
    }
}

const BtnIncrementContent = connect(state => ({counter: state}))(BtnIncrement);

export default BtnIncrementContent;
;