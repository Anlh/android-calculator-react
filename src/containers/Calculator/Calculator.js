import React, {Component} from 'react';

import classes from './Calculator.css';

class Calculator extends Component {
    state = {
        inputText: '',
        result: ''
    };

    render() {
        return (
            <div className={classes.Calculator}>
                Calculator stateful component
            </div>
        );
    }
}

export default Calculator;