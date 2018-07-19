import React from 'react';

import classes from './ButtonControls.css';
import ButtonControl from './ButtonControl/ButtonControl';
import * as operators from '../../operators.constants';

const buttonControls = (props) => {
    const leftControlsMatrix = [
        [7, 8, 9],
        [4, 5, 6],
        [1, 2, 3],
        [operators.DEC_DEPARATOR, 0, operators.EQUAL]
    ];
    const rightControls = [
        operators.AC,
        operators.DIV,
        operators.MULT,
        operators.SUB,
        operators.SUM
    ];

    const leftButtons = leftControlsMatrix
        .map(arr => arr.map(value =>
            <ButtonControl
                selected={() => props.buttonSelected(value)}
                key={value}
                val={value}/>));

    const rightButtons = rightControls.map(value => {
        return <ButtonControl
            selected={() => props.buttonSelected(value)}
            _width="100%"
            _height="20%"
            key={value}
            val={value}/>
    });

    return (
        <div className={classes.ButtonControls}>
            <div className={classes.LeftControls}>
                {leftButtons}
            </div>
            <div className={classes.RightControls}>
                {rightButtons}
            </div>
        </div>
    );
};

export default buttonControls;