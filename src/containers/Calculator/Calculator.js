import React, {Component} from 'react';

import classes from './Calculator.css';
import Display from '../../components/Display/Display';
import InputArea from '../../components/Display/InputArea/InputArea';
import Result from '../../components/Display/Result/Result';
import ButtonControls from '../../components/ButtonControls/ButtonControls';
import * as operators from '../../operators.constants';
import {removeLastChar} from "../../utils";

class Calculator extends Component {
    state = {
        inputText: '',
        result: null,
        _lastOperator: null
    };

    buttonSelectHandler = (value) => {
        let valueDisplay = this.state.inputText;
        let result = this.state.result;
        let _lastOperator = this.state._lastOperator;

        // If It is an operand
        if (!isNaN(value)) {
            valueDisplay += value;

            if (this.state._lastOperator) {
                result += value;
            } else {
                result = Number(valueDisplay);
            }

        }
        // If It's an operator or another type of char
        else {
            if (this.state.inputText.length === 0) {
                return;
            }
            switch (value) {
                case operators.DEL:
                    valueDisplay = removeLastChar(this.state.inputText);
                    break;
                case operators.SUM:
                case operators.DIV:
                case operators.SUB:
                case operators.MULT:
                    let lastChar = this.state.inputText.substring(this.state.inputText.length - 1);

                    // If the last char from the display is an operator remove it and replace it for the current selected
                    if (isNaN(lastChar)) {
                        valueDisplay = removeLastChar(this.state.inputText);
                    }

                    valueDisplay += value;
                    _lastOperator = value;
                    break;
            }
        }


        this.setState({inputText: valueDisplay, result, _lastOperator});
    };


    render() {
        let result = null;

        if (this.state._lastOperator) {
            result = <Result result={this.state.result}/>;
        }


        return (
            <div className={classes.Calculator}>
                <Display>
                    <InputArea value={this.state.inputText}/>
                    {result}
                </Display>
                <ButtonControls onSelected={this.buttonSelectHandler}/>
            </div>
        );
    }
}

export default Calculator;