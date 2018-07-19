import React, {Component} from 'react';

import classes from './Calculator.css';
import Display from '../../components/Display/Display';
import InputArea from '../../components/Display/InputArea/InputArea';
import Result from '../../components/Display/Result/Result';
import ButtonControls from '../../components/ButtonControls/ButtonControls';
import * as operators from '../../operators.constants';
import {isNumber} from "../../utils";

class Calculator extends Component {
    operator = false;

    state = {
        inputDisplay: '', // Used to display the current actions of the user
        total: 0, // Used to store and display the operation result
        showResult: false // Used to show/hide the total in the display
    };


    displayDecimalSeparator(separator) {
        const {inputDisplay} = this.state;
        this.setState({
            inputDisplay: inputDisplay + separator
        })
    }

    displayOperand(value) {
        const {inputDisplay, total} = this.state;
        const newInputDisplay = inputDisplay + value;

        this.setState({
            inputDisplay: newInputDisplay,
            total: isNumber(newInputDisplay.charAt(newInputDisplay.length - 1)) ? eval(newInputDisplay.replace(/x/g, '*')) : total,
            showResult: this.operator
        });
    }

    displayOperator(op) {
        const {inputDisplay} = this.state;

        // Prevent the first char in the display be an operator
        if (this.state.inputDisplay.length > 0) {
            this.operator = true;
            this.setState({
                inputDisplay: isNaN(inputDisplay.charAt(inputDisplay.length - 1)) ? inputDisplay.replace(/.$/, op) : inputDisplay + op
            })
        }
    }

    displayResult() {
        const {total} = this.state;

        this.operator = false;

        this.setState({
            inputDisplay: total === 0 ? '' : String(total),
            showResult: false
        });
    }

    cleanResult() {
        this.operator = false;
        this.setState({
            inputDisplay: '',
            total: 0,
            showResult: false
        });
    }


    buttonSelectHandler = valueSelected => {

        switch (valueSelected) {
            case operators.DEC_DEPARATOR:
                return this.displayDecimalSeparator(valueSelected);
            case operators.AC:
                return this.cleanResult();
            case operators.EQUAL:
                return this.displayResult();
            case operators.SUM:
            case operators.DIV:
            case operators.SUB:
            case operators.MULT:
                return this.displayOperator(valueSelected);
            default:
                if (isNumber(valueSelected)) {
                    return this.displayOperand(valueSelected);
                }
        }

    };

    render() {
        let result = null;

        if (this.state.showResult) {
            result = <Result result={this.state.total}/>
        }

        return (
            <div className={classes.Calculator}>
                <Display>
                    <InputArea val={this.state.inputDisplay}/>
                    {result}
                </Display>
                <ButtonControls buttonSelected={this.buttonSelectHandler}/>
            </div>
        );
    }
}

export default Calculator;