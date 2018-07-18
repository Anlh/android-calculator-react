import React, {Component} from 'react';

import classes from './Calculator.css';
import Display from '../../components/Display/Display';
import InputArea from '../../components/Display/InputArea/InputArea';
import Result from '../../components/Display/Result/Result';
import ButtonControls from '../../components/ButtonControls/ButtonControls';
import * as operators from '../../operators.constants';
import {isNumber, removeLastChar} from "../../utils";

class Calculator extends Component {
    state = {
        inputDisplay: [], // Used to display the current input actions and to store the user operations
        total: 0, // :number Used to display the current total
        numSelected: '', // :string Used to store the last number before the user select an operator
    };


    // calc(operand, prevNum, nextNum) {
    //
    // }

    calculate(valueSelected) {
        let numSelected = this.state.numSelected;
        let inputDisplay = [...this.state.inputDisplay];
        let total = this.state.total;

        // Don't let the first input be a char
        if (this.state.inputDisplay.length === 0 && isNaN(valueSelected)) {
            return;
        }


        switch (valueSelected) {
            case operators.SUM:
            case operators.DIV:
            case operators.SUB:
            case operators.MULT:
                let num = +numSelected;
                inputDisplay.push(num);
                total = total + valueSelected; //calc(valueSelected, total, num);
                numSelected = '';
                break;
            default:
                if (isNumber(valueSelected)) {
                    numSelected += valueSelected;
                }
        }

        this.setState({numSelected, inputDisplay, numSelected})
    }

    buttonSelectHandler = valueSelected => this.calculate(valueSelected);

    render() {
        let result = null;
        let display = this.state.inputDisplay.join('') + this.state.numSelected;

        if (this.state.total) {
            result = <Result result={this.state.total}/>;
        }

        return (
            <div className={classes.Calculator}>
                <Display>
                    <InputArea val={display}/>
                    {result}
                </Display>
                <ButtonControls onSelected={this.buttonSelectHandler}/>
            </div>
        );
    }
}

export default Calculator;